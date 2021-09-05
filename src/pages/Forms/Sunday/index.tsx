import CardView from "../../../components/Card/Card";
import GoBack from "../../../components/GoBack";
import { sundayForms } from "../../../utils/data";

function Sunday() {
  return (
    <>
      <GoBack header="Back" />

      <CardView data={sundayForms} />
    </>
  );
}

export default Sunday;
