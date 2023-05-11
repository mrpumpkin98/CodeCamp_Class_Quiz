import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function LoginPage(): JSX.Element {
  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다.");
      void router.push("/28/payment/login");
    }
  }, []);

  const onClick = (amount: number, name: string): void => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp02172623"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name,
        amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/section28/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // 백엔드에 결제관련 데이터 넘겨주기 => 즉 뮤테이션 실행하기
          // createPointTransactionOfLoading
          void router.push("/28/payment/complete");
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      {data?.fetchUserLoggedIn.name}님 환영합니다!
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={() => onClick(500, "500원 충전")}>500원 충전</button>
      <button onClick={() => onClick(1000, "1000원 충전")}>1000원 충전</button>
      <button onClick={() => onClick(2000, "2000원 충전")}>2000원 충전</button>
      <button onClick={() => onClick(5000, "5000원 충전")}>5000원 충전</button>
    </>
  );
}
