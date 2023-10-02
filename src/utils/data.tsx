import {
  DashboardOutlined,
  TeamOutlined,
  GroupOutlined,
  MoneyCollectOutlined,
  FormOutlined,
  RedEnvelopeOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
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
    label: "Dashboard",
    path: "/",
    icon: <DashboardOutlined />,
  },
  {
    key: "2",
    label: "Departments",
    path: "/departments",
    icon: <GroupOutlined />,
  },
  {
    key: "3",
    label: "Members",
    path: "/members",
    icon: <TeamOutlined />,
  },
  {
    key: "4",
    label: "Visitors",
    path: "/visitors",
    icon: <UsergroupAddOutlined />,
  },
  {
    key: "5",
    label: "Payments",
    path: "/payments",
    icon: <MoneyCollectOutlined />,
  },
  {
    key: "6",
    label: "Chapels",
    path: "/chapels",
    icon: <TeamOutlined />,
  },
  {
    key: "7",
    label: "Pledge",
    path: "/pledges",
    icon: <RedEnvelopeOutlined />,
  },
  {
    key: "8",
    label: "Forms",
    path: "/forms",
    icon: <FormOutlined />,
  },
];

export const userMenuItems = [
  {
    key: 0,
    name: "Profile",
    path: "/profile",
    icon: <UserOutlined />,
  },
  {
    key: 1,
    name: "Settings",
    path: "/settings",
    icon: <SettingOutlined />,
  },
  {
    key: 2,
    name: "Logout",
    path: '/login',
    icon: <LogoutOutlined />,
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
    name: "Payments",
    path: "/payments",
  },
  {
    key: "3",
    name: "Visitor",
    path: "/visitor",
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

export const sundayRoute = [
  {
    key: "1",
    name: "First Service",
    path: "/sunday/first service",
  },
  {
    key: "2",
    name: "Second Service",
    path: "/sunday/second service",
  },
  {
    key: "3",
    name: "Joint Service",
    path: "/sunday/joint service",
  },
  // {
  //   key: "4",
  //   name: "All Night",
  //   path: "/sunday/all night",
  // },
];

export const paymentRoute = [
  {
    key: "1",
    name: "Tithe",
    path: "/payments/tithe",
  },
  {
    key: "2",
    name: "Project Offering",
    path: "/payments/project offering",
  },
  {
    key: "3",
    name: "MMV",
    path: "/payments/mmv",
  },
  {
    key: "4",
    name: "PVV",
    path: "/payments/pvv",
  },
  {
    key: "5",
    name: "Welfare",
    path: "/payments/welfare",
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
  "/pledges": "Pledges",
};

export const steps = [
  {
    title: "Basic",
    content: "First-content",
  },
  {
    title: "Personal",
    content: "Second-content",
  },
  {
    title: "Church",
    content: "Last-content",
  },
];

export const regions = [
  {
    key: 1,
    value: "Ahafo",
  },
  {
    key: 2,
    value: "Ashanti",
  },
  {
    key: 3,
    value: "Bono East",
  },
  {
    key: 4,
    value: "Brong Ahafo",
  },
  {
    key: 5,
    value: "Central",
  },
  {
    key: 6,
    value: "Eastern",
  },
  {
    key: 7,
    value: "Greater Accra",
  },
  {
    key: 8,
    value: "North East",
  },
  {
    key: 9,
    value: "Northern",
  },
  {
    key: 10,
    value: "Oti",
  },
  {
    key: 11,
    value: "Savannah",
  },
  {
    key: 12,
    value: "Upper East",
  },
  {
    key: 13,
    value: "Upper West",
  },
  {
    key: 14,
    value: "Western",
  },
  {
    key: 15,
    value: "Western North",
  },
  {
    key: 16,
    value: "Volta",
  },
  {
    key: 17,
    value: "Other",
  },
];

export const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote D'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People'S Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People'S Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];
