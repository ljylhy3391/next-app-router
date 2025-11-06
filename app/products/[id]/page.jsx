import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import CartButton from "../../components/features/product/CartButton";
import { fetchProduct } from "../../../lib/api/products";

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = await fetchProduct(id);
  /* product는 id, name, price, image_url 형식으로 받아옴 */
  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.errorMessage}>
          <h2>상품을 찾을 수 없습니다</h2>
          <Link href="/" className={styles.backButton}>
            ← 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backButton}>
        ← 목록으로 돌아가기
      </Link>

      <div className={styles.detailContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={product.image_url}
            alt={product.name}
            width={600}
            height={600}
            className={styles.productImage}
            priority
          />
        </div>

        <div className={styles.infoWrapper}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <div className={styles.priceSection}>
            <span className={styles.priceLabel}>가격</span>
            <span className={styles.price}>
              {product.price.toLocaleString()}
              <span className={styles.currency}>원</span>
            </span>
          </div>

          <div className={styles.cartButtonWrapper}>
            <CartButton productId={product.id} />
          </div>

          <div className={styles.productId}>
            <span className={styles.idLabel}>상품 ID:</span>
            <span className={styles.idValue}>{product.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
