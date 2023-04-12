import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  return (
    <div>
      <h2>{data && data?.fetchBoard?.writer}님의 판매 상품입니다.</h2>
      <br></br>
      <br></br>
      <div>아이디 : {data && data?.fetchBoard?._id}</div>
      <br></br>
      <div>글쓴이 : {data && data?.fetchBoard?.writer}</div>
      <br></br>
      <div>제목 : {data && data?.fetchBoard?.title}</div>
      <br></br>
      <div>내용 : {data && data?.fetchBoard?.contents}</div>
    </div>
  );
}
