// app/components/layout/AppNavigation.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AppNavigation.module.css";

function AppNavigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          쇼핑몰
        </Link>
        <div className={styles.links}>
          <Link
            href="/"
            className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
          >
            홈
          </Link>
          <Link
            href="/cart"
            className={`${styles.link} ${
              pathname === "/cart" ? styles.active : ""
            }`}
          >
            장바구니
          </Link>
          <Link
            href="/login"
            className={`${styles.link} ${
              pathname === "/login" ? styles.active : ""
            }`}
          >
            로그인
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AppNavigation;
