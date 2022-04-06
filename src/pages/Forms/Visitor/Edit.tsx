import { Input, Form, Button, Radio, Space } from "antd";
import { useMutation } from "@apollo/client";
import { UPDATE_VISITOR } from "../../../utils/graphqlFunctions/mutations";
import { success } from "../../../components/Modal/Modal";
import { useParams } from "react-router-dom";
import { GET_VISITOR } from "../../../utils/graphqlFunctions/queries";

function Visitor({ handleCancel, data }: any) {
  const [form] = Form.useForm();
  let { slug }: any = useParams();

  const [updateVisitor] = useMutation(UPDATE_VISITOR, {
    refetchQueries: [{ query: GET_VISITOR, variables: { visitorId: slug } }],
  });

  const onFinish = (fieldsValue: any) => {
    updateVisitor({
      variables: {
        updateVisitorId: slug,
        updateVisitorInput: {
          ...fieldsValue,
        },
      },
    });

    form.resetFields();

    success("Visitor updated");

    handleCancel();
  };

  return (
    <div>
      <Form
        form={form}
        name="visitor"
        onFinish={onFinish}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          firstName: data.firstName,
          lastName: data.lastName,
          contact: data.contact,
          location: data.location,
          ageGroup: data.ageGroup,
          group: data.group,
          awarenessChannel: data.awarenessChannel,
          invitedBy: data.invitedBy,
          membership: data.membership,
          visitation: data.visitation,
          knowingChrist: data.knowingChrist,
        }}
      >
        <Form.Item name="firstName" label="First Name">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="contact" label="Contact">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="location" label="Location">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name="ageGroup" label="Age Group">
          <Radio.Group>
            <Radio.Button value="13 - 18">13 - 18</Radio.Button>
            <Radio.Button value="19 - 25">19 - 25</Radio.Button>
            <Radio.Button value="26 - 35">26 - 35</Radio.Button>
            <Radio.Button value="36 - 55">36 - 55</Radio.Button>
            <Radio.Button value="56+">56+ </Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="group" label="Group">
          <Radio.Group>
            <Radio.Button value="Adult">Adult</Radio.Button>
            <Radio.Button value="Omega">Omega</Radio.Button>
            <Radio.Button value="Children">Children</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="awarenessChannel"
          label="How did you hear about the church?"
          // rules={[{ required: true, message: "Please pick an item!" }]}
        >
          <Radio.Group>
            <Radio.Button value="flyer">Flyer</Radio.Button>
            <Radio.Button value="banner">Banner</Radio.Button>
            <Radio.Button value="billboard">Billboard</Radio.Button>
            <Radio.Button value="member">Member</Radio.Button>
          </Radio.Group>
        </Form.Item>

        {/* <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 10 },
          }}
          name="awarenessChannelOther"
        >
          <Input style={{ width: 200 }} />
        </Form.Item> */}

        <Form.Item name="invitedBy" label="Invited by">
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="membership"
          label="Would like to become a member of Elim Temple? "
        >
          <Radio.Group>
            <Radio.Button value="yes">Yes</Radio.Button>
            <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="visitation" label="Just visiting?">
          <Radio.Group>
            <Radio.Button value="yes">Yes</Radio.Button>
            <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="knowingChrist"
          label="Would like to know more about being a Christian? "
        >
          <Radio.Group>
            <Radio.Button value="yes">Yes</Radio.Button>
            <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 10 },
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

export default Visitor;
