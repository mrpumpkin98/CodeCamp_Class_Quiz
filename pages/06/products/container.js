import { useMutation, gql } from "@apollo/client"
import { useState } from 'react'
import { useRouter } from "next/router"
import { CREATE_PRODUCT } from './queries'
import UI from "./presenter"


export default function ProductsPage() {

    const router = useRouter()

    const [seller, setSeller] = useState("")
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
        router.push(`/06/productsMain/productResult/${result.data.createProduct._id}`)

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
            <UI
                aaa={onClickSubmit}
                bbb={onChangeSeller}
                ccc={onChangeName}
                ddd={onChangeDetail}
                eee={onChangePrice}
            />
        </div>
    )

}

