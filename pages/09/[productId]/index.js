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
    console.log(router.query)

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query.productId }
    })
    console.log(data)

    console.log(router)
    const onClickUpdate = () => {
        router.push(`/09/${router.query.productId}/edit`)
    }

    const onClickSubmit = () => {
        router.push(`/09/new`)
    }


    return (
        <div>
            <div>{data?.fetchProduct?.seller}님의 게시글로 이동이 완료되었습니다.</div>
            <div>이름: {data?.fetchProduct?.seller}</div>
            <div>물건 이름: {data?.fetchProduct?.name}</div>
            <div>물건 살명: {data?.fetchProduct?.detail}</div>
            <div>가격: {data?.fetchProduct?.price}</div>
            <button onClick={onClickUpdate}>수정하러가기</button>
            <button onClick={onClickSubmit}>등록하러가기</button>
        </div>
    )
}