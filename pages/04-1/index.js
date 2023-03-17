import axios from "axios"


export default function RestGetPage() {

    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result) // 제대로된 결과 => {title}

    }

    return (
        <div>
            <button onClick={onClickSync}>[ REST-API 요청하기 ]</button>
        </div>
    )
}