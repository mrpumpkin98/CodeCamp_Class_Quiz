import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingPage(): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const onClickSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`/15-1/${event.target.id}`);
  };

  const [startPage, setStartPage] = useState(1);
  const [pageColor, setPageColor] = useState();

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
    setPageColor(Number(event.currentTarget.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }} id={el._id} onClick={onClickSubmit}>
            {el._id}
          </span>
          <span style={{ margin: "10px" }} id={el._id} onClick={onClickSubmit}>
            {el.title}
          </span>
          <span style={{ margin: "10px" }} id={el._id} onClick={onClickSubmit}>
            {el.writer}
          </span>
        </div>
      ))}
      <span onClick={onClickPrevPage}>👈</span>
      {new Array(10).fill("철수").map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={
                pageColor === index + startPage
                  ? { color: "gold" }
                  : { color: "black" }
              }
            >
              {"  "}
              {index + startPage}
              {"  "}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>👉</span>
    </div>
  );
}
