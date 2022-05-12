import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { PageHeader } from "antd";
import SettingsItem from "./Settings";

export default function Settings() {
  const history = useHistory();
  return (
    <Fragment>
      <PageHeader
        className="site-page-header goBack"
        onBack={() => history.goBack()}
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
