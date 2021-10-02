import React from "react";
import { Breadcrumb } from "antd";
import { useHistory, useLocation } from "react-router-dom";

export const breadcrumbNameMap = {
  "/departments": "Department",
  "/members": "Members",
  "/tithe": "Tithe",
  "/chapels": "Chapels",
};

function BreadCrumb() {
  const history = useHistory();

  let location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  return (
    <div style={{ marginBottom: "10px" }}>
      <Breadcrumb>
        {pathSnippets[0] === undefined ? null : (
          <Breadcrumb.Item onClick={() => history.push("/")}>
            <span className="breadcrumb">Home</span>
          </Breadcrumb.Item>
        )}

        {pathSnippets[0] ? (
          <Breadcrumb.Item>
            <span className="breadcrumb">{pathSnippets[0]}</span>
          </Breadcrumb.Item>
        ) : null}

        {pathSnippets[1] ? (
          <Breadcrumb.Item>
            <span className="breadcrumb">{pathSnippets[1]}</span>
          </Breadcrumb.Item>
        ) : null}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
