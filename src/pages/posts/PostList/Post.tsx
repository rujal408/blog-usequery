import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import parse from "html-react-parser";
import { PostInterface } from "interfaces/PostInterface";
import { Link } from "react-router-dom";

const Post: React.FC<PostInterface> = (props): JSX.Element => {
  const { title, content, id } = props;
  return (
    <Box maxW={"100%"} className="box">
      <Heading padding={"10px"} minHeight={90} isTruncated>
        {title.rendered}
      </Heading>
      <Box
        p={1}
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
        isTruncated
        className="content"
      >
        {parse(content.rendered.split(" ").slice(0, 70).join(" "))}
        <Link to={"/" + id} className="read">
          {" "}
          Read More
        </Link>
      </Box>
    </Box>
  );
};

export default Post;
