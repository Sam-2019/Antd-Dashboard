import Card from "../../components/Card/Card";
import PageHeader from "../../components/PageHeader";
import { payment} from "../../utils/data";

const Payments = () => {
  return (
    <>
      <PageHeader header="Payments" />
      <Card data={payment} />
    </>
  );
};

export default Payments;
