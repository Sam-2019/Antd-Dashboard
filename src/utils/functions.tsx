export const colorSwitch = (tag: any) => {
  let color;
  switch (tag) {
    case "Administration":
      color = "volcano";
      break;

    case "Chapel Shepherd":
      color = "pink";
      break;

    case "Facilitators":
      color = "yellow";
      break;

    case "Housekeeping":
      color = "magenta";
      break;

    case "Intercessory":
      color = "lime";
      break;

    case "Media":
      color = "default";
      break;

    case "MC":
      color = "orange";
      break;

    case "Parking":
      color = "cyan";
      break;

    case "Welfare":
      color = "blue";
      break;

    case "Protocol":
      color = "gold";
      break;
    case "Music":
      color = "processing";
      break;
    case "Men’s Ministry":
      color = "warning";
      break;

    case "Single's Ministry":
      color = "geekblue";
      break;

    case "Women's Ministry":
      color = "error";
      break;

    default:
      color = "green";
  }

  return color;
};

export const pathSnippets = (info: any) => {
  return info.pathname.split("/");
};

export const pathSnippetsWithFilter = (info: any) => {
  return info.pathname.split("/").filter((i: any) => i);
};

export const pathSnippetsWithFilterAndKey = (info: any, list: any) => {
  const key = info.pathname.split("/");
  const cutaway = list.filter((i: any) => i.sub_text === key[1]);
  return cutaway;
};

export function checkSlug(data: any) {
  if (data === "mmv") {
    return data.toUpperCase();
  }

  if (data === "pvv") {
    return data.toUpperCase();
  }

  return null;
}

export const getMonth = (monthStr: string) => {
  return new Date(monthStr + "-1-01").getMonth() + 1;
};

export const paymentMonth = (type: any) => {
  let month;

  switch (type) {
    case "january":
      month = "01";
      break;

    case "february":
      month = "02";
      break;

    case "march":
      month = "03";
      break;

    case "april":
      month = "04";
      break;

    case "may":
      month = "05";
      break;

    case "june":
      month = "06";
      break;

    case "july":
      month = "07";
      break;

    case "august":
      month = "08";
      break;

    case "september":
      month = "09";
      break;

    case "october":
      month = "10";
      break;

    case "november":
      month = "11";
      break;

    case "december":
      month = "12";
      break;

    default:
      month = null;
  }

  return month;
};
