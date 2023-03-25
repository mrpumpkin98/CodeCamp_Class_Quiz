import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from 'react'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './09.queries'
import UI from "./09.presenter"


export default function ProductsPage(props) {

    const router = useRouter()

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")
    const [create_Product] = useMutation(CREATE_PRODUCT)
    const [update_Product] = useMutation(UPDATE_PRODUCT)


    const onClickSubmit = async () => {
        const result = await create_Product({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: Number(price)
                }
            }
        })
        router.push(`/09/${result.data.createProduct._id}`)

    }

    const onClickUpdate = async () => {
        console.log(router.query)
        const result = await update_Product({
            variables: {
                productId: router.query.productId,
                updateProductInput: {
                    name: name,
                    detail: detail,
                    price: Number(price)
                }
            }
        })
        // router.push(`/09/${result.data.updateProduct._id}`)
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
        setPrice(Number(event.target.value))
    }

    return (
        <div>
            <UI
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeSeller={onChangeSeller}
                onChangeName={onChangeName}
                onChangeDetail={onChangeDetail}
                onChangePrice={onChangePrice}
                isEdit={props.isEdit}
            />
        </div>
    )

}

