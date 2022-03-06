import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

function Error({ hideButton }: any) {
  let history = useHistory();
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        hideButton ? null : (
          <Button type="primary" onClick={() => history.goBack()}>
            Go Back
          </Button>
        )
      }
    />
  );
}

export default Error;
