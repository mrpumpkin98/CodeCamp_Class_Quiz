import { useRef, useState, useEffect } from "react";

export default function loadPage(): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    alert("컴포넌트가 마운트됐습니다~");
    fileRef.current?.focus();
  }, []);

  return (
    <>
      <input style={{ margin: "100px" }} ref={fileRef} />
    </>
  );
}
