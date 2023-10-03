import Card from "../../components/Card/Card";
import PageHeader from "../../components/PageHeader";
import { forms } from "../../utils/data";

function VisitorForm() {
  return (
    <>
      <PageHeader header="Forms" />
      <Card data={forms} />
    </>
  );
}

export default VisitorForm;
