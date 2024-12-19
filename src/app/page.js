// import Image from "next/image";
// import styles from "./page.module.css";
import BoxInfo from "../components/BoxInfo/index.js";
import CustosFixos from "../components/CustosFixos/index.js";

export default function Home() {
  return (
    <div>
      <BoxInfo />
      <CustosFixos />
    </div>
  );
}
