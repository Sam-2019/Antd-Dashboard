import React from "react";
import { Card } from "antd";
import { departments } from "../../others/data";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

const Department = () => {
  const history = useHistory();
  return (
    <div className="gridStyle">
      {departments.map((data: any) => (
        <div
          key={data.key}
          onClick={() => history.push(`/departments${data.path}`)}
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
};

export default Department;
