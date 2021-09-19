import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PAYMENT } from "../../utils/graphqlFunctions/queries";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import { pathSnippetsWithFilter, paymentMonth } from "../../utils/functions";
import { DatePicker} from "antd";
import TypeItem from "./TypeItem";
import GoBack from "../../components/GoBack";

function Type() {
  let location = useLocation();
  let { slug }: any = useParams();
  const [year, setYear] = useState("");
  const [state, setstate] = useState("");

  function onChange(date: any, dateString: any) {
    setYear(dateString);
  }
  const paymentType = pathSnippetsWithFilter(location);
  const month = paymentMonth(slug);

  useEffect(() => {
    const check = () => {
      if (!year) {
        return;
      } else {
        setstate(`${year}-${month}`);
      }
    };

    check();

    return () => {
      check();
    };
  }, [month, year]);

  console.log(state);

  const { loading, error, data } = useQuery(GET_PAYMENT, {
    variables: {
      paymentMonth: state,
      paymentType: paymentType[1],
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <GoBack />
   
        <div style={{ marginBottom: 10 }}>
          Select year : <DatePicker onChange={onChange} picker="year" />{" "}
        </div>
  

      <TypeItem dataSource={data.payment} />
    </>
  );
}

export default Type;
