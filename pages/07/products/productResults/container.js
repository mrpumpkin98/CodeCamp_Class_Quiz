import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from 'react'
import { FETCH_PRODUCT } from './queries'
import UI from "./presenter"

export default function StaticRoutingPage() {

    const router = useRouter()

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: String(router.query.number) }
    })

    return (
        <div>
            <UI
                aaa={data}
            />
        </div>
    )
}