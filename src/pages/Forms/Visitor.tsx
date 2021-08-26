import { Input, DatePicker, Form, Button, Radio } from "antd";
import GoBack from "../../components/GoBack";


function Visitor() {
  const onFinish = (fieldsValue: any) => {
    // Should format date value before submit.

    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
    };
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <GoBack />
      <Form
        name="visitor"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          name="name"
          label="Name"
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
          name="date-picker"
          label="Date"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker  style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="age-group"
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
          name="month-picker"
          label="Month of Birth"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker picker="month" />
        </Form.Item>

        <Form.Item
          name="awareness-channel"
          label="How did you hear about the church programme?"
          rules={[{ required: true, message: "Please pick an item!" }]}
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
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="invited-by"
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
          name="knowing-Christ"
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
