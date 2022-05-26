import { Card, Col, Descriptions, Row, Tag } from "antd";
import Title from "antd/lib/typography/Title";

export default function PledgeItem({ dataSource }: any) {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {/* <Col span={6}>
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
        </Col> */}

        <Col span={24}>
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

                  <Descriptions.Item label="Email">
                    {dataSource.emailAddress}
                  </Descriptions.Item>
                </Descriptions>

                <div>
                  <Title level={5}>Programme</Title>
                  <Descriptions>
                    <Descriptions.Item label="Programme">
                      {dataSource.programme}
                    </Descriptions.Item>
                  </Descriptions>
                </div>

                <div>
                  <Title level={5}>Amount</Title>
                  <Descriptions>
                    <Descriptions.Item>
                      <>GHc {dataSource.amount} </>
                    </Descriptions.Item>
                  </Descriptions>
                </div>

                <div>
                  <Title level={5}>Status</Title>
                  <Descriptions>
                    <Descriptions.Item>
                      <Tag
                        color={
                          dataSource.status === "PENDING" ? "red" : "green"
                        }
                      >
                        {dataSource.status}
                      </Tag>
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
