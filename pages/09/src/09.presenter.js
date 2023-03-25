import { BlueButton } from "./09.styles"

export default function UI(props) {
    return (
        <div>
            판매자 : <input type="text" onChange={props.onChangeSeller} />
            <br></br>
            상품명 : <input type="text" onChange={props.onChangeName} />
            <br></br>
            상품내용 : <input type="text" onChange={props.onChangeDetail} />
            <br></br>
            상품가격 : <input type="text" onChange={props.onChangePrice} />
            <br></br>
            <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
                {props.isEdit ? "수정" : "등록"}
            </BlueButton>
        </div>
    )
}