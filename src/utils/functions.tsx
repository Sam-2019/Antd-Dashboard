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
