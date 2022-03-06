import { Row, Col, Card, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { GenderPieList } from "../../charts/chartRoute";

import GroupChart from "./GroupChart";
const { Text } = Typography;

const Dashboard = () => {
  const responsive = useBreakpoint();

  return (
    <>
      {/* <div className="site-card-wrapper" style={{ marginBottom: 16 }}>
        <Row gutter={[16, responsive.xs ? 16 : 0]}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div> */}

      <div className="site-card-wrapper" style={{ marginBottom: 16 }}>
        <GroupChart />
      </div>

      <div className="site-card-wrapper">
        <Card bordered={false} title="Gender Ratio" style={{ width: "100%" }}>
          <Row gutter={[16, responsive.xs ? 16 : 0]}>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <Text strong>Members</Text>
              <Card bordered={false} style={{ width: "100%" }}>
                {GenderPieList["total"]}
              </Card>
            </Col>

            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <Text strong>Adult</Text>
              <Card bordered={false} style={{ width: "100%" }}>
                {GenderPieList["adult"]}
              </Card>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <Text strong>Omega</Text>
              <Card bordered={false} style={{ width: "100%" }}>
                {GenderPieList["omega"]}
              </Card>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <Text strong>Children</Text>
              <Card bordered={false} style={{ width: "100%" }}>
                {GenderPieList["children"]}
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
