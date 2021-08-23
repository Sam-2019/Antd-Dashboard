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
        <Form.Item name="date-picker" label="Date" {...config}>
          <DatePicker />
        </Form.Item>

        <Form.Item name="time-picker" label=" Start Time" {...config}>
          <TimePicker />
        </Form.Item>

        <Form.Item name="time-picker" label="Preacher" {...config}>
          <Input style={{ width: "30%" }} placeholder="Basic usage" />
        </Form.Item>

        <Form.Item name="time-picker" label="Theme" {...config}>
          <Input style={{ width: "30%" }} placeholder="Basic usage" />
        </Form.Item>

        <Form.Item name="time-picker" label="Bible Text" {...config}>
          <Input style={{ width: "30%" }} placeholder="Basic usage" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Row>
            <Col span={3}>Male</Col>

            <Col span={3}>Female</Col>
          </Row>
        </Form.Item>

        <Form.Item label="Adults" name="layout">
          <Row>
            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>

            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item label="Omega Generation" name="layout">
          <Row>
            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>

            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item label="Children" name="layout">
          <Row>
            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>

            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item label="Alter Call" name="layout">
          <Row>
            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>

            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Row>
            <Col span={3}>Cars</Col>

            <Col span={3}>Motors</Col>

            <Col span={3}>Bicycles</Col>
          </Row>
        </Form.Item>

        <Form.Item label="Vehicles" name="layout">
          <Row>
            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>

            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>

            <Col span={3}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                style={{ width: "50%" }}
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item name="time-picker" label="End Time" {...config}>
          <TimePicker />
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
