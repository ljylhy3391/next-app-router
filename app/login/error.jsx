"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function LoginError({ error, reset }) {
  useEffect(() => {
    console.error("Login Error:", error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <h1 className={styles.title}>로그인 페이지</h1>
        <h2 className={styles.errorTitle}>로그인 중 오류가 발생했습니다</h2>
        <p className={styles.errorMessage}>
          로그인 처리 중 문제가 발생했습니다.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.retryButton} onClick={reset}>
            다시 시도
          </button>
          <Link href="/" className={styles.homeButton}>
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

