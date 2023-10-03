import CardView from "../../../components/Card/Card";
import GoBack from "../../../components/GoBack";
import { sundayRoute } from "../../../utils/data";

function SundayForm() {
  return (
    <>
      <GoBack header="Sunday" />
      <CardView data={sundayRoute} />
    </>
  );
}

export default SundayForm;
