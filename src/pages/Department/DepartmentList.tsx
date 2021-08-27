import React from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import Spinner from "../../components/Spinner/Spinner";

function Department() {
  let { slug }: any = useParams();

  return <div>{slug ? <List slug={slug} /> : <Spinner />}</div>;
}

export default Department;
