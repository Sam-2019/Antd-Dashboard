import Card from "../../components/Card/Card";
import GoBack from "../../components/GoBack";
import { month } from "../../utils/data";

function PaymentPeriod() {
  return (
    <div>
      <GoBack />
      <Card data={month} />
    </div>
  );
}

export default PaymentPeriod;
