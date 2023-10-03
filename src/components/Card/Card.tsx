import { Card } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import AvatarGroup from "../AvatarGroup";
import { cardStyles } from "../../utils/styles";

const { Meta } = Card;

function CardView({ type, data, avatar }: any) {
  const navigate = useNavigate();
  let location = useLocation();

  function routeAction(datum: any) {

    let pathSnippets = datum.path.split("/");

    if (pathSnippets.length > 2) {
      return navigate(`${location.pathname}/${pathSnippets[2]}`);
    }

    if (pathSnippets.length === 2) {
      return navigate(`${location.pathname}/${pathSnippets[1]}`);
    }

    return navigate(`${location.pathname}${datum.path}`);
  }

  return (
    <div className="gridStyle">
      {data.map((datum: any) => (
        <div key={datum.key} onClick={() => routeAction(datum)}>
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
              <Meta description={datum.name} />
              <div>
                {/* {avatar && <AvatarGroup type={type} group={datum.name} />} */}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardView;
