import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMapPage(): JSX.Element {
  const router = useRouter();
  const onclickMove = (): void => {
    void router.push("/25/25-01-moved");
  };

  return (
    <>
      <button onClick={onclickMove}>페이지 이동해라 이놈들아!!!!!</button>

      {/* next에서 제공하는 a태그 이므로, SPA 확용 가능 */}
      <Link href="/25/25-01-moved">페이지 이동하기</Link>
    </>
  );
}
