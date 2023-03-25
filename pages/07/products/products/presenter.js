import { BlueButton } from "./styles"

export default function UI(props) {
    return (
        <div>
            판매자 : <input type="text" onChange={props.bbb} />
            <br></br>
            상품명 : <input type="text" onChange={props.ccc} />
            <br></br>
            상품내용 : <input type="text" onChange={props.ddd} />
            <br></br>
            상품가격 : <input type="text" onChange={props.eee} />
            <br></br>
            <BlueButton
                onClick={props.aaa}
                setIsActive={props.isActive}
            >상품 등록</BlueButton>
        </div>
    )
}