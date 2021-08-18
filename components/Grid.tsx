import React from "react";
import { Row, Col, Skeleton, Switch, Card, Avatar, Space, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

interface PropType {
  onClose: any;
  visible: any;
  onActive: any;
}

const GridC = () => {
  const [loading, setLoading] = React.useState(true);
  const [size, setSize] = React.useState(8);
  const responsive = useBreakpoint();

  const onChange = () => {
    setLoading(!loading);
  };
  return (
    <>
      {/* <Switch checked={!loading} onChange={onChange} /> */}

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

export default GridC;
