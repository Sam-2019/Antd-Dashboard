import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { GET_MEMBER } from "../../utils/graphqlFunctions/queries";

import MemberItem from "./MemberItem";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import { Button, PageHeader } from "antd";
import MemberEdit from "../Forms/Member/Edit";
import { Edit } from "../../components/Modal/Modal";
import { useState } from "react";
import { EDIT } from "../../utils/constants";

function Member() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let { slug }: any = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_MEMBER, {
    variables: { memberId: slug },
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <PageHeader
        className="site-page-header goBack"
        onBack={() => navigate.goBack()}
        title={
          <>
            <span className="breadcrumb">Member</span>
          </>
        }
        extra={[
          <Button key="1" type="default" onClick={showModal}>
            {EDIT}
          </Button>,
        ]}
      />

      <MemberItem dataSource={data.member} />

      <Edit
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        children={<MemberEdit handleCancel={handleCancel} data={data.member} />}
      />
    </>
  );
}

export default Member;
