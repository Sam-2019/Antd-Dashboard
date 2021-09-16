import { Col, Descriptions, Image, Row, Space, Tag, Typography } from "antd";
import Title from "antd/lib/typography/Title";

function VisitorItem({ dataSource }: any) {
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
