import { Fragment } from "react";
import GenderChart from "./GenderChart";
import GroupChart from "./GroupChart";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="site-card-wrapper" style={{ marginBottom: 16 }}>
        <GroupChart />
      </div>

      <div className="site-card-wrapper">
        <GenderChart />
      </div>
    </Fragment>
  );
};

export default Dashboard;