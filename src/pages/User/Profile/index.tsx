import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button, PageHeader } from "antd";
import ProfileItem from "./ProfileItem";
import { Edit } from "../../../components/Modal/Modal";
import EmptyState from "../../../components/Empty/Empty";
import ProfileEdit from "../../Forms/User/Profile/Edit";
import { USER_DETAILS } from "../../../utils/graphqlFunctions/queries";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";
import { EDIT } from "../../../utils/constants";

export default function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(USER_DETAILS);

  // console.log({ data: data });
  // console.log({ error: error });
  // console.log({ error: error?.networkError?.message });
  // console.log({ errorNetwork: error?.networkError?.message });

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
  if (error) return <Error />;
  if (data.user === null) return <EmptyState />;
  // if (data === undefined) return <EmptyState />;

  return (
    <>
      <PageHeader
        className="site-page-header goBack"
        onBack={() => navigate.goBack()}
        title={
          <>
            <span className="breadcrumb">Profile</span>
          </>
        }
        extra={[
          <Button key="1" type="default" onClick={showModal}>
            {EDIT}
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
