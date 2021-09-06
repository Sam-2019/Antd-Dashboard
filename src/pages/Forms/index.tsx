import Card from "../../components/Card/Card";
import PageHeader from "../../components/PageHeader";
import { forms } from "../../utils/data";

function Forms() {
  return (
    <>
      <PageHeader header="Forms" />
      <Card data={forms} />
    </>
  );
}

export default Forms;
