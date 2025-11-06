"use client";

import { useRouter } from "next/navigation";
import styles from "./CartItemDeleteButton.module.css";

function CartItemDeleteButton({ productId }) {
  const router = useRouter();

  const handleDelete = async () => {
    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    const result = await response.json();

    if (result.error) {
      alert(result.error);
      return;
    }

    alert("삭제되었습니다");
    router.refresh();
  };

  return (
    <button className={styles.deleteButton} onClick={handleDelete}>
      삭제
    </button>
  );
}

export default CartItemDeleteButton;
