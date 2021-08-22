import React from "react";
import { Card } from "antd";
import { month } from "../JSON/data";

const { Meta } = Card;

function Tithe() {
  return (
    <div className="gridStyle">
      {month.map((data: any) => (
        <div key={data.key}>
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

export default Tithe;
