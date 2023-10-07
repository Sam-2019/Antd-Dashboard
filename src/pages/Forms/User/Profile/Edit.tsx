import { Input, Form, Button, Radio, Space, DatePicker } from "antd";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_DETAILS } from "../../../../utils/graphqlFunctions/mutations";
import { Success, Error } from "../../../../components/Modal/Modal";
import { USER_DETAILS } from "../../../../utils/graphqlFunctions/queries";
import { inputStyles } from "../../../../utils/styles";
import { SUBMIT } from "../../../../utils/constants";

function Profile({ handleCancel, data }: any) {
  const [form] = Form.useForm();

  const [updateUser, { loading }] = useMutation(UPDATE_USER_DETAILS, {
    refetchQueries: [{ query: USER_DETAILS }],
  });

  const onFinish = async (fieldsValue: any) => {
    const result = await updateUser({
      variables: {
        updateUserId: data.id,
        updateUserInput: {
          ...fieldsValue,
        },
      },
    });

    if (!result) {
      return Error("Update failed");
    }

    form.resetFields();
    handleCancel();
    Success("Visitor updated");
  };

  return (
    <div>
      <Form
        form={form}
        name="visitor"
        onFinish={onFinish}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          firstName: data.firstName,
          lastName: data.lastName,
          userName: data.userName,
          gender: data.gender,
          contact: data.contact,
          emailAddress: data.emailAddress,
          homeAddress: data.homeAddress,
          password: data.password,
          dob: data.dob,
        }}
      >
        <Form.Item name="firstName" label="First Name">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="gender" label="Gender">
          <Radio.Group>
            <Radio.Button value="male">Male</Radio.Button>
            <Radio.Button value="female">Female</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="contact" label="Contact">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="emailAddress" label="Email">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="homeAddress" label="Address">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="dob" label="Date of Birth">
          <DatePicker style={inputStyles} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 10 },
          }}
        >
          <Space>
            <Button type="primary" loading={loading} htmlType="submit">
              {loading ? null : SUBMIT}
            </Button>
            <Button htmlType="button" onClick={handleCancel}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Profile;
