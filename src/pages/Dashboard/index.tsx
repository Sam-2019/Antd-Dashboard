import React from "react";
import { Row, Col, Card, Radio } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import {
  TabList,
  TabList2,
  ColumnList,
  PieList,
} from "../../charts/chartRoute";

const Dashboard = () => {
  const [noTitleKey, setnoTitleKey] = React.useState<any | null>("total");
  const [value3, setValue3] = React.useState<any | null>("total");
  const [vehicles] = React.useState<any | null>("vehicles");
  const responsive = useBreakpoint();

  const onTabChange = (key: string, type: any): any => {
    switch (key) {
      case "total":
        setnoTitleKey("total");
        break;
      case "adult":
        setnoTitleKey("adult");
        break;
      case "omega":
        setnoTitleKey("omega");
        break;
      case "children":
        setnoTitleKey("children");
        break;
      default:
        setnoTitleKey("total");
    }
  };

  const onChange = (e: any) => {
    setValue3(e.target.value);
  };

  return (
    <>
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

      <div className="site-card-wrapper" style={{ marginBottom: 16 }}>
        <Card
          style={{ width: "100%" }}
          tabList={TabList}
          activeTabKey={noTitleKey}
          onTabChange={(key) => {
            onTabChange(key, "noTitleKey");
          }}
        >
          {ColumnList[noTitleKey]}
        </Card>
      </div>

      <div className="site-card-wrapper">
        <Row gutter={[16, responsive.xs ? 16 : 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="Vehicles" style={{ width: "100%" }}>
              {ColumnList[vehicles]}
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card
              title="Default size card"
              style={{ width: "100%" }}
              activeTabKey={value3}
              extra={
                <Radio.Group
                  options={TabList2}
                  onChange={onChange}
                  value={value3}
                  optionType="button"
                />
              }
            >
              {PieList[value3]}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
