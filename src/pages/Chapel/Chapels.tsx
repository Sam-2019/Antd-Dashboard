import React from "react";
import { Card } from "antd";
import { month } from "../../others/data";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

function Chapels() {
  const history = useHistory();

  return (
    <div className="gridStyle">
      {month.map((data: any) => (
        <div
          key={data.key}
          onClick={() => history.push(`/chapels${data.path}`)}
        >
          <Card
            hoverable
            style={{ width: "auto" }}
            cover={
              <img
                width={250}
                height={250}
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

export default Chapels;
