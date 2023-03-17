import { useMutation, gql } from "@apollo/client"
import { useState } from 'react'



const CREATE_PRODUCT = gql`
        mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput){
    _id
    number
    message
  }
}
`

export default function GraphqlMutationPage() {
    const [seller, setSeller] = useState("")
    const [createProductInput, setCreateProductInput] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")
    const [create_Product] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await create_Product({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: price
                }
            }
        })
        console.log(result)
    }
    function onChangeSeller(event) {
        setSeller(event.target.value)
    }
    function onChangeName(event) {
        setName(event.target.value)
    }
    function onChangeDetail(event) {
        setDetail(event.target.value)
    }
    function onChangePrice(event) {
        setPrice(Number(event.target.value)) // 비밀번호에 숫자가 들어가야되기에 Number로 숫자화 해줘야된다.
    }

    return (

        <div>
            A : <input type="text" onChange={onChangeSeller} />
            <br></br>
            B : <input type="text" onChange={onChangeName} />
            <br></br>
            C : <input type="text" onChange={onChangeDetail} />
            <br></br>
            D : <input type="text" onChange={onChangePrice} />
            <br></br>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    )


}