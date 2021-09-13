import { useQuery } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";
import { GET_MEMBER } from "../../utils/graphqlFunctions/queries";

import MemberItem from "./MemberItem";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import { PageHeader } from "antd";

function Member() {
  let { slug }: any = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_MEMBER, {
    variables: { memberId: slug },
  });

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
        onBack={() => history.goBack()}
        title={
          <>
            <span className="breadcrumb">Member Information</span>
          </>
        }
      />

      <MemberItem dataSource={data.member} />
    </>
  );
}

export default Member;
