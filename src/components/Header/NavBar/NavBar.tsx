"use client";

import Link from "next/link";
import style from "./navBar.module.css";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export default function NavBar({ navLinks }: Props) {
  const pathName = usePathname();

  return (
    <div className={style.wrapper}>
      {navLinks.map((el) => {
        const { label, href } = el;
        return (
          <Link
            key={label}
            className={pathName !== href ? style.link : `${style.link} ${style.active}`}
            href={href}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
