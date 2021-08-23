import {
  DashboardOutlined,
  TeamOutlined,
  GroupOutlined,
} from "@ant-design/icons";

export const userData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export const month = [
  {
    key: "1",
    name: "January",
    path: "/january",
  },
  {
    key: "2",
    name: "February",
    path: "/february",
  },
  {
    key: "3",
    name: "March",
    path: "/march",
  },
  {
    key: "4",
    name: "April",
    path: "/april",
  },
  {
    key: "5",
    name: "May",
    path: "/may",
  },
  {
    key: "6",
    name: "June",
    path: "/june",
  },
  {
    key: "7",
    name: "July",
    path: "/july",
  },
  {
    key: "8",
    name: "August",
    path: "/august",
  },
  {
    key: "9",
    name: "September",
    path: "/september",
  },
  {
    key: "10",
    name: "October",
    path: "/october",
  },
  {
    key: "11",
    name: "November",
    path: "/november",
  },
  {
    key: "12",
    name: "December",
    path: "/december",
  },
];

export const menuItems = [
  {
    key: "1",
    name: "Dashboard",
    path: "/",
    icon: <DashboardOutlined />,
  },
  {
    key: "2",
    name: "Departments",
    path: "/departments",
    icon: <GroupOutlined />,
  },
  {
    key: "3",
    name: "Members",
    path: "/members",
    icon: <TeamOutlined />,
  },
  {
    key: "4",
    name: "Tithe",
    path: "/tithe",
    icon: <TeamOutlined />,
  },
  {
    key: "5",
    name: "Chapels",
    path: "/chapels",
    icon: <TeamOutlined />,
  },
  {
    key: "6",
    name: "Forms",
    path: "/forms",
    icon: <TeamOutlined />,
  },
];

export const departments = [
  {
    key: "1",
    name: "Adminstration",
    path: "/admin",
  },
  {
    key: "2",
    name: "Protocol",
    path: "/protocol",
  },
  {
    key: "3",
    name: "Audi-Visual",
    path: "/audio-visual",
  },
  {
    key: "4",
    name: "Traffic Control",
    path: "/traffic-control",
  },
  {
    key: "5",
    name: "Choir",
    path: "/choir",
  },
  {
    key: "6",
    name: "Omega",
    path: "/omega",
  },
  {
    key: "7",
    name: "Deacon",
    path: "/deacon",
  },
  {
    key: "8",
    name: "Children Service",
    path: "/children-service",
  },
];

export const forms = [
  {
    key: "1",
    name: "Sunday",
    path: "/sunday",
  },
  {
    key: "2",
    name: "Visitor",
    path: "/visitor",
  },
];

export const breadcrumbNameMap = {
  "/departments": "Department",
  "/departments/:slug": "Department",
  "/members": "Members",
  "/tithe": "Tithe",
  "/chapels": "Chapels",
};
