import { Row, Col, Card, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Fragment } from "react";
import { PieChartGroup } from "../../charts/chartRoute";

import GroupChart from "./GroupChart";
const { Text } = Typography;

const Dashboard = () => {
  const responsive = useBreakpoint();

  return (
    <Fragment>
      <div className="site-card-wrapper" style={{ marginBottom: 16 }}>
        <GroupChart />
      </div>

      <div className="site-card-wrapper">
        <Card bordered={false} title="Gender" style={{ width: "100%" }}>
          <Row gutter={[16, responsive.xs ? 16 : 0]}>
            {PieChartGroup.map((data: any) => {
              return (
                <Fragment key={data.key}>
                  <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Text strong>{data.label}</Text>
                    <Card bordered={false} style={{ width: "100%" }}>
                      {data.content}
                    </Card>
                  </Col>
                </Fragment>
              );
            })}
          </Row>
        </Card>
      </div>
    </Fragment>
  );
};

export default Dashboard;
