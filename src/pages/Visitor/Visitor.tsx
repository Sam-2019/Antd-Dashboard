import { useQuery } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";
import { GET_VISITOR } from "../../utils/graphqlFunctions/queries";

import VisitorItem from "./VisitorItem";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import { PageHeader } from "antd";

function Visitor() {
  let { slug }: any = useParams();
  const history = useHistory();


  const { loading, error, data } = useQuery(GET_VISITOR, {
    variables: { visitorId: slug },
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
            <span className="breadcrumb">Visitor Information</span>
          </>
        }
      />

      <VisitorItem dataSource={data.visitor} />
    </>
  );
}

export default Visitor;
