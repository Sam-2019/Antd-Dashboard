import { useNavigate, useParams } from "react-router-dom";
import { PageHeader } from "antd";
import { checkSlug } from "../utils/functions";

const GoBack = ({ header }: any) => {
  const navigate = useNavigate();
  let { slug }: any = useParams();

  const result = checkSlug(slug);

  return (
    <PageHeader
      className="site-page-header goBack"
      onBack={() => navigate.goBack()}
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
