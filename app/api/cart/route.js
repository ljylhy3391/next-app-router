const apiUrl = "https://app-router-api-five.vercel.app/api/cart";

const AUTH_TOKEN = "Bearer 1234567890";

// 공통 함수: 서버 컴포넌트와 API 라우트에서 모두 사용 가능
export async function fetchCartData() {
  try {
    // 외부 API 호출 (서버에서만 실행)
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error(
        `장바구니를 불러올 수 없습니다. (${response.status}: ${response.statusText})`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
}

export async function GET() {
  try {
    const data = await fetchCartData();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: error.message || "장바구니를 불러올 수 없습니다" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return Response.json({ error: "id is required" }, { status: 400 });
    }

    // 외부 API 호출 (서버에서만 실행)
    const response = await fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new Error("장바구니 추가에 실패했습니다");
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error adding to cart:", error);
    return Response.json(
      { error: error.message || "장바구니 추가에 실패했습니다" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { productId } = await request.json();

    if (!productId) {
      return Response.json({ error: "productId is required" }, { status: 400 });
    }

    // 외부 API 호출 (서버에서만 실행)
    const response = await fetch(`${apiUrl}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
      throw new Error("장바구니 삭제에 실패했습니다");
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error deleting from cart:", error);
    return Response.json(
      { error: error.message || "장바구니 삭제에 실패했습니다" },
      { status: 500 }
    );
  }
}
