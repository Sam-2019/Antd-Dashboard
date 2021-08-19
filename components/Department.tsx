import React from "react";
import { Card } from "antd";

import Image from "next/image";
const { Meta } = Card;

const Department = () => {
  return (
    <>
      <div className="gridStyle">
        {Array(12)
          .fill()
          .map((item, index) => (
            <>
              <Card
                hoverable
                style={{ width: "auto" }}
                cover={
                  <Image
                    width={250}
                    height={250}
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <Meta title="Card title" />
              </Card>
            </>
          ))}
      </div>
    </>
  );
};

export default Department;
