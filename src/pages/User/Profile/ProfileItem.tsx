import { Card, Col, Row, Descriptions, Image } from "antd";
import ImageUpload from "../../../components/ImageUpload";
import { fallback, imageWidth, marginBottom, dummyImage } from "../../../utils/constants";
import { USER_DETAILS } from "../../../utils/graphqlFunctions/queries";

export default function ProfileItem({ dataSource }: any) {
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
                  <div>
                    <Image
                      alt="example"
                      src={dataSource.imageURL}
                      width={imageWidth}
                      style={{ marginBottom }}
                      fallback={fallback}
                    />
                  </div>
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
                      type="user"
                      query={USER_DETAILS}
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
                <Descriptions title="About" size="default">
                  <Descriptions.Item label="Name">
                    {!dataSource.firstName ? (
                      "N/A"
                    ) : (
                      <>
                        {dataSource.firstName} {dataSource.lastName}
                      </>
                    )}
                  </Descriptions.Item>
                  <Descriptions.Item label="Gender">
                    {!dataSource.gender ? "N/A" : <> {dataSource.gender} </>}
                  </Descriptions.Item>
                  <Descriptions.Item label="Contact">
                    {!dataSource.contact ? "N/A" : <> {dataSource.contact} </>}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email">
                    {!dataSource.emailAddress ? (
                      "N/A"
                    ) : (
                      <> {dataSource.emailAddress} </>
                    )}
                  </Descriptions.Item>
                  <Descriptions.Item label="Birthday">
                    {!dataSource.bod ? "N/A" : <> {dataSource.dob} </>}
                  </Descriptions.Item>
                  <Descriptions.Item label="Address">
                    {!dataSource.homeAddress ? (
                      "N/A"
                    ) : (
                      <> {dataSource.homeAddress} </>
                    )}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
