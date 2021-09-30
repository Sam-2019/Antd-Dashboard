import { Input, DatePicker, Form, Button, Radio } from "antd";
import { useMutation } from "@apollo/client";
import GoBack from "../../../components/GoBack";
import { ADD_VISITOR } from "../../../utils/graphqlFunctions/mutations";
import { success } from "../../../components/Modal/Modal";

function Visitor() {
  const [form] = Form.useForm();
  const [addVisitor] = useMutation(ADD_VISITOR);

  const onFinish = (fieldsValue: any) => {
    // Should format date value before submit.

    const values = {
      ...fieldsValue,
      date: fieldsValue["date"].format("YYYY-MM-DD"),
      monthOfBirth: fieldsValue["monthOfBirth"].format("YYYY-MM"),
    };

    console.log("Received values of form: ", values);

    const {
      firstName,
      lastName,
      ageGroup,
      awarenessChannel,
      contact,
      awarenessChannelOther,
      date,
      invitedBy,
      location,
      knowingChrist,
      membership,
      monthOfBirth,
      group,
    } = values;

    addVisitor({
      variables: {
        addVisitorInput: {
          firstName,
          lastName,
          ageGroup,
          awarenessChannel,
          contact,
          awarenessChannelOther,
          date,
          invitedBy,
          location,
          knowingChrist,
          membership,
          monthOfBirth,
          group,
        },
      },
    });

    form.resetFields();

    success("Visitor added");
  };

  return (
    <div>
      <GoBack header="Add Visitor" />
      <Form
        form={form}
        name="visitor"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="contact"
          label="Contact"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="ageGroup"
          label="Age Group"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Radio.Group>
            <Radio.Button value="13 - 18">13 - 18</Radio.Button>
            <Radio.Button value="19 - 25">19 - 25</Radio.Button>
            <Radio.Button value="26 - 35">26 - 35</Radio.Button>
            <Radio.Button value="36 - 55">36 - 55</Radio.Button>
            <Radio.Button value="56+">56+ </Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="group"
          label="Group"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Radio.Group>
            <Radio.Button value="Adult">Adult</Radio.Button>
            <Radio.Button value="Omega">Omega</Radio.Button>
            <Radio.Button value="Children">Children</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="monthOfBirth"
          label="Month of Birth"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker picker="month" />
        </Form.Item>

        <Form.Item
          name="awarenessChannel"
          label="How did you hear about the church programme?"
          // rules={[{ required: true, message: "Please pick an item!" }]}
        >
          <Radio.Group>
            <Radio.Button value="flyer">Flyer</Radio.Button>
            <Radio.Button value="banner">Banner</Radio.Button>
            <Radio.Button value="other">Other</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
          name="awarenessChannelOther"
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="invitedBy"
          label="Invited by"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="membership"
          label="Would like to become a member of Elim Temple? "
          rules={[{ required: true, message: "Required!" }]}
        >
          <Radio.Group>
            <Radio.Button value="yes">Yes</Radio.Button>
            <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="visitation"
          label="Just visiting?"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Radio.Group>
            <Radio.Button value="yes">Yes</Radio.Button>
            <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="knowingChrist"
          label="Would like to know more about being a Christian? "
          rules={[{ required: true, message: "Required!" }]}
        >
          <Radio.Group>
            <Radio.Button value="yes">Yes</Radio.Button>
            <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
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

export default Visitor;
