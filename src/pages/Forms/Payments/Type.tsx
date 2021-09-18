import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MEMBERS } from "../../../utils/graphqlFunctions/queries";
import TypeItem from "./TypeItem";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";

function Type() {
  const { loading, error, data } = useQuery(GET_MEMBERS);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return <TypeItem dataSource={data.members} />;
}

export default Type;
