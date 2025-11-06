"use client";

import { useRouter } from "next/navigation";
import styles from "./CartButton.module.css";

function CartButton({ productId }) {
  const router = useRouter();

  const handleClick = async () => {
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: productId }),
    });

    const result = await response.json();

    if (result.error) {
      alert(result.error);
      return;
    }

    alert("장바구니에 담겼습니다");
    router.push("/cart");
  };

  return (
    <button className={styles.addToCartButton} onClick={handleClick}>
      🛒 장바구니 담기
    </button>
  );
}

export default CartButton;
