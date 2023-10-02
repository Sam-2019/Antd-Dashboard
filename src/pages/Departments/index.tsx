import { Fragment } from "react";
import { departments } from "../../utils/data";
import CardView from "../../components/Card/Card";
import PageHeader from "../../components/PageHeader";

const Department = () => {
  return (
    <Fragment>
      <PageHeader header="Departments" />
      <CardView type="departments" data={departments} avatar={true} />
    </Fragment>
  );
};

export default Department;
