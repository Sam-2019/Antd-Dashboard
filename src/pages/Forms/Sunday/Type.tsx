import { Input, InputNumber, DatePicker, Form, TimePicker, Button } from "antd";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import GoBack from "../../../components/GoBack";
import { ADD_SUNDAY_SERVICE } from "../../../utils/graphqlFunctions/mutations";
import { success } from "../../../components/Modal/Modal";

function Session() {
  let { slug }: any = useParams();
  const [form] = Form.useForm();
  const [addSessionService] = useMutation(ADD_SUNDAY_SERVICE);

  console.log(slug);
  const onFinish = (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      date: fieldsValue["date"].format("YYYY-MM-DD"),
      startTime: fieldsValue["startTime"].format("HH:mm:ss"),
      endTime: fieldsValue["endTime"].format("HH:mm:ss"),
    };
    console.log("Received values of form: ", values);

    const {
      adultFemale,
      adultMale,
      altercallFemale,
      altercallMen,
      bibleText,
      bicycles,
      cars,
      childrenBoy,
      childrenGirl,
      date,
      endTime,
      motors,
      omegaFemale,
      omegaMale,
      preacher,
      startTime,
      theme,
      visitorsFemale,
    } = values;

    addSessionService({
      variables: {
        addSessionService: {
          adultFemale,
          adultMale,
          altercallFemale,
          altercallMen,
          bibleText,
          bicycles,
          cars,
          childrenBoy,
          childrenGirl,
          date,
          endTime,
          motors,
          omegaFemale,
          omegaMale,
          preacher,
          startTime,
          theme,
          visitorsFemale,
        },
      },
    });

    form.resetFields();

    success("Data added");
  };
  return (
    <>
      <GoBack />
      <div style={{}}>
        <Form
          form={form}
          name="sunday-form"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Required!" }]}
          >
            <DatePicker style={{ width: 200 }} />
          </Form.Item>

          <Form.Item
            name="startTime"
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
            name="bibleText"
            label="Bible Text"
            rules={[{ required: true, message: "Required!" }]}
          >
            <Input style={{ width: 200 }} />
          </Form.Item>

          <Form.Item label="Adult" style={{ marginBottom: 0 }}>
            <Form.Item
              name="adultMale"
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
              name="adultFemale"
              rules={[{ required: true, message: "Required!" }]}
              style={{ display: "inline-block", width: "auto" }}
            >
              <InputNumber placeholder="Female" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Omega" style={{ marginBottom: 0 }}>
            <Form.Item
              name="omegaMale"
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
              name="omegaFemale"
              rules={[{ required: true, message: "Required!" }]}
              style={{ display: "inline-block", width: "auto" }}
            >
              <InputNumber placeholder="Female" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Children" style={{ marginBottom: 0 }}>
            <Form.Item
              name="childrenBoy"
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
              name="childrenGirl"
              rules={[{ required: true, message: "Required!" }]}
              style={{ display: "inline-block", width: "auto" }}
            >
              <InputNumber placeholder="Female" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Alter Call" style={{ marginBottom: 0 }}>
            <Form.Item
              name="altercallMen"
              style={{
                display: "inline-block",
                width: "auto",
                marginRight: 10,
              }}
            >
              <InputNumber placeholder="Male" />
            </Form.Item>
            <Form.Item
              name="altercallFemale"
              style={{ display: "inline-block", width: "auto" }}
            >
              <InputNumber placeholder="Female" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Visitors" style={{ marginBottom: 0 }}>
            <Form.Item
              name="visitorsMen"
              style={{
                display: "inline-block",
                width: "auto",
                marginRight: 10,
              }}
            >
              <InputNumber placeholder="Male" />
            </Form.Item>
            <Form.Item
              name="visitorsFemale"
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
            name="endTime"
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

export default Session;
