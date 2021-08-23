import { Input, DatePicker, Form, Button, Radio, Col, Row } from "antd";
import GoBack from "../GoBack";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const config = {
  rules: [
    { type: "object" as const, required: true, message: "Please select time!" },
  ],
};

function Sunday() {
  const onFinish = (fieldsValue: any) => {
    // Should format date value before submit.

    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
      "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
    };
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <GoBack />
      <Form
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item name="time-picker" label="Name" {...config}>
          <Input style={{ width: "30%" }} placeholder="Basic usage" />
        </Form.Item>

        <Form.Item name="time-picker" label="Contact" {...config}>
          <Input style={{ width: "30%" }} placeholder="Basic usage" />
        </Form.Item>

        <Form.Item name="time-picker" label="Location" {...config}>
          <Input style={{ width: "30%" }} placeholder="Basic usage" />
        </Form.Item>

        <Form.Item name="date-picker" label="Date" {...config}>
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="radio-button"
          label="Age Group"
          rules={[{ required: true, message: "Please pick an item!" }]}
        >
          <Radio.Group>
            <Radio.Button value="13 - 18">13 - 18</Radio.Button>
            <Radio.Button value="19 - 25">19 - 25</Radio.Button>
            <Radio.Button value="26 - 35">26 - 35</Radio.Button>
            <Radio.Button value="36 - 55">36 - 55</Radio.Button>
            <Radio.Button value="56+">56+ </Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="month-picker" label="Month of Birth" {...config}>
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="radio-button"
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
          <Row>
            <Col span={12}>
              <Input style={{ width: "50%" }} placeholder="Basic usage" />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item name="time-picker" label="Invited by" {...config}>
          <Input style={{ width: "30%" }} placeholder="Basic usage" />
        </Form.Item>

        <Form.Item
          name="radio-button"
          label="Would like to become a member of Elim Temple? "
          rules={[{ required: true, message: "Please pick an item!" }]}
        >
          <Radio.Group>
            <Radio.Button value="yes">Yes</Radio.Button>
            <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
        </Form.Item>

        
        <Form.Item
          name="radio-button"
          label="Just visiting "
          rules={[{ required: true, message: "Please pick an item!" }]}
        >
          <Radio.Group>
            <Radio.Button value="true">Yes</Radio.Button>
            <Radio.Button value="false">No</Radio.Button>
          </Radio.Group>
        </Form.Item>

        
        <Form.Item
          name="radio-button"
          label="Would like to know more about being a Christian? "
          rules={[{ required: true, message: "Please pick an item!" }]}
        >
          <Radio.Group>
            <Radio.Button value="a">Yes</Radio.Button>
            <Radio.Button value="b">No</Radio.Button>
          </Radio.Group>
        </Form.Item>


      </Form>

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
    </div>
  );
}

export default Sunday;
