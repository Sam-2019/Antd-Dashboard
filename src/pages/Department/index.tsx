import { Fragment } from "react";
import { departments } from "../../utils/data";
import Card from "../../components/Card/Card";
import PageHeader from "../../components/PageHeader";

const Department = () => {
  return (
    <Fragment>
      <PageHeader header="Departments" />
      <Card data={departments} avatar={true} />
    </Fragment>
  );
};

export default Department;
