import React from "react";
import { Column } from "@ant-design/charts";
import { stack } from "./dataset";

const StackColumn: React.FC = () => {
  var config = {
    data: stack,
    isStack: true,
    xField: "date",
    yField: "value",
    seriesField: "type",
    label: {
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
        { type: "adjust-color" },
      ],
    },
  };
  return <Column {...config} />;
};

export default StackColumn;
