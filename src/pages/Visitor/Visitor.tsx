import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { GET_VISITOR } from "../../utils/graphqlFunctions/queries";

import VisitorItem from "./VisitorItem";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import { Button } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import { Edit } from "../../components/Modal/Modal";
import VisitorEdit from "../Forms/Visitor/Edit";
import { useState } from "react";
import { EDIT, VISITOR } from "../../utils/constants";

function Visitor() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let { slug }: any = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_VISITOR, {
    variables: { visitorId: slug },
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
        onBack={() => navigate(-1)}
        title={
          <>
            <span className="breadcrumb">{VISITOR}</span>
          </>
        }
        extra={[
          <Button key="1" type="default" onClick={showModal}>
            {EDIT}
          </Button>,
        ]}
      />

      <VisitorItem dataSource={data.visitor} />

      <Edit
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        children={
          <VisitorEdit handleCancel={handleCancel} data={data.visitor} />
        }
      />
    </>
  );
}

export default Visitor;
