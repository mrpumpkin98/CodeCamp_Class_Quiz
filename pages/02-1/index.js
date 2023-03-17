import { useState } from "react"

export default function CounterStatePage() {
    const [name, setCount] = useState("안녕하세요")

    function onClickCountUp() {
        setCount("반갑습니다.")

    }

    return (
        <div>
            <button onClick={onClickCountUp}>{name}</button>
        </div>

    )
}