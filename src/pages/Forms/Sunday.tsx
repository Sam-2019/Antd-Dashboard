import { Input, InputNumber, DatePicker, Form, TimePicker, Button } from "antd";
import GoBack from "../../components/GoBack";

function Sunday() {
  const onFinish = (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
      "time-picker2": fieldsValue["time-picker2"].format("HH:mm:ss"),
    };
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <GoBack />
      <div style={{}}>
        <Form
          name="sinday-form"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="date-picker"
            label="Date"
            rules={[{ required: true, message: "Required!" }]}
          >
            <DatePicker style={{ width: 200 }} />
          </Form.Item>

          <Form.Item
            name="time-picker"
            label=" Start Time"
            rules={[{ required: true, message: "Required!" }]}
          >
            <TimePicker style={{ width: 200 }} />
          </Form.Item>

          <Form.Item
            name="preacher"
            label="Preacher"
            rules={[{ required: true, message: "Required!" }]}
          >
            <Input style={{ width: 200 }} />
          </Form.Item>

          <Form.Item
            name="theme"
            label="Theme"
            rules={[{ required: true, message: "Required!" }]}
          >
            <Input style={{ width: 200 }} />
          </Form.Item>

          <Form.Item
            name="bible-text"
            label="Bible Text"
            rules={[{ required: true, message: "Required!" }]}
          >
            <Input style={{ width: 200 }} />
          </Form.Item>

          <Form.Item label="Adult" style={{ marginBottom: 0 }}>
            <Form.Item
              name="adult-male"
              rules={[{ required: true, message: "Required!" }]}
              style={{
                display: "inline-block",
                width: "auto",
                marginRight: 10,
              }}
            >
              <InputNumber placeholder="Male" />
            </Form.Item>
            <Form.Item
              name="adult-female"
              rules={[{ required: true, message: "Required!" }]}
              style={{ display: "inline-block", width: "auto" }}
            >
              <InputNumber placeholder="Female" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Omega" style={{ marginBottom: 0 }}>
            <Form.Item
              name="omega-male"
              rules={[{ required: true, message: "Required!" }]}
              style={{
                display: "inline-block",
                width: "auto",
                marginRight: 10,
              }}
            >
              <InputNumber placeholder="Male" />
            </Form.Item>
            <Form.Item
              name="omega-female"
              rules={[{ required: true, message: "Required!" }]}
              style={{ display: "inline-block", width: "auto" }}
            >
              <InputNumber placeholder="Female" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Children" style={{ marginBottom: 0 }}>
            <Form.Item
              name="children-boy"
              rules={[{ required: true, message: "Required!" }]}
              style={{
                display: "inline-block",
                width: "auto",
                marginRight: 10,
              }}
            >
              <InputNumber placeholder="Male" />
            </Form.Item>
            <Form.Item
              name="children-girl"
              rules={[{ required: true, message: "Required!" }]}
              style={{ display: "inline-block", width: "auto" }}
            >
              <InputNumber placeholder="Female" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Alter Call" style={{ marginBottom: 0 }}>
            <Form.Item
              name="altercall-men"
              style={{
                display: "inline-block",
                width: "auto",
                marginRight: 10,
              }}
            >
              <InputNumber placeholder="Male" />
            </Form.Item>
            <Form.Item
              name="altercall-female"
              style={{ display: "inline-block", width: "auto" }}
            >
              <InputNumber placeholder="Female" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Visitors" style={{ marginBottom: 0 }}>
            <Form.Item
              name="visitors-men"
              style={{
                display: "inline-block",
                width: "auto",
                marginRight: 10,
              }}
            >
              <InputNumber placeholder="Male" />
            </Form.Item>
            <Form.Item
              name="visitors-female"
              style={{ display: "inline-block", width: "auto" }}
            >
              <InputNumber placeholder="Female" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Vehicles" style={{ marginBottom: 0 }}>
            <Form.Item
              name="cars"
              rules={[{ required: true, message: "Required!" }]}
              style={{
                display: "inline-block",
                width: "auto",
                marginRight: 10,
              }}
            >
              <InputNumber placeholder="Cars" />
            </Form.Item>

            <Form.Item
              name="motors"
              rules={[{ required: true, message: "Required!" }]}
              style={{
                display: "inline-block",
                width: "auto",
                marginRight: 10,
              }}
            >
              <InputNumber placeholder="Motors" />
            </Form.Item>
            <Form.Item
              name="bicycles"
              rules={[{ required: true, message: "Required!" }]}
              style={{ display: "inline-block", width: "auto" }}
            >
              <InputNumber placeholder="Bicycles" />
            </Form.Item>
          </Form.Item>

          <Form.Item
            name="time-picker2"
            label=" Close Time"
            rules={[{ required: true, message: "Required!" }]}
          >
            <TimePicker style={{ width: 200 }} />
          </Form.Item>

          <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Sunday;
