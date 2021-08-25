import { Card } from "antd";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

function CardView({ data }: any) {
  const history = useHistory();
  return (
    <div className="gridStyle">
      {data.map((data: any) => (
        <div key={data.key} onClick={() => history.push(`/forms${data.path}`)}>
          <Card
            hoverable
            cover={
              <img
                width={250}
                height="auto"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title={data.name} />
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardView;
