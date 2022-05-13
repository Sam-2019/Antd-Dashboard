import { Input, Form, Button, Radio, Space, DatePicker } from "antd";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_DETAILS } from "../../../../utils/graphqlFunctions/mutations";
import { Success, Error } from "../../../../components/Modal/Modal";
import { useParams } from "react-router-dom";
import { USER_DEATILS } from "../../../../utils/graphqlFunctions/queries";
import { inputStyles } from "../../../../utils/styles";

function Profile({ handleCancel, data }: any) {
  const [form] = Form.useForm();
  let { slug }: any = useParams();

  const [updateUser] = useMutation(UPDATE_USER_DETAILS, {
    refetchQueries: [{ query: USER_DEATILS, variables: { visitorId: slug } }],
  });

  const onFinish = async (fieldsValue: any) => {
    const data = await updateUser({
      variables: {
        updateUserId: slug,
        updateUserInput: {
          ...fieldsValue,
        },
      },
    });

    if (!data) {
      return Error("Update failed");
    }

    form.resetFields();

    Success("Visitor updated");

    handleCancel();
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
          gender: data.gender,
          contact: data.contact,
          email: data.email,
          homeAddress: data.homeAddress,
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

        <Form.Item name="email" label="Email">
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
            <Button type="primary" htmlType="submit">
              Submit
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
