import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import HTMLReactParser from "html-react-parser";
import { useQuery } from "react-query";
import axiosRequest from "helpers/axiosRequest";
import { posts } from "services/api";

const getPostDetail = async (id: string) => {
  const { data } = await axiosRequest.get(posts + "/" + id);
  return data;
};

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const postID = typeof id === "string" ? id : "";
  const { data, isLoading } = useQuery(["postDetail", postID], () =>
    getPostDetail(postID)
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box padding={5}>
      <Heading>{data.title.rendered}</Heading>
      <Box>{HTMLReactParser(data.content.rendered)}</Box>
    </Box>
  );
};

export default PostDetail;
