import { useNavigate, useParams } from "react-router-dom";
import { PageHeader } from "@ant-design/pro-layout";
import { checkSlug } from "../utils/functions";

const GoBack = ({ header }: any) => {
  const navigate = useNavigate();
  let { slug }: any = useParams();

  const result = checkSlug(slug);

  return (
    <PageHeader
      className="site-page-header goBack"
      onBack={() => navigate(-1)}
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
