import { useHistory } from "react-router-dom";
import { PageHeader } from "antd";

const GoBack = () => {
  const history = useHistory();

  return (
    <PageHeader
      className="site-page-header goBack"
      onBack={() => history.goBack()}
      title="Back"
    />
  );
};

export default GoBack;
