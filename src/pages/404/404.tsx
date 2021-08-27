import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

function NoPage() {
  let history = useHistory();

  function goHome() {
    history.push("/");
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={goHome} type="primary">
          Back Home
        </Button>
      }
    />
  );
}

export default NoPage;
