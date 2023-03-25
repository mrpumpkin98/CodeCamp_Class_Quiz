import { BlueText } from "./styles"


export default function UI(props) {


    return (
        <div>
            <BlueText>{props.aaa && props.aaa?.fetchProduct?.seller}님의 판매 상품입니다.</BlueText>
            <br></br>
            <div>판매자 : {props.aaa && props.aaa?.fetchProduct?.seller}</div>
            <div>상품명 : {props.aaa && props.aaa?.fetchProduct?.name}</div>
            <div>상품내용 : {props.aaa && props.aaa?.fetchProduct?.detail}</div>
            <div>상품가격 : {props.aaa && props.aaa?.fetchProduct?.price}</div>
        </div>
    )
}       