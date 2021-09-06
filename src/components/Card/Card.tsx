import { Card } from "antd";
import { useHistory, useLocation } from "react-router-dom";

const { Meta } = Card;

function CardView({ data }: any) {
  const history = useHistory();
  let location = useLocation();

  function routeAction(data: any) {
    let pathSnippets = data.path.split("/");

    if (pathSnippets.length > 2) {
      return history.push(`${location.pathname}/${pathSnippets[2]}`);
    }

    return history.push(`${location.pathname}${data.path}`);
  }

  return (
    <div className="gridStyle">
      {data.map((data: any) => (
        <div key={data.key} onClick={() => routeAction(data)}>
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
