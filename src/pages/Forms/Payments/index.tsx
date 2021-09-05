import CardView from "../../../components/Card/Card";
import GoBack from "../../../components/GoBack";
import { paymentForms } from "../../../utils/data";

function Payment() {
  return (
    <>
      <GoBack header="Back" />

      <CardView data={paymentForms} />
    </>
  );
}

export default Payment;
