import { ReactElement } from "react";
import StackColumn from "./StackColumn";
import GroupColumn from "./GroupColumn";

interface StringArray {
  [index: string]: ReactElement<any, any>;
}

export const contentListNoTitle: StringArray = {
  total: <GroupColumn />,
  adult: <StackColumn />,
  omega: <StackColumn />,
  children: <StackColumn />,
};

export const tabListNoTitle = [
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
