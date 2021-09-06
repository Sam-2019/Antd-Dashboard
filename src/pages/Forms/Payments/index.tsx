import CardView from "../../../components/Card/Card";
import GoBack from "../../../components/GoBack";
import { paymentRoute } from "../../../utils/data";

function Payment() {
  return (
    <>
      <GoBack header="Payment" />
      <CardView data={paymentRoute} />
    </>
  );
}

export default Payment;
