import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { BACKHOME } from "../../utils/constants";

function NoPage() {
  let navigate = useNavigate();

  function goHome() {
    navigate("/");
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={goHome} type="primary">
          {BACKHOME}
        </Button>
      }
    />
  );
}

export default NoPage;
