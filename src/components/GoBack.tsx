import { useHistory } from "react-router-dom";

const GoBack = () => {
  const history = useHistory();

  return (
    <div className="goBack" onClick={() => history.goBack()}>
      Back
    </div>
  );
};

export default GoBack;
