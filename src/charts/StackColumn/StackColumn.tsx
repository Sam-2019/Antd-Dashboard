import { Column } from "@ant-design/charts";

const StackColumn = ({ data }: any) => {
  const config = {
    data,
    isStack: true,
    xField: "date",
    yField: "value",
    seriesField: "group",
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
