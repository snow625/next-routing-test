import NavBar from "./NavBar";
import style from "./header.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className={style.container}>
      <NavBar navLinks={navItems} />
    </header>
  );
}
