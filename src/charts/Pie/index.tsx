import { useQuery } from "@apollo/client";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import Pie from "./Pie";

function PieChart({ info, type }: any) {
  return <Pie />;
}

export default PieChart;
