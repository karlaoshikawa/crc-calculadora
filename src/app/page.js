import BoxInfo from "../components/BoxInfo/index.js";
import FixedCosts from "../components/FixedCosts/index.js";
import Material from "../components/Material/index.js";
import Packaging from "../components/Packaging/index.js";
import Remuneration from "../components/Remuneration/index.js";

export default function Home() {
  return (
    <div>
      <BoxInfo />
      <Material />
      <FixedCosts />
      <Packaging />
      <Remuneration />
    </div>
  );
}
