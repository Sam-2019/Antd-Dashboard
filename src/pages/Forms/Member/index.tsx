import { useState } from "react";
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
  Select,
  Steps,
} from "antd";

import { useMutation } from "@apollo/client";
import { departments } from "../../../utils/data";
import GoBack from "../../../components/GoBack";
import { ADD_MEMBER } from "../../../utils/graphqlFunctions/mutations";
import { success, error } from "../../../components/Modal/Modal";
import { GET_MEMBERS } from "../../../utils/graphqlFunctions/queries";
import { steps, regions, countries } from "../../../utils/data";

const { Step } = Steps;
const { Option } = Select;

function Member() {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [addMember] = useMutation(ADD_MEMBER, {
    refetchQueries: [{ query: GET_MEMBERS }],
  });

  const onRegionChange = (value: string) => {};

  const onCountryChange = (value: string) => {};

  const onChange = (current: any) => {
    // setCurrent(current);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = async (fieldsValue: any) => {
    if (current === 0) {
      const pageOne = {
        ...fieldsValue,
        dateOfBirth: fieldsValue["dateOfBirth"].format("YYYY-MM-DD"),
      };
      localStorage.setItem("0", JSON.stringify(pageOne));
      setCurrent(current + 1);
    }

    if (current === 1) {
      const pageTwo = {
        ...fieldsValue,
      };
      localStorage.setItem("1", JSON.stringify(pageTwo));
      setCurrent(current + 1);
    }

    if (current === 2) {
      const getPage1 = JSON.parse(localStorage.getItem("0") || "");
      const getPage2 = JSON.parse(localStorage.getItem("1") || "");

      const values = {
        ...getPage1,
        ...getPage2,
        ...fieldsValue,
        yearJoinedChurch: fieldsValue["yearJoinedChurch"].format("YYYY"),
      };

      const data = await addMember({
        variables: {
          addMember: {
            ...values,
          },
        },
      });

      if (!data) {
        return error("Registration failed");
      }

      form.resetFields();
      success("Member added");
      setCurrent(0);
      localStorage.clear();
    }
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
        <div style={{ marginBottom: 30 }}>
          <Steps
            type="default"
            current={current}
            onChange={onChange}
            className="site-navigation-steps"
          >
            {steps.map((item: any) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>
        {current === 0 && (
          <div className="steps-content">
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
          </div>
        )}
        {current === 1 && (
          <div className="steps-content">
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
              <Select
                placeholder="Select region"
                onChange={onRegionChange}
                allowClear
                style={{ width: 200 }}
              >
                {regions.map((item: any) => (
                  <Option key={item.key} value={item.value}>
                    {item.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Select
                placeholder="Select country"
                onChange={onCountryChange}
                allowClear
                style={{ width: 200 }}
              >
                {countries.map((country: any) => (
                  <Option key={country.code} value={country.name}>
                    {country.name}
                  </Option>
                ))}
              </Select>
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
          </div>
        )}
        {current === 2 && (
          <div className="steps-content">
            <Form.Item
              name="yearJoinedChurch"
              label="Year you joined the church"
              rules={[{ required: true, message: "Required!" }]}
            >
              <DatePicker style={{ width: 200 }} picker="year" />
            </Form.Item>

            <Form.Item name="department" label="Department">
              <Checkbox.Group>
                <Row>
                  {departments.map((data) => (
                    <Col span={8} key={data.key}>
                      <Checkbox
                        value={data.name}
                        style={{ lineHeight: "32px" }}
                      >
                        {data.name}
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              name="group"
              label="Church Group"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Radio.Group>
                <Radio.Button value="Adult">Adult</Radio.Button>
                <Radio.Button value="Omega">Omega</Radio.Button>
                <Radio.Button value="Children">Children</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="previousChurch" label="Previous Church">
              <Input style={{ width: 200 }} />
            </Form.Item>
          </div>
        )}
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>

          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}

export default Member;
