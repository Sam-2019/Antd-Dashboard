import { Col, Descriptions, Image, Row, Space, Tag, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";

import { colorSwitch } from "../../utils/functions";

const { Text } = Typography;

function MemberItem({ dataSource }: any) {
  return (
    <div>
      <Row>
        <Col span="4">
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={20}>
          {/* <Title level={4}>Member Info</Title> */}

          <Title level={2}>
            {dataSource.firstName} {dataSource.lastName}
          </Title>

          <Descriptions>
            <Descriptions.Item label="Contact">
              {dataSource.contact}
            </Descriptions.Item>
            <Descriptions.Item label="Location">
              {dataSource.location}
            </Descriptions.Item>

            <Descriptions.Item label="Chapel">
              {dataSource.chapel}
            </Descriptions.Item>

            <Descriptions.Item label="Residential Address">
              {dataSource.residentialAddress}
            </Descriptions.Item>
          </Descriptions>

          <div>
            <Title level={5}>Family</Title>
            <Descriptions>
              <Descriptions.Item label="Spouse">
                {dataSource.contact}
              </Descriptions.Item>
            </Descriptions>

            <div>
              <span>
                Children :
                {/* {dataSource.nameOfChildren.length === 1 ? "Child" : "Children"} */}
              </span>

              <Space direction="vertical">
                {dataSource.department.map((tag: string, index: any) => {
                  return <Text key={index}>{tag}</Text>;
                })}
              </Space>
            </div>
          </div>

          <div>
            <Title level={5}>Departments</Title>
            {dataSource.department.map((tag: string, index: any) => {
              let color = colorSwitch(tag);
              let params = tag.toLocaleLowerCase();
              return (
                <Link to={`/departments/${params}`}>
                  <Tag color={color} key={index}>
                    {tag}
                  </Tag>
                </Link>
              );
            })}
            <div></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MemberItem;
