import Card from "../../components/Card/Card";
import PageHeader from "../../components/PageHeader";
import { paymentRoute } from "../../utils/data";

const PaymentForm = () => {
  return (
    <>
      <PageHeader header="Payments" />
      <Card data={paymentRoute} />
    </>
  );
};

export default PaymentForm;
