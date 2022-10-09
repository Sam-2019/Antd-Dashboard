import { Modal } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { EDIT } from "../../utils/constants";

const { confirm } = Modal;

export function showPromiseConfirm() {
  confirm({
    title: "Do you want to delete these items?",
    icon: <CheckCircleOutlined />,
    content: "Member saved",
    onOk() {},
    onCancel() {},
  });
}

export function Success(content: any) {
  Modal.success({
    title: "Success",
    content,
  });
}

export function Error(content: any) {
  Modal.error({
    title: "Error",
    content,
  });
}

export function Edit({
  isModalVisible,
  handleOk,
  handleCancel,
  children,
}: any) {
  return (
    <Modal
      width={1000}
      title={EDIT}
      centered
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      bodyStyle={{ height: "auto" }}
    >
      {children}
    </Modal>
  );
}
