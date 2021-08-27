import React from "react";
import { Row, Col, Card, Radio } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import {
  TabList,
  ColumnList,
  PieList,
  TabList2,
} from "../../charts/chartRoutes";

//type ContentKey = "article" | "app" | "project";

const Dashboard = () => {
  // const [loading, setLoading] = React.useState(true);
  const [noTitleKey, setnoTitleKey] = React.useState<any | null>("total");
  const [value3, setValue3] = React.useState<any | null>("total");

  const responsive = useBreakpoint();
  // const onChange = () => {
  //   setLoading(!loading);
  // };

  const onTabChange = (key: string, type: any): any => {
    console.log(key, type);
    // setnoTitleKey({ [type]: key });

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
    }
  };

  //console.log(noTitleKey);
  //  console.log(ColumnList);

  const onChange = (e: any) => {
    setValue3(e.target.value);
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
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card
              title="Default size card"
              style={{ width: "100%" }}
              //   tabList={TabList}
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

{
  /* <Radio.Group onChange={onChange} defaultValue="a">
{TabList.map((data: any) => (
  <Radio.Button key={data.key} value={data.key}>
    {data.tab}
  </Radio.Button>
))}
</Radio.Group>
 */
}
