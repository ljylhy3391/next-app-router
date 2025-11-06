import Image from "next/image";
import Link from "next/link";
import CartItemDeleteButton from "./CartItemDeleteButton";
import styles from "./CartList.module.css";

function CartList({ cart }) {
  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <p>장바구니가 비어있습니다.</p>
        <Link href="/" className={styles.shopLink}>
          쇼핑하러 가기
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartItems}>
      {cart.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <Link href={`/products/${item.id}`} className={styles.itemLink}>
            <div className={styles.itemImage}>
              <Image
                src={item.image_url}
                alt={item.name}
                width={150}
                height={150}
                className={styles.productImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.itemPrice}>
                {item.price.toLocaleString()}원
              </p>
            </div>
          </Link>
          <div className={styles.deleteButtonWrapper}>
            <CartItemDeleteButton productId={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartList;

