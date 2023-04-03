import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
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

export const AAA = styled.div`
  border: 1px solid red;
  height: 500px;
`;

export default function StaticRoutingPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div style={{ width: "300px", height: "500px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoards.map((el: any) => (
          <div key={el._id}>
            제목 : <span style={{ margin: "10px" }}>{el.title}</span>
            <br></br>
            저자 : <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        )) ?? <div></div>}
      </InfiniteScroll>
    </div>
  );
}
