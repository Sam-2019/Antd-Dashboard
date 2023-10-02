import Card from "../../components/Card/Card";
import PageHeader from "../../components/PageHeader";
import { month } from "../../utils/data";

function Chapels() {
  return (
    <>
      <PageHeader header="Chapels" />
      <Card type="chapel" data={month} avatar={true} />
    </>
  );
}

export default Chapels;
