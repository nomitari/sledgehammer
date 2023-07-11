import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Menu from "../Menu";

const Nav: React.FC = () => {
  window.addEventListener("load", () => {
    document.body.style.color = "#000";
  });

  return (
    <div className="nav-bar">
      <div>
        <Logo />
        <Hamburger />
      </div>
      <Menu />
    </div>
  );
};

export default Nav;
