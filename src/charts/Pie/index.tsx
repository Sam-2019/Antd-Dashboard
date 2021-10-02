import { useQuery } from "@apollo/client";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import Pie from "./Pie";

function PieChart({ info, group }: any) {
  const { loading, error, data } = useQuery(info, {
    variables: {
      countGenderGroup: group,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }
  return <Pie data={data.countGender} group={group} />;
}

export default PieChart;
