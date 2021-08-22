import { useHistory, useParams } from "react-router-dom";
import { PageHeader } from "antd";

const GoBack = () => {
  const history = useHistory();
  let { slug }: any = useParams();

  return (
    <PageHeader
      className="site-page-header goBack"
      onBack={() => history.goBack()}
      title={<span className="breadcrumb">{slug}</span>}
    />
  );
};

export default GoBack;
