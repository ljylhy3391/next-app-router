import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "../lib/api/products";

async function ProductList() {
  const products = await fetchProducts();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>상품 목록</h1>
        <p className={styles.subtitle}>
          총 {products.length}개의 상품이 있습니다
        </p>
      </div>
      <div className={styles.productsContainer}>
        {products.length === 0 ? (
          <div>상품이 없습니다</div>
        ) : (
          products.map((product) => {
            return (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className={styles.productCard}>
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={400}
                    height={400}
                    className={styles.productImage}
                  />
                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productPrice}>
                      {product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ProductList;
