import { Card, Col, Row, Descriptions } from "antd";
import ImageUpload from "../../../components/ImageUpload";

export default function ProfileItem({ dataSource }: any) {
  const userImage = false;
  const imageWidth = '100%'
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
                      style={{marginBottom: '10px'}}
                    />
                    <ImageUpload />
                  </div>
                )}
              </>
            }
            style={{ padding: 15 }}
          >
       
          </Card>
        </Col>

        <Col span={18}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered={false}>
                <Descriptions title="About" size="default">
                  <Descriptions.Item label="First Name">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="Last Name">
                    Prepaid
                  </Descriptions.Item>
                  <Descriptions.Item label="Gender">18:00:00</Descriptions.Item>
                  <Descriptions.Item label="Contact">$80.00</Descriptions.Item>
                  <Descriptions.Item label="Email">$20.00</Descriptions.Item>
                  <Descriptions.Item label="Birthday">$60.00</Descriptions.Item>
                  <Descriptions.Item label="Address">$60.00</Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>

            {/* <Col span={24}>
                <Card bordered={false}>Card content</Card>
              </Col> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
