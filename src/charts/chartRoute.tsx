import { ReactElement } from "react";

import {
  GET_GENDER_COUNT,
  GET_GROUP_STATS,
  GET_SUNDAY_STATS,
} from "../utils/graphqlFunctions/queries";
import GroupChart from "./GroupColumn";
import Pie from "./Pie";
import StackColumn from "./StackColumn";

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
  total: <GroupChart info={GET_SUNDAY_STATS} type="sundayTotal" />,
  adult: <StackColumn info={GET_GROUP_STATS} type="adult" />,
  omega: <StackColumn info={GET_GROUP_STATS} type="omega" />,
  children: <StackColumn info={GET_GROUP_STATS} type="children" />,
  vehicles: <GroupChart info={GET_SUNDAY_STATS} type="vehicles" />,
};

export const PieList: StringArray = {
  total: <Pie info={GET_GENDER_COUNT} />,
  adult: <Pie info={GET_GENDER_COUNT} />,
  omega: <Pie info={GET_GENDER_COUNT} />,
  children: <Pie info={GET_GENDER_COUNT} />,
};
