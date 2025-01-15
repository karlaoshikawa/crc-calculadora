import Image from "next/image";
import logo from "../../assets/logo-cartonagem.png";
import "./header.scss";

export default function Header() {
  return (
    <div className="header-container">
      <Image src={logo} alt="logo" />
    </div>
  );
}
