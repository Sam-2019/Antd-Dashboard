import { Col, Descriptions, Row, Tag } from "antd";
import Title from "antd/lib/typography/Title";

export default function PledgeItem({ dataSource }: any) {
  return (
    <div>
      <Row>
        <Col span={19}>
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

            <Descriptions.Item label="Programme">
              {dataSource.programme}
            </Descriptions.Item>
          </Descriptions>

          <div>
            <Descriptions>
              <Descriptions.Item label="Amount">
                <>GHc {dataSource.amount} </>
              </Descriptions.Item>
            </Descriptions>
          </div>

          <div>
            <Descriptions>
              <Descriptions.Item label="Status">
                <Tag color={dataSource.status === "PENDING" ? "red" : "green"}>
                  {dataSource.status}
                </Tag>
              </Descriptions.Item>
            </Descriptions>
          </div>
        </Col>
      </Row>
    </div>
  );
}
