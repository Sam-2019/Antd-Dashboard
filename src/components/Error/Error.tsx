import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Error({ hideButton }: any) {
  const navigate = useNavigate();
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        hideButton ? null : (
          <Button type="primary" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        )
      }
    />
  );
}

export default Error;
