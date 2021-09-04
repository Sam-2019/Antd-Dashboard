import { Link, useParams } from "react-router-dom";
import { Table, Tag } from "antd";
import Column from "antd/lib/table/Column";
import { useQuery } from "@apollo/client";
import GoBack from "../../components/GoBack";
import { GET_CHAPEL_MEMBERS } from "../../utils/graphqlFunctions/queries";
import { colorSwitch } from "../../utils/functions";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

function Chapel() {
  let { slug }: any = useParams();

  const { loading, error, data } = useQuery(GET_CHAPEL_MEMBERS, {
    variables: { chapel: slug },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <GoBack />
      <Table dataSource={data.chapel}>
        <Column
          title="Name"
          dataIndex="firstName"
          key="firstName"
          render={(text: any, record: any): any => (
            <Link to={`/members/${record.firstName} ${record.lastName}`}>
              {record.firstName} {record.lastName}
            </Link>
          )}
        />
        <Column title="Age" dataIndex="age" key="age" />
        <Column
          title="Department"
          dataIndex="department"
          key="department"
          render={(department: string[]) => (
            <>
              {department.map((tag: string, index: any): any => {
                let color = colorSwitch(tag);
                return (
                  <Tag color={color} key={index}>
                    {tag}
                  </Tag>
                );
              })}
            </>
          )}
        />
      </Table>
    </div>
  );
}

export default Chapel;
