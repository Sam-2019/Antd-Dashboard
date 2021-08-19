import React from "react";
import { Row, Col, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const Dashboard = () => {
  const [loading, setLoading] = React.useState(true);

  const responsive = useBreakpoint();

  const onChange = () => {
    setLoading(!loading);
  };
  return (
    <>
      {/* <Switch checked={!loading} onChange={onChange} /> */}

      <div className="site-card-wrapper" style={{ marginBottom: 16 }}>
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
      </div>

      <div className="site-card-wrapper">
        <Row gutter={[16, responsive.xs ? 16 : 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
