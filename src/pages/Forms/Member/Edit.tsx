import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Input,
  Col,
  Row,
  InputNumber,
  Form,
  Button,
  Radio,
  Checkbox,
  Space,
  Select,
} from "antd";

import { useMutation } from "@apollo/client";
import { departments } from "../../../utils/data";
import { UPDATE_MEMBER } from "../../../utils/graphqlFunctions/mutations";
import { success } from "../../../components/Modal/Modal";
import { useParams } from "react-router-dom";
import { GET_MEMBER } from "../../../utils/graphqlFunctions/queries";

const { Option } = Select;

function Member({ handleCancel }: any): JSX.Element {
  const [form] = Form.useForm();
  let { slug }: any = useParams();

  const [addMember] = useMutation(UPDATE_MEMBER, {
    refetchQueries: [
      {
        query: GET_MEMBER,
        variables: {
          memberId: slug,
        },
      },
    ],
  });

  const onFinish = (fieldsValue: any) => {
    addMember({
      variables: {
        updateMemberId: slug,
        updateMemberInput: {
          ...fieldsValue,
        },
      },
    });

    form.resetFields();

    success("Member updated");

    handleCancel();
  };

  return (
    <div>
      <Form
        form={form}
        name="member"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item name="firstName" label="First Name">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="otherName" label="Other Name">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="age" label="Age">
          <InputNumber style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="gender" label="Gender">
          <Radio.Group>
            <Radio.Button value="Male">Male</Radio.Button>
            <Radio.Button value="Female">Female</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="location" label="Location">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="residentialAddress" label="Residential Address">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="hometown" label="Home Town">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="region" label="Region">
          <Select placeholder="Select region" allowClear style={{ width: 200 }}>
            <Option value="Ahafo">Ahafo</Option>
            <Option value="Ashanti">Ashanti</Option>
            <Option value="Bono East">Bono East</Option>
            <Option value="Brong Ahafo">Brong Ahafo</Option>
            <Option value="Central">Central</Option>
            <Option value="Eastern">Eastern</Option>
            <Option value="Greater Accra">Greater Accra</Option>
            <Option value="North East">North East</Option>
            <Option value="Northern">Northern</Option>
            <Option value="Oti">Oti</Option>
            <Option value="Savannah">Savannah</Option>
            <Option value="Upper East">Upper East</Option>
            <Option value="Upper West">Upper West</Option>
            <Option value="Western">Western</Option>
            <Option value="Western North">Western North</Option>
            <Option value="Volta">Volta</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item name="country" label="Country">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="contact" label="Contact">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="emergencyContact" label="Emergency Contact">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="emailAddress" label="Email Address">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="postalAddress" label="Postal Address">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="maritalStatus" label="Marital Status">
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

        <Form.Item name="group" label="Church Group">
          <Radio.Group>
            <Radio.Button value="Adult">Adult</Radio.Button>
            <Radio.Button value="Omega">Omega</Radio.Button>
            <Radio.Button value="Children">Children</Radio.Button>
          </Radio.Group>
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
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={handleCancel}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Member;
