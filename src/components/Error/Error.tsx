import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Error({ hideButton }: any) {
  let navigate = useNavigate();
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        hideButton ? null : (
          <Button type="primary" onClick={() => navigate.goBack()}>
            Go Back
          </Button>
        )
      }
    />
  );
}

export default Error;
