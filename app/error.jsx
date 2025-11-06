"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

export default function Error({ error, reset }) {
  useEffect(() => {
    // 에러 로깅
    console.error("Error:", error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h2 className={styles.errorTitle}>문제가 발생했습니다</h2>
        <p className={styles.errorMessage}>
          죄송합니다. 예상치 못한 오류가 발생했습니다.
        </p>
        <button className={styles.retryButton} onClick={reset}>
          다시 시도
        </button>
      </div>
    </div>
  );
}

