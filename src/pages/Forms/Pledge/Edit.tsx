import { Input, Form, Button, InputNumber, Space } from "antd";
import { useMutation } from "@apollo/client";
import { UPDATE_PLEDGE } from "../../../utils/graphqlFunctions/mutations";
import { success } from "../../../components/Modal/Modal";

function Pledge({ handleCancel, slug }: any) {
  const [form] = Form.useForm();

  const [updatePledge] = useMutation(UPDATE_PLEDGE);

  const onFinish = (fieldsValue: any) => {

    updatePledge({
      variables: {
        updatePledgeId: slug,
        updatePledgeInput: {
          ...fieldsValue,
        },
      },
    });

    form.resetFields();

    success("Pledge updated");
  };

  return (
    <div>
      <Form
        form={form}
        name="member"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item name="firstName" label="First Name">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="otherName" label="Other Name">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="contact" label="Contact">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="emailAddress" label="Email Address">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="programme" label="Programme">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="amount" label="Amount">
          <InputNumber style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
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

export default Pledge;
