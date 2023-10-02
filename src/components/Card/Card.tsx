import { Card } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import AvatarGroup from "../AvatarGroup";
import { cardStyles } from "../../utils/styles";

const { Meta } = Card;

function CardView({ type, data, avatar }: any) {
  const navigate = useNavigate();
  let location = useLocation();

  function routeAction(data: any) {
    let pathSnippets = data.path.split("/");

    if (pathSnippets.length > 2) {
      return navigate(`${location.pathname}/${pathSnippets[2]}`);
    }

    return navigate(`${location.pathname}${data.path}`);
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
            <div style={cardStyles}>
              <Meta description={data.name} />
              <div>
                {avatar && <AvatarGroup type={type} group={data.name} />}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardView;
