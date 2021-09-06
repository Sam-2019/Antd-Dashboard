import { useHistory, useParams } from "react-router-dom";
import { PageHeader } from "antd";
import { checkSlug } from "../utils/functions";

const GoBack = ({ header }: any) => {
  const history = useHistory();
  let { slug }: any = useParams();

  const result = checkSlug(slug);

  return (
    <PageHeader
      className="site-page-header goBack"
      onBack={() => history.goBack()}
      title={
        <>
          <span className="breadcrumb">
            {result ? result : slug} {header}
          </span>
        </>
      }
    />
  );
};

export default GoBack;
