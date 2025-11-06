"use client";

import { useEffect } from "react";
import styles from "./global-error.module.css";

/**
 * 글로벌 에러 바운더리
 * - 루트 레이아웃(layout.jsx)에서 발생하는 에러를 처리합니다
 * - 반드시 <html> 태그를 포함해야 합니다
 */
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // 에러 로깅
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html lang="ko">
      <body>
        <div className={styles.errorContainer}>
          <div className={styles.errorContent}>
            <h2 className={styles.errorTitle}>심각한 오류가 발생했습니다</h2>
            <p className={styles.errorMessage}>
              애플리케이션에서 예상치 못한 오류가 발생했습니다.
              <br />
              페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.retryButton} onClick={reset}>
                다시 시도
              </button>
              <button
                className={styles.refreshButton}
                onClick={() => window.location.reload()}
              >
                페이지 새로고침
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

