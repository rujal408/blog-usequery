import React, { useState } from "react";
import { useQuery } from "react-query";
import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import axiosRequest from "helpers/axiosRequest";
import { posts } from "services/api";
import { PostInterface } from "interfaces/PostInterface";
import Post from "./Post";

const getPosts = async ({ queryKey }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { page }] = queryKey;
  const { data } = await axiosRequest.get(`${posts}?per_page=3&&page=${page}`);
  return data;
};

const PostList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useQuery(
    ["posts", { page }],
    getPosts,
    {
      keepPreviousData: true,
    }
  );

  const handlePrevious = () => {
    if (page === 1) {
      return;
    }
    setPage((p) => p - 1);
  };

  const handleNext = () => {
    setPage((p) => p + 1);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Heading>All Blog Posts {isFetching ? <Spinner /> : null}</Heading>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 12,
          background: "linear-gradient(45deg,#d3cce3,#e9e4f0)",
        }}
      >
        <button className="dot" onClick={handlePrevious} disabled={page === 1}>
          {"<"}
        </button>
        <SimpleGrid spacingX="10px" spacingY="20px" columns={3} padding={"8px"}>
          {data.map((x: PostInterface) => (
            <Post {...x} key={x.id} />
          ))}
        </SimpleGrid>
        <button className="dot" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PostList;
