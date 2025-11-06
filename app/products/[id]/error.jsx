"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function ProductDetailError({ error, reset }) {
  useEffect(() => {
    console.error("Product Detail Error:", error);
  }, [error]);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backButton}>
        ← 목록으로 돌아가기
      </Link>
      <div className={styles.errorContent}>
        <h2 className={styles.errorTitle}>상품 정보를 불러오는 중 오류가 발생했습니다</h2>
        <p className={styles.errorMessage}>
          상품 정보를 가져오는 데 문제가 발생했습니다.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.retryButton} onClick={reset}>
            다시 시도
          </button>
          <Link href="/" className={styles.homeButton}>
            상품 목록으로
          </Link>
        </div>
      </div>
    </div>
  );
}

