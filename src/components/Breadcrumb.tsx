import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";

export const breadcrumbNameMap = {
  "/departments": "Department",
  "/members": "Members",
  "/tithe": "Tithe",
  "/chapels": "Chapels",
};

function BreadCrumb() {
  const history = useHistory();
  let { slug }: any = useParams();
  let location = useLocation();

  console.log(slug);

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  console.log(pathSnippets);
  // console.log(pathSnippets[0]);

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
