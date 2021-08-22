import React from "react";
import { Table, Tag, Space } from "antd";
import Column from "antd/lib/table/Column";
import { Link } from "react-router-dom";
import GoBack from '../../components/GoBack'
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function Department() {
  return (
    <div>
      <GoBack />
      <Table dataSource={data}>
        <Column
          title="Name"
          dataIndex="name"
          key="name"
          render={(text: string): any => (
            <Space size="middle">
              <Link to={`/members/${text}`}>{text}</Link>
            </Space>
          )}
        />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
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

export default Department;
