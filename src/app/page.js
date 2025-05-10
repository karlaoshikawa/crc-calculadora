import BoxInfo from "../components/BoxInfo/index.js";
import FixedCosts from "../components/FixedCosts/index.js";
import Material from "../components/Material/index.js";
import Packaging from "../components/Packaging/index.js";
import Remuneration from "../components/Remuneration/index.js";
import Header from "../components/Header/index.js";

export default function Home() {
  return (
    <div>
      <Header />
      <BoxInfo />
      <Material />
      <FixedCosts />
      <Packaging />
      <Remuneration />
    </div>
  );
}
