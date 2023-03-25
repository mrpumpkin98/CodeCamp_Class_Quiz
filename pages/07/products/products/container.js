import { useMutation, gql } from "@apollo/client"
import { useState } from 'react'
import { useRouter } from "next/router"
import { CREATE_PRODUCT } from './queries'
import UI from "./presenter"


export default function ProductsPage(props) {
    const [isActive, setIsActive] = useState(false)

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
        router.push(`/07/products/productsMain/productResult/${result.data.createProduct._id}`)

    }
    function onChangeSeller(event) {
        setSeller(event.target.value)
        if (name && detail && price && event.target.value) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    function onChangeName(event) {
        setName(event.target.value)
        if (event.target.value && detail && price && seller) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    function onChangeDetail(event) {
        setDetail(event.target.value)
        if (name && event.target.value && price && seller) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    function onChangePrice(event) {
        setPrice(Number(event.target.value))
        // 비밀번호에 숫자가 들어가야되기에 Number로 숫자화 해줘야된다.
        if (name && detail && (Number(event.target.value)) && seller) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    return (
        <div>
            <UI
                aaa={onClickSubmit}
                bbb={onChangeSeller}
                ccc={onChangeName}
                ddd={onChangeDetail}
                eee={onChangePrice}
                isActive={isActive}
            />
        </div>
    )

}

