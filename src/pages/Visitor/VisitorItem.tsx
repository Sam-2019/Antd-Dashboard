import { Col, Descriptions, Row } from "antd";
import Title from "antd/lib/typography/Title";
// import ImageUpload from "../../components/ImageUpload";

function VisitorItem({ dataSource }: any) {
  return (
    <div>
      <Row>
        <Col span="4">
          {/* {dataSource.imageURL ? null : (
            <div>
              <Image
                width={235}
                height={250}
                src=dummyImage
                preview={false}
              />

              <ImageUpload />
            </div>
          )} */}
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
              {!dataSource.chapel ? "N/A" : <> {dataSource.chapel} </>}
            </Descriptions.Item>

            <Descriptions.Item label="Date Visited">
              {!dataSource.date ? "N/A" : <> {dataSource.date} </>}
            </Descriptions.Item>

            <Descriptions.Item label="Invited By">
              {!dataSource.invitedBy ? "N/A" : <> {dataSource.invitedBy} </>}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}

export default VisitorItem;
