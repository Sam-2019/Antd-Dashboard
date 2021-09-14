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
            src="https://firebasestorage.googleapis.com/v0/b/storage-unit-cd9b8.appspot.com/o/images%2Fhblvidvqydi2r53oe1qw%20-%20Copy.jpg?alt=media&token=9dd9eb9b-f067-46f7-abee-cfb5707a2dd1"
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
                {!dataSource.spouseName ? (
                  "N/A"
                ) : (
                  <> {dataSource.spouseName} </>
                )}
              </Descriptions.Item>
            </Descriptions>

            <div>
              <span>
                Children :
         
              </span>

              <Space direction="vertical">
                {dataSource.nameOfChildren.length === 0 ? (
                  "N/A"
                ) : (
                  <>
                    {dataSource.nameOfChildren.map(
                      (tag: string, index: any) => {
                        return <Text key={index}>{tag}</Text>;
                      }
                    )}
                  </>
                )}
              </Space>
            </div>
          </div>

          <div>
            <Title level={5}>Departments</Title>
            {dataSource.department.map((tag: string, index: any) => {
              let color = colorSwitch(tag);
              let params = tag.toLocaleLowerCase();
              return (
                <Link key={index}  to={`/departments/${params}`}>
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
