import {
  DashboardOutlined,
  TeamOutlined,
  GroupOutlined,
  MoneyCollectOutlined,
  FormOutlined,
  UserOutlined,
  RedEnvelopeOutlined,
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
    icon: <UserOutlined />,
  },
  {
    key: "4",
    name: "Visitors",
    path: "/visitors",
    icon: <UserOutlined />,
  },
  {
    key: "5",
    name: "Tithe",
    path: "/tithe",
    icon: <MoneyCollectOutlined />,
  },
  {
    key: "6",
    name: "Chapels",
    path: "/chapels",
    icon: <TeamOutlined />,
  },
  {
    key: "7",
    name: "Pledge",
    path: "/pledges",
    icon: <RedEnvelopeOutlined />,
  },
  {
    key: "8",
    name: "Forms",
    path: "/forms",
    icon: <FormOutlined />,
  },
];

export const departments = [
  { key: "0", name: "Administration", path: "/administration" },
  { key: "1", name: "Chapel Shepherd", path: "/chapel shepherd" },
  { key: "2", name: "Facilitators", path: "/facilitators" },
  { key: "3", name: "Housekeeping", path: "/housekeeping" },
  { key: "4", name: "Intercessory", path: "/intercessory" },
  { key: "5", name: "MC", path: "/mc" },
  { key: "6", name: "Media", path: "/media" },
  { key: "7", name: "Medical", path: "/medical" },
  { key: "8", name: "Men’s Ministry", path: "/men’s ministry" },
  { key: "9", name: "Music", path: "/music" },
  { key: "10", name: "Parking", path: "/parking" },
  { key: "11", name: "Protocol", path: "/protocol" },
  { key: "12", name: "Single's Ministry", path: "/single's ministry" },
  { key: "13", name: "Women’s Ministry", path: "/women’s ministry" },
  { key: "14", name: "Welfare", path: "/welfare" },
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
  {
    key: "3",
    name: "Tithe",
    path: "/tithe",
  },
  {
    key: "4",
    name: "Member",
    path: "/member",
  },
  {
    key: "5",
    name: "Pledge",
    path: "/pledge",
  },
];

export const radioOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

export const visitOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

export const knowOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

export const breadcrumbNameMap = {
  "/departments": "Department",
  "/departments/:slug": "Department",
  "/members": "Members",
  "/tithe": "Tithe",
  "/chapels": "Chapels",
};

export const newData = [
  {
    key: "0",
    title: "content1",
    description: "description of content1",
    chosen: false,
  },
  {
    key: "1",
    title: "content2",
    description: "description of content2",
    chosen: false,
  },
  {
    key: "2",
    title: "content3",
    description: "description of content3",
    chosen: true,
  },
  {
    key: "3",
    title: "content4",
    description: "description of content4",
    chosen: true,
  },
  {
    key: "4",
    title: "content5",
    description: "description of content5",
    chosen: true,
  },
  {
    key: "5",
    title: "content6",
    description: "description of content6",
    chosen: true,
  },
  {
    key: "6",
    title: "content7",
    description: "description of content7",
    chosen: true,
  },
  {
    key: "7",
    title: "content8",
    description: "description of content8",
    chosen: true,
  },
  {
    key: "8",
    title: "content9",
    description: "description of content9",
    chosen: false,
  },
  {
    key: "9",
    title: "content10",
    description: "description of content10",
    chosen: false,
  },
  {
    key: "10",
    title: "content11",
    description: "description of content11",
    chosen: false,
  },
  {
    key: "11",
    title: "content12",
    description: "description of content12",
    chosen: true,
  },
  {
    key: "12",
    title: "content13",
    description: "description of content13",
    chosen: false,
  },
  {
    key: "13",
    title: "content14",
    description: "description of content14",
    chosen: true,
  },
  {
    key: "14",
    title: "content15",
    description: "description of content15",
    chosen: false,
  },
  {
    key: "15",
    title: "content16",
    description: "description of content16",
    chosen: true,
  },
  {
    key: "16",
    title: "content17",
    description: "description of content17",
    chosen: true,
  },
  {
    key: "17",
    title: "content18",
    description: "description of content18",
    chosen: false,
  },
  {
    key: "18",
    title: "content19",
    description: "description of content19",
    chosen: false,
  },
  {
    key: "19",
    title: "content20",
    description: "description of content20",
    chosen: false,
  },
];
