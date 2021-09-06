import CardView from "../../../components/Card/Card";
import GoBack from "../../../components/GoBack";
import { sundayRoute } from "../../../utils/data";

function Sunday() {
  return (
    <>
      <GoBack header="Sunday" />
      <CardView data={sundayRoute} />
    </>
  );
}

export default Sunday;
