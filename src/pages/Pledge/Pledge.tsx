import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { GET_PLEDGEE, GET_PLEDGES } from "../../utils/graphqlFunctions/queries";
import { UPDATE_PLEDGE_STATUS } from "../../utils/graphqlFunctions/mutations";
import { Success, Error as ErrorMessage } from "../../components/Modal/Modal";
import PledgeItem from "./PledgeItem";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import { Button, PageHeader } from "antd";
import PledgeEdit from "../Forms/Pledge/Edit";
import { Edit } from "../../components/Modal/Modal";
import { Fragment, useState } from "react";
import { EDIT } from "../../utils/constants";

function Pledge() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let { slug }: any = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_PLEDGEE, {
    variables: { pledgeId: slug },
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

  const [updatePledgeStatus] = useMutation(UPDATE_PLEDGE_STATUS, {
    refetchQueries: [
      {
        query: GET_PLEDGEE,
        variables: {
          pledgeId: slug,
        },
      },
      // {
      //   query: GET_PLEDGES,
      // },
    ],
  });

  const updateStatus = async () => {
    const values = {
      status: "REDEEMED",
    };

    const data = await updatePledgeStatus({
      variables: {
        pledgeId: slug,
        pledgeInput: {
          ...values,
        },
      },
    });

    if (!data) {
      return ErrorMessage("Updated failed");
    }

    Success("Pledge status updated");
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
            <span className="breadcrumb">Pledgee</span>
          </>
        }
        extra={[
          <Button key="1" type="default" onClick={showModal}>
            {EDIT}
          </Button>,
          <Fragment>
            {data.pledge.status === "PENDING" && (
              <Button key="1" type="default" onClick={updateStatus}>
                Paid
              </Button>
            )}
          </Fragment>,
        ]}
      />

      <PledgeItem dataSource={data.pledge} />

      <Edit
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        children={
          <PledgeEdit
            handleCancel={handleCancel}
            data={data.pledge}
            slug={slug}
          />
        }
      />
    </>
  );
}

export default Pledge;
