import { Row, Col, Card, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Fragment } from "react";
import { PieChartGroup } from "../../charts/chartRoute";

const { Text } = Typography;

const GenderChart = () => {
  const responsive = useBreakpoint();

  return (
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
  );
};

export default GenderChart;
