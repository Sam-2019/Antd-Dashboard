import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Department = () => {
  return (
    <div className="gridStyle">
      {data.map((data: any) => (
        <div key={data.age}>
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
};

export default Department;
