import { Card, Col, Descriptions, Row } from "antd";
import Title from "antd/lib/typography/Title";
import ImageUpload from "../../components/ImageUpload";

import {
  imageWidth,
  marginBottom,
  fallback,
  dummyImage,
} from "../../utils/constants";

function VisitorItem({ dataSource }: any) {
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
                    {/* <Image
                      alt="example"
                      src={dataSource.imageURL}
                      width={imageWidth}
                      style={{ marginBottom }}
                      fallback={fallback}
                    /> */}
                  </>
                ) : (
                  <div>
                    <img
                      alt="example"
                      src={dummyImage}
                      width={imageWidth}
                      style={{ marginBottom }}
                    />

                    {/* <ImageUpload
                      id={dataSource.id}
                      type="member"
                      query={null}
                    /> */}
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
                    {!dataSource.chapel ? "N/A" : <> {dataSource.chapel} </>}
                  </Descriptions.Item>

                  <Descriptions.Item label="Date Visited">
                    {!dataSource.date ? "N/A" : <> {dataSource.date} </>}
                  </Descriptions.Item>

                  <Descriptions.Item label="Invited By">
                    {!dataSource.invitedBy ? (
                      "N/A"
                    ) : (
                      <> {dataSource.invitedBy} </>
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

export default VisitorItem;
