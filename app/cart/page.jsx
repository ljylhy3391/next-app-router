import styles from "./page.module.css";
import CartList from "../components/features/cart/CartList";
import CartSummary from "../components/features/cart/CartSummary";
import { headers } from "next/headers";
import { fetchCartData } from "@/app/api/cart/route";

/**
 *   장바구니 페이지
 * - 장바구니 페이지는 장바구니에 담긴 상품 목록이 표시된다
 * - 장바구니 페이지 하단에는 총 상품 개수와 가격이 표시된다
 *
 * next/headers의 headers()를 사용하여 동적 렌더링을 강제합니다.
 * 이렇게 하면 빌드 시 정적 생성되지 않고 매 요청마다 서버에서 렌더링됩니다.
 */
async function CartPage() {
  // headers()를 호출하여 동적 렌더링을 트리거합니다
  const headersList = await headers();
  // 실제로 헤더 값을 사용하거나 참조해야 Next.js가 동적으로 인식합니다
  const userAgent = headersList.get("user-agent");

  // route.js의 공통 함수를 직접 호출 (인증 토큰은 route.js에서 관리)
  const cart = await fetchCartData();

  // 총 가격 계산
  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const totalCount = cart.length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>장바구니</h1>

      {cart.length === 0 ? (
        <CartList cart={cart} />
      ) : (
        <>
          <CartList cart={cart} />
          <CartSummary totalCount={totalCount} totalPrice={totalPrice} />
        </>
      )}
    </div>
  );
}

export default CartPage;
