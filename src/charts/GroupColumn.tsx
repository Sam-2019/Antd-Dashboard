import React from "react";
import { Column } from "@ant-design/charts";
import { total } from "./dataset";

const GroupColumn: React.FC = () => {
  var config = {
    data: total,
    isGroup: true,
    xField: "date",
    yField: "number",
    seriesField: "ageGroup",
    dodgePadding: 2,
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

export default GroupColumn;
