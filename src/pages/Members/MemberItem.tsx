import {
  Card,
  Col,
  Descriptions,
  Image,
  Row,
  Tag,
  Typography,
} from "antd";

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
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={6}>
          <Card
            type="inner"
            hoverable
            bordered={false}
            cover={
              <>
                {dataSource.imageURL ? (
                  <>
                    <Image
                      alt="example"
                      src={dataSource.imageURL}
                      width={imageWidth}
                      style={{ marginBottom }}
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
              </>
            }
            style={{ padding: 15 }}
          ></Card>
        </Col>

        <Col span={18}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered={false}>
                <Title level={2}>
                  {dataSource.firstName} {dataSource.lastName}
                </Title>

                <Descriptions>
                  <Descriptions.Item label="Contact">
                    {dataSource.contact}
                  </Descriptions.Item>
                  <Descriptions.Item label="Location">
                    {!dataSource.location ? (
                      "N/A"
                    ) : (
                      <> {dataSource.location} </>
                    )}
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

                    <Descriptions.Item label="Children">
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
                    </Descriptions.Item>
                  </Descriptions>
                </div>

                <div>
                  <Title level={5}>Departments</Title>

                  <Descriptions>
                    <Descriptions.Item>
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
                    </Descriptions.Item>
                  </Descriptions>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MemberItem;
