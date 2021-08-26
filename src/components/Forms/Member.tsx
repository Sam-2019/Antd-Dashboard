import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Input,
  Col,
  Row,
  InputNumber,
  DatePicker,
  Form,
  Button,
  Radio,
  Checkbox,
  Space,
} from "antd";
import { departments } from "../../others/data";
import GoBack from "../GoBack";

function Member() {
  const onFinish = (fieldsValue: any) => {
    // Should format date value before submit.

    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "date-picker2": fieldsValue["date-picker2"].format("YYYY-MM-DD"),
    };
    console.log("Received values of form: ", values);
  };

  return (
    <div style={{ border: "1px solid green" }}>
      <GoBack />
      <Form
        name="member"
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
          name="lasttName"
          label="Last Name"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="othertName" label="Other Name">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="date-picker"
          label="Date of Birth"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item name="age" label="Age">
          <InputNumber style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Radio.Group>
            <Radio.Button value="Male">Male</Radio.Button>
            <Radio.Button value="Female">Female</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="hometown"
          label="Home Town"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="region"
          label="Region"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="country"
          label="Country"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="residentialAddress"
          label="Residential Address"
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
          name="emergencyContact"
          label="Emergency Contact"
          rules={[{ required: true, message: "Required!" }]}
        >
          <InputNumber keyboard={true} style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="emailAddress"
          label="Email Address"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="postalAddress"
          label="Postal Address"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="maritalStatus"
          label="Marital Status"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Radio.Group>
            <Radio.Button value="Single">Single</Radio.Button>
            <Radio.Button value="Married">Married</Radio.Button>
            <Radio.Button value="Divorced">Divorced</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="spouseName" label="Name of Spouse">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="children"
          label="Number of children"
          rules={[{ required: true, message: "Required!" }]}
        >
          <InputNumber keyboard={true} style={{ width: 200 }} />
        </Form.Item>

        <Form.Item label="Name of children" style={{ marginBottom: 0 }} />

        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Form.Item
                  key={key}
                  wrapperCol={{
                    xs: { span: 24, offset: 0 },
                    sm: { span: 13, offset: 8 },
                  }}
                  style={{ marginBottom: 10 }}
                >
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 0 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      style={{ marginBottom: 0 }}
                      name={[name, "first"]}
                      fieldKey={[fieldKey, "first"]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      style={{ marginBottom: 0 }}
                      name={[name, "last"]}
                      fieldKey={[fieldKey, "last"]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                </Form.Item>
              ))}

              <Form.Item
                wrapperCol={{
                  xs: { span: 24, offset: 0 },
                  sm: { span: 16, offset: 8 },
                }}
              >
                <Space align="baseline">
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Space>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item
          name="date-picker2"
          label="Date you joined the church"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item name="checkbox-group" label="Department">
          <Checkbox.Group>
            <Row>
              {departments.map((data) => (
                <Col span={8} key={data.key}>
                  <Checkbox value={data.name} style={{ lineHeight: "32px" }}>
                    {data.name}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="previousChurch" label="Previous Church">
          <Input style={{ width: 200 }} />
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

export default Member;
