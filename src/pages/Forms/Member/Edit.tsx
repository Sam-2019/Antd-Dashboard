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
import { Success, Error } from "../../../components/Modal/Modal";
import { useParams } from "react-router-dom";
import { GET_MEMBER } from "../../../utils/graphqlFunctions/queries";
import { inputStyles } from "../../../utils/styles";

const { Option } = Select;

function Member({ handleCancel, data }: any): JSX.Element {
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

  const onFinish = async (fieldsValue: any) => {
    const data = await addMember({
      variables: {
        updateMemberId: slug,
        updateMemberInput: {
          ...fieldsValue,
        },
      },
    });

    if (!data) {
      return Error("Update failed");
    }

    form.resetFields();
    Success("Member updated");
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
        initialValues={{
          firstName: data.firstName,
          lastName: data.lastName,
          otherName: data.otherName,
          dateOfBirth: data.dateOfBirth,
          chapel: data.chapel,
          age: data.age,
          gender: data.gender,
          hometown: data.hometown,
          region: data.region,
          country: data.country,
          residentialAddress: data.residentialAddress,
          contact: data.contact,
          emergencyContact: data.emergencyContact,
          emailAddress: data.emailAddress,
          postalAddres: data.postalAddress,
          maritalStatus: data.maritalStatus,
          spouseName: data.spouseName,
          numberOfChlidren: data.numberOfChlidren,
          nameOfChildren: data.nameOfChildren,
          dateJoinedChurch: data.dateJoinedChurch,
          department: data.department,
          previousChurch: data.previousChurch,
          group: data.group,
        }}
      >
        <Form.Item name="firstName" label="First Name">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="otherName" label="Other Name">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="age" label="Age">
          <InputNumber style={inputStyles} />
        </Form.Item>

        <Form.Item name="gender" label="Gender">
          <Radio.Group>
            <Radio.Button value="Male">Male</Radio.Button>
            <Radio.Button value="Female">Female</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="location" label="Location">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="residentialAddress" label="Residential Address">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="hometown" label="Home Town">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="region" label="Region">
          <Select placeholder="Select region" allowClear style={inputStyles}>
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
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="contact" label="Contact">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="emergencyContact" label="Emergency Contact">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="emailAddress" label="Email Address">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="postalAddress" label="Postal Address">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="maritalStatus" label="Marital Status">
          <Radio.Group>
            <Radio.Button value="Single">Single</Radio.Button>
            <Radio.Button value="Married">Married</Radio.Button>
            <Radio.Button value="Divorced">Divorced</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="spouseName" label="Name of Spouse">
          <Input style={inputStyles} />
        </Form.Item>

        <Form.Item name="numberOfChlidren" label="Number of children">
          <InputNumber keyboard={true} style={inputStyles} />
        </Form.Item>

        <Form.Item label="Name of children" style={{ marginBottom: 0 }} />

        <Form.List name="nameOfChildren">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
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
          <Input style={inputStyles} />
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
