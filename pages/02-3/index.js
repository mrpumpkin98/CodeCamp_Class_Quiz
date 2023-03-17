import { useState } from "react"


export default function CounterStatePage() {
    const [count, setCount] = useState("0000000")

    function onClickCountUp() {
        setCount(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"))

    }


    return (
        <div>
            <div>{count}</div>
            <button onClick={onClickCountUp}>인증번호 생성</button>
        </div>

    )
}
