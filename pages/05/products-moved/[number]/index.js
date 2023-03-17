import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
        _id
        seller
        name
        detail
        price
        }
    }
`

export default function StaticRoutingPage() {
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: String(router.query.number) }
    })

    console.log(data)

    return (
        <div>
            <div>{data && data?.fetchProduct?.seller}님의 판매 상품입니다.</div>
            <br></br>
            <div>판매자 : {data && data?.fetchProduct?.seller}</div>
            <div>상품명 : {data && data?.fetchProduct?.name}</div>
            <div>상품내용 : {data && data?.fetchProduct?.detail}</div>
            <div>상품가격 : {data && data?.fetchProduct?.price}</div>
        </div>
    )
}