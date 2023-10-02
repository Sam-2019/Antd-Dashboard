import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "antd";
import SettingsItem from "./Settings";

export default function Settings() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <PageHeader
        className="site-page-header goBack"
        onBack={() => navigate.goBack()}
        title={
          <>
            <span className="breadcrumb">Settings</span>
          </>
        }
      />

      <SettingsItem />
    </Fragment>
  );
}
