import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, PageHeader } from "antd";
import ProfileItem from "./ProfileItem";
import { userData } from "../../../utils/data";
import { Edit } from "../../../components/Modal/Modal";
import ProfileEdit from "../../Forms/User/Profile/Edit";

export default function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <PageHeader
        className="site-page-header goBack"
        onBack={() => history.goBack()}
        title={
          <>
            <span className="breadcrumb">Profile</span>
          </>
        }
        extra={[
          <Button key="1" type="primary" onClick={showModal}>
            Edit
          </Button>,
        ]}
      />

      <ProfileItem dataSource={userData} />

      <Edit
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        children={<ProfileEdit handleCancel={handleCancel} data={userData} />}
      />
    </>
  );
}
