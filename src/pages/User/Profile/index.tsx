import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button, PageHeader } from "antd";
import ProfileItem from "./ProfileItem";
import { Edit } from "../../../components/Modal/Modal";
import EmptyState from "../../../components/Empty/Empty";
import ProfileEdit from "../../Forms/User/Profile/Edit";
import { USER_DETAILS } from "../../../utils/graphqlFunctions/queries";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";

export default function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  let userID = localStorage.getItem("userID");

  const { loading, error, data } = useQuery(USER_DETAILS, {
    variables: { userId: userID },
  });

  console.log({ data: data });
  console.log({ error: error?.networkError?.message });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (loading) return <Spinner />;
  if (error) return <Error  />;
  if (data.user === null) return <EmptyState />;

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

      <ProfileItem dataSource={data.user} />

      <Edit
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        children={<ProfileEdit handleCancel={handleCancel} data={data.user} />}
      />
    </>
  );
}
