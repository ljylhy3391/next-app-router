"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function CartError({ error, reset }) {
  useEffect(() => {
    console.error("Cart Error:", error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>장바구니</h1>
      <div className={styles.errorContent}>
        <h2 className={styles.errorTitle}>장바구니를 불러오는 중 오류가 발생했습니다</h2>
        <p className={styles.errorMessage}>
          장바구니 정보를 가져오는 데 문제가 발생했습니다.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.retryButton} onClick={reset}>
            다시 시도
          </button>
          <Link href="/" className={styles.homeButton}>
            쇼핑 계속하기
          </Link>
        </div>
      </div>
    </div>
  );
}

