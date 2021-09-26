import { Column } from "@ant-design/charts";

const GroupColumn = ({ data }: any) => {
  var config = {
    data,
    isGroup: true,
    xField: "date",
    yField: "value",
    seriesField: "group",
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
