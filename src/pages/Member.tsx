import React from "react";
import {  useParams } from "react-router-dom";


function Member() {
  let { slug }: any = useParams();

  return <div>{slug}</div>;
}

export default Member;
