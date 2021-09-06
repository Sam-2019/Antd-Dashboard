import { departments } from "../../utils/data";
import Card from "../../components/Card/Card";
import PageHeader from "../../components/PageHeader";

const Department = () => {
  return (
    <>
      <PageHeader header="Departments" />
      <Card data={departments} />
    </>
  );
};

export default Department;
