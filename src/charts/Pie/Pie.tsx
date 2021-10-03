import { Pie } from "@ant-design/charts";

const PieChart = ({ data }: any) => {
  var config = {
    appendPadding: 10,
    theme: "default",
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-30%',
      style: { textAlign: 'center' },
      autoRotate: false,
      content: '{percentage}',
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '100%',
      },
    },
  };
  return <Pie {...config} />;
};

export default PieChart;
