import React from "react";
import { useParams } from "react-router-dom";
import GoBack from '../../components/GoBack'

function Member() {
  let { slug }: any = useParams();

  return (
    <div>
      <GoBack />
      <div>{slug}</div>
    </div>
  );
}

export default Member;
