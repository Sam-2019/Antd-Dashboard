import { Card } from "antd";
import { useHistory, useLocation } from "react-router-dom";

const { Meta } = Card;

function CardView({ data }: any) {
  const history = useHistory();
  let location = useLocation();

  let pathSnippets = location.pathname.split("/").filter((i) => i);

  return (
    <div className="gridStyle">
      {data.map((data: any) => (
        <div
          key={data.key}
          onClick={() => history.push(`/${pathSnippets[0]}${data.path}`)}
        >
          <Card
            hoverable
            cover={
              <img
                width="auto"
                height="auto"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta description={data.name} />
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardView;
