import Link from "next/link";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.container}>
      <div className={style.wrapper}>
        <Link className={style.link} href="/">
          Home
        </Link>
        <Link className={style.link} href="/about">
          About
        </Link>
        <Link className={style.link} href="/blog">
          Blog
        </Link>
      </div>
    </header>
  );
}
