import styles from "./CartSummary.module.css";

function CartSummary({ totalCount, totalPrice }) {
  return (
    <div className={styles.summary}>
      <div className={styles.summaryRow}>
        <span className={styles.summaryLabel}>총 상품 개수</span>
        <span className={styles.summaryValue}>{totalCount}개</span>
      </div>
      <div className={styles.summaryRow}>
        <span className={styles.summaryLabel}>총 가격</span>
        <span className={styles.totalPrice}>
          {totalPrice.toLocaleString()}원
        </span>
      </div>
    </div>
  );
}

export default CartSummary;

