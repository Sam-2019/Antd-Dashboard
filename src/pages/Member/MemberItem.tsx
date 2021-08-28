import { Descriptions } from "antd";
import { useParams } from "react-router-dom";

import GoBack from "../../components/GoBack";

function Member() {
  let { slug }: any = useParams();

  return (
    <div>
      <GoBack />

      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">{slug}</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default Member;
