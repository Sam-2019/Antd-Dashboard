import { Col, Descriptions, Image, Row, Space, Tag, Typography } from "antd";

import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import ImageUpload from "../../components/ImageUpload";
import { GET_MEMBER } from "../../utils/graphqlFunctions/queries";
import { colorSwitch } from "../../utils/functions";
import {
  imageWidth,
  marginBottom,
  fallback,
  dummyImage,
} from "../../utils/constants";

const { Text } = Typography;

function MemberItem({ dataSource }: any) {
  return (
    <div>
      <Row>
        <Col xs={{ span: 12, offset: 1 }} lg={{ span: 4, offset: 1 }}>
          {dataSource.imageURL ? (
            <>
              <Image
                width={230}
                height={160}
                src={dataSource.imageURL}
                fallback={fallback}
              />
            </>
          ) : (
            <div>
              <img
                alt="example"
                src={dummyImage}
                width={imageWidth}
                style={{ marginBottom }}
              />

              <ImageUpload
                id={dataSource.id}
                type="member"
                query={GET_MEMBER}
              />
            </div>
          )}
        </Col>

        <Col span={19}>
          <Title level={2}>
            {dataSource.firstName} {dataSource.lastName}
          </Title>

          <Descriptions>
            <Descriptions.Item label="Contact">
              {dataSource.contact}
            </Descriptions.Item>
            <Descriptions.Item label="Location">
              {!dataSource.location ? "N/A" : <> {dataSource.location} </>}
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
              <span>Children: </span>

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

          <div style={{ marginTop: "10px" }}>
            <Title level={5}>Departments</Title>
            {dataSource.department.map((tag: string, index: any) => {
              let color = colorSwitch(tag);
              let params = tag.toLocaleLowerCase();
              return (
                <Link key={index} to={`/departments/${params}`}>
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
