import React, { Fragment } from "react";
import { Card } from "antd";
import {
  ServiceColumnList,
  ServiceTabList,
  Vehicle,
} from "../../charts/chartRoute";

const GroupChart = () => {
  const [state, setState] = React.useState<any | null>("first");

  const onTabChange = (key: string, type: any): any => {
    setState(key);
  };

  return (
    <Fragment>
      <div className="site-card-wrapper" style={{ marginBottom: 16 }}>
        <Card
          title="Congregation"
          style={{ width: "100%" }}
          tabList={ServiceTabList}
          activeTabKey={state}
          onTabChange={(key) => {
            onTabChange(key, "state");
          }}
        >
          {ServiceColumnList[state]}
        </Card>
      </div>

      <div className="site-card-wrapper" style={{ marginBottom: 16 }}>
        <Card
          title="Vehicles"
          style={{ width: "100%" }}
          activeTabKey={state}
          onTabChange={(key) => {
            onTabChange(key, "state");
          }}
        >
          {Vehicle[state]}
        </Card>
      </div>
    </Fragment>
  );
};

export default GroupChart;
