import { Link } from "react-router-dom";
import { Table, Tag, Space } from "antd";
import Column from "antd/lib/table/Column";
import GoBack from "../../components/GoBack";
import { userData } from "../../utils/data";

function Chapel() {
  return (
    <div>
      <GoBack />
      <Table dataSource={userData}>
        <Column
          title="Name"
          dataIndex="firstName"
          key="firstName"
          render={(text: any, record: any): any => (
            <Space size="middle">
              <Link to={`/members/${record.firstName} ${record.lastName}`}>
                {record.firstName} {record.lastName}
              </Link>
            </Space>
          )}
        />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Department"
          dataIndex="department"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag: string): any => {
                let color = tag.length > 5 ? "geekblue" : "green";
                if (tag === "loser") {
                  color = "volcano";
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        />
        {/* <Column
        title="Action"
        dataIndex="action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <a>Invite {record.lastName}</a>
            <a>Delete</a>
          </Space>
        )}
      /> */}
      </Table>
    </div>
  );
}

export default Chapel;
