import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonItems}>
        {[1, 2, 3].map((item) => (
          <div key={item} className={styles.skeletonItem}>
            <div className={styles.skeletonItemImage}></div>
            <div className={styles.skeletonItemInfo}>
              <div className={styles.skeletonItemName}></div>
              <div className={styles.skeletonItemPrice}></div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.skeletonSummary}></div>
    </div>
  );
}

