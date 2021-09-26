import { useQuery } from "@apollo/client";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

import GroupColumn from "./GroupColumn";

const GroupChart = ({ info, type }: any) => {
  const { loading, error, data } = useQuery(info, {
    variables: { sundayStatType: type },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return <GroupColumn data={data.sundayStat} />;
};

export default GroupChart;
