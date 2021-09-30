import { ReactElement } from "react";

import {
  GET_GENDER_COUNT,
  GET_SUNDAY_STATS,
  GET_GROUP_STATS,
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

export const GenderTabList = [
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

export const ServiceTabList = [
  {
    key: "first",
    tab: "First Service",
  },
  {
    key: "second",
    tab: "Second Service",
  },
  {
    key: "joint",
    tab: "Joint Service",
  },
];

export const ColumnList: StringArray = {
  adult: <StackColumn info={GET_GROUP_STATS} type="adult" />,
  omega: <StackColumn info={GET_GROUP_STATS} type="omega" />,
  children: <StackColumn info={GET_GROUP_STATS} type="children" />,
};

export const GenderPieList: StringArray = {
  total: <Pie info={GET_GENDER_COUNT} group="" />,
  adult: <Pie info={GET_GENDER_COUNT} group="Adult" />,
  omega: <Pie info={GET_GENDER_COUNT} group="Omega" />,
  children: <Pie info={GET_GENDER_COUNT} group="Children" />,
};

export const ServiceColumnList: StringArray = {
  first: (
    <GroupChart info={GET_SUNDAY_STATS} type="first service" vehicles={false} />
  ),
  second: (
    <GroupChart
      info={GET_SUNDAY_STATS}
      type="second service"
      vehicles={false}
    />
  ),
  joint: (
    <GroupChart info={GET_SUNDAY_STATS} type="joint service" vehicles={false} />
  ),
};

export const Vehicle: StringArray = {
  first: (
    <GroupChart info={GET_SUNDAY_STATS} type="first service" vehicles={true} />
  ),
  second: (
    <GroupChart info={GET_SUNDAY_STATS} type="second service" vehicles={true} />
  ),
  joint: (
    <GroupChart info={GET_SUNDAY_STATS} type="joint service" vehicles={true} />
  ),
};
