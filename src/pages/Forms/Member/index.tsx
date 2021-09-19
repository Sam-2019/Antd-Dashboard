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
import { useMutation } from "@apollo/client";
import { departments } from "../../../utils/data";
import GoBack from "../../../components/GoBack";
import { ADD_MEMBER } from "../../../utils/graphqlFunctions/mutations";
import { success } from "../../../components/Modal/Modal";

function Member() {
  const [form] = Form.useForm();
  const [addMember] = useMutation(ADD_MEMBER);

  const onFinish = (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      dateOfBirth: fieldsValue["dateOfBirth"].format("YYYY-MM-DD"),
      // dateJoinedChurch: fieldsValue["dateJoinedChurch"].format("YYYY-MM-DD"),
    };
    ///   console.log("Received values of form: ", values);

    const {
      firstName,
      lastName,
      otherName,
      dateOfBirth,
      age,
      gender,
      hometown,
      location,
      region,
      country,
      residentialAddress,
      contact,
      emergencyContact,
      emailAddress,
      postalAddress,
      maritalStatus,
      spouseName,
      numberOfChlidren,
      nameOfChildren,
      // dateJoinedChurch,
      department,
      previousChurch,
    } = values;

    addMember({
      variables: {
        addMember: {
          firstName,
          lastName,
          otherName,
          dateOfBirth,
          age,
          gender,
          location,
          hometown,
          region,
          country,
          residentialAddress,
          contact,
          emergencyContact,
          emailAddress,
          postalAddress,
          maritalStatus,
          spouseName,
          numberOfChlidren,
          // dateJoinedChurch,
          previousChurch,
          department,
          nameOfChildren,
        },
      },
    });

    form.resetFields();

    success("Member added");
  };

  return (
    <div>
      <GoBack header="Add Member" />
      <Form
        form={form}
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
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="otherName" label="Other Name">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="dateOfBirth"
          label="Date of Birth"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker style={{ width: 200 }} />
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
          name="location"
          label="Location"
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
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="emailAddress" label="Email Address">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="postalAddress" label="Postal Address">
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

        <Form.Item name="numberOfChlidren" label="Number of children">
          <InputNumber keyboard={true} style={{ width: 200 }} />
        </Form.Item>

        <Form.Item label="Name of children" style={{ marginBottom: 0 }} />

        <Form.List name="nameOfChildren">
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
                      name={[name]}
                      fieldKey={[fieldKey, "name"]}
                    >
                      <Input placeholder="Full Name" />
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
        {/* 
        <Form.Item
          name="dateJoinedChurch"
          label="Date you joined the church"
     
        >
          <DatePicker style={{ width: 200 }} />
        </Form.Item> */}

        <Form.Item name="department" label="Department">
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
