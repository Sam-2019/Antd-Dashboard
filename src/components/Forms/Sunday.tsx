import {
  Input,
  Col,
  Row,
  InputNumber,
  DatePicker,
  Form,
  TimePicker,
  Button,
} from "antd";
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

function Sunday() {
  const onFinish = (fieldsValue: any) => {
    // Should format date value before submit.

    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),

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
        <Form.Item
          name="date-picker"
          label="Date"
          rules={[{ required: true, message: "Please select Date!" }]}
        >
          <DatePicker style={{ width: "36%" }} />
        </Form.Item>

        <Form.Item
          name="time-picker"
          label=" Start Time"
          rules={[{ required: true, message: "Please select start time!" }]}
        >
          <TimePicker style={{ width: "36%" }}  />
        </Form.Item>

        <Form.Item
          name="preacher"
          label="Preacher"
          rules={[{ required: true, message: "Preacher is required!" }]}
        >
          <Input style={{ width: "36%" }} />
        </Form.Item>

        <Form.Item
          name="theme"
          label="Theme"
          rules={[{ required: true, message: "Theme is required!" }]}
        >
          <Input style={{ width: "36%" }} />
        </Form.Item>

        <Form.Item
          name="bible-text"
          label="Bible Text"
          rules={[{ required: true, message: "Bible Text is required!" }]}
          style={{ marginBottom: 10 }}
        >
          <Input style={{ width: "36%" }} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 13, offset: 8 },
          }}
          style={{ marginBottom: 10 }}
        >
          <Row>
            <Col span={6}>Male</Col>

            <Col span={6}>Female</Col>
          </Row>
        </Form.Item>

        <Form.Item label="Adults" style={{ marginBottom: 0 }}>
          <Form.Item
            name="adult-male"
            style={{ display: "inline-block", width: "calc(20% - 8px)" }}
            rules={[{ required: true, message: "Required!" }]}
          >
            <InputNumber keyboard={true} />
          </Form.Item>

          <Form.Item
            name="adult-female"
            style={{
              display: "inline-block",
              width: "calc(20% - 8px)",
              margin: "0 8px",
            }}
            rules={[{ required: true, message: "Required!" }]}
          >
            <InputNumber keyboard={true} />
          </Form.Item>
        </Form.Item>

        <Form.Item label="Omega Generation" style={{ marginBottom: 0 }}>
          <Form.Item
            name="omega-male"
            style={{ display: "inline-block", width: "calc(20% - 8px)" }}
            rules={[{ required: true, message: "Required!" }]}
          >
            <InputNumber keyboard={true} />
          </Form.Item>

          <Form.Item
            name="omega-female"
            style={{
              display: "inline-block",
              width: "calc(20% - 8px)",
              margin: "0 8px",
            }}
            rules={[{ required: true, message: "Required!" }]}
          >
            <InputNumber keyboard={true} />
          </Form.Item>
        </Form.Item>

        <Form.Item label="Children" style={{ marginBottom: 0 }}>
          <Form.Item
            name="children-male"
            style={{ display: "inline-block", width: "calc(20% - 8px)" }}
            rules={[{ required: true, message: "Required!" }]}
          >
            <InputNumber keyboard={true} />
          </Form.Item>

          <Form.Item
            name="children-female"
            style={{
              display: "inline-block",
              width: "calc(20% - 8px)",
              margin: "0 8px",
            }}
            rules={[{ required: true, message: "Required!" }]}
          >
            <InputNumber keyboard={true} />
          </Form.Item>
        </Form.Item>

        <Form.Item
          name="time-picker"
          label="End Time"
          rules={[{ required: true, message: "Please select End Time!" }]}
        >
          <TimePicker style={{ width: "36%" }}  />
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

export default Sunday;
