import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.skeletonContainer}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonInfo}>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.skeletonPrice}></div>
          <div className={styles.skeletonButton}></div>
        </div>
      </div>
    </div>
  );
}

