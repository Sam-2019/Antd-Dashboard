import { Input, DatePicker, Form, Button, InputNumber } from "antd";
import { useMutation } from "@apollo/client";
import GoBack from "../../../components/GoBack";
import { ADD_PLEDGE } from "../../../utils/graphqlFunctions/mutations";
import { Success, Error } from "../../../components/Modal/Modal";
import { GET_PLEDGES } from "../../../utils/graphqlFunctions/queries";
import { inputStyles } from "../../../utils/styles";

function Pledge() {
  const [form] = Form.useForm();
  const [addPledge] = useMutation(ADD_PLEDGE, {
    refetchQueries: [{ query: GET_PLEDGES }],
  });

  const onFinish = async (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      pledgeDate: fieldsValue["pledgeDate"].format("YYYY-MM-DD"),
      redeemedDate: fieldsValue["redeemedDate"].format("YYYY-MM-DD"),
    };

    const {
      pledgeDate,
      firstName,
      lastName,
      otherName,
      contact,
      emailAddress,
      programme,
      redeemedDate,
      amount,
    } = values;

    const data = await addPledge({
      variables: {
        addPledge: {
          pledgeDate,
          firstName,
          lastName,
          otherName,
          contact,
          emailAddress,
          programme,
          redeemedDate,
          amount,
        },
      },
    });

    if (!data) {
      return Error("Update failed");
    }

    form.resetFields();

    Success("Pledge added");
  };

  return (
    <div>
      <GoBack header="Add Pledge" />
      <Form
        form={form}
        name="pledge"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          name="pledgeDate"
          label="Date"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker style={inputStyles} />
        </Form.Item>

        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="otherName" label="Other Name">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item
          name="contact"
          label="Contact"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item
          name="emailAddress"
          label="Email Address"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item
          name="programme"
          label="Programme"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: "Required!" }]}
        >
          <InputNumber style={inputStyles} />
        </Form.Item>

        <Form.Item
          name="redeemedDate"
          label="Redeem Date"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker style={inputStyles} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Pledge;
