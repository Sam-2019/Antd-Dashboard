import { ReactElement } from "react";
import StackColumn from "./StackColumn";
import GroupColumn from "./GroupColumn";
import Pie from "./Pie";
import {
  pieTotalData,
  pieAdultData,
  pieOmegaData,
  pieChildrenData,
} from "./dataset";

interface StringArray {
  [index: string]: ReactElement<any, any>;
}

export const TabList = [
  {
    key: "total",
    tab: "Total",
  },
  {
    key: "adult",
    tab: "Adult",
  },
  {
    key: "omega",
    tab: "Omega",
  },
  {
    key: "children",
    tab: "Children",
  },
];

export const TabList2 = [
  {
    label: "Total",
    value: "total",
  },
  {
    label: "Adult",
    value: "adult",
  },
  {
    label: "Omega",
    value: "omega",
  },
  {
    label: "Children",
    value: "children",
  },
];

export const ColumnList: StringArray = {
  total: <GroupColumn />,
  adult: <StackColumn />,
  omega: <StackColumn />,
  children: <StackColumn />,
};

export const PieList: StringArray = {
  total: <Pie data={pieTotalData} />,
  adult: <Pie data={pieAdultData} />,
  omega: <Pie data={pieOmegaData} />,
  children: <Pie data={pieChildrenData} />,
};
