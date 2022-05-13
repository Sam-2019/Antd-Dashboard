import { Card, Col, Row, Descriptions } from "antd";
import ImageUpload from "../../../components/ImageUpload";

export default function ProfileItem({ dataSource }: any) {
  const userImage = false;
  const imageWidth = "100%";
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
                {userImage ? (
                  <div>
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      width={imageWidth}
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      width={imageWidth}
                      style={{ marginBottom: "10px" }}
                    />
                    <ImageUpload />
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
