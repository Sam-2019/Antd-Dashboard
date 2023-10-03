import { Column } from "@ant-design/charts";
import { Empty } from "antd";

const GroupColumn = ({ data }: any) => {
  if (data.length === 0) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  const config = {
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
