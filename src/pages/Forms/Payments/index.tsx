import CardView from "../../../components/Card/Card";
import GoBack from "../../../components/GoBack";
import { payment } from "../../../utils/data";

function Payment() {
  return (
    <>
      <GoBack header="Payment" />
      <CardView data={payment} />
    </>
  );
}

export default Payment;
