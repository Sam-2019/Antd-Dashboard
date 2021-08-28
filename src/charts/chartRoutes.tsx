import { ReactElement } from "react";
import StackColumn from "./StackColumn";
import GroupColumn from "./GroupColumn";
import Pie from "./Pie";
import {
  ageGroupColumn,
  genderStackColumn,
  vehicleGroupColumn,
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
  total: <GroupColumn data={ageGroupColumn} />,
  adult: <StackColumn data={genderStackColumn} />,
  omega: <StackColumn data={genderStackColumn} />,
  children: <StackColumn data={genderStackColumn} />,
  vehicles: <GroupColumn data={vehicleGroupColumn} />,
};

export const PieList: StringArray = {
  total: <Pie data={pieTotalData} />,
  adult: <Pie data={pieAdultData} />,
  omega: <Pie data={pieOmegaData} />,
  children: <Pie data={pieChildrenData} />,
};
