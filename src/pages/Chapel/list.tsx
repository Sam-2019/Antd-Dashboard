import { Table, Tag, Space } from "antd";
import Column from "antd/lib/table/Column";
import { Link, useLocation, useParams } from "react-router-dom";
import GoBack from "../../components/GoBack";
import { userData } from "../../utils/data";

function Chapel() {
  let { slug }: any = useParams();
  let location = useLocation();

  // console.log(slug)
  // console.log(location)

  return (
    <div>
      <GoBack />
      <Table dataSource={userData}>
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

export default Chapel;
