import { useQuery, gql, useMutation } from "@apollo/client"
import { Fragment } from 'react'

const FETCH_PRODUCTS = gql`
    query{
        fetchProducts{
        _id
        seller
        name
        detail
        price
        }
    }
`

const DELETE_PRODUCT = gql`
mutation deleteProduct($productId: ID){
  deleteProduct(productId: $productId){
  message
  }
}
`

export default function StaticRoutingPage() {
    const { data } = useQuery(FETCH_PRODUCTS)
    const [deleteProduct] = useMutation(DELETE_PRODUCT)

    console.log(data)

    const onClickDelete = (event) => {
        deleteProduct({
            variables: { productId: event.target.id },
            refetchQueries: [{ query: FETCH_PRODUCTS }]
        })
    }

    return (
        <Fragment>
            {data?.fetchProducts.map((el, index) => (
                //특별한 이유가 없으면 프레그먼트로 감싸는게 효율적이다. <div>는 1개 더 그려야돼서 조금 느려짐
                //1. 프래그먼트라? <></> , <Fragment></Fragment>
                //2. 프래그먼트에 key 입력하는 방법 <Fragment key={1}></Fragment>
                <div key={el._id}>
                    {/* index는 게시글을 삭제할 때, 다음 게시들이 위로 올라오면서 기존의 index와 동일한 값을 갖게 됨, 유일하지 않음 */}
                    <span><input type="checkbox" /></span>
                    <span style={{ margin: "10px" }}>{el.seller}</span>
                    <span style={{ margin: "10px" }}>{el.name}</span>
                    <span style={{ margin: "10px" }}>{el.detail}</span>
                    <span style={{ margin: "10px" }}>{el.price}</span>
                    <span><button id={el._id} onClick={onClickDelete}>삭제</button></span>
                </div>
            ))}
        </Fragment>
    )
}