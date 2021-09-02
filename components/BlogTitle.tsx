import { Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

interface BlogTitleProps {
  title: string;
  imgSrc?: string;
}

export const BlogTitle: React.FC<BlogTitleProps> = ({ title, imgSrc }) => {
  return (
    <Flex justify="center" align="center" pt="8">
      <Image
        src={imgSrc}
        fallbackSrc="https://via.placeholder.com/300x150"
        alt="Thumbnail"
        width="300px"
        height="150px"
        objectFit="contain"
        borderLeft="4px solid #074f71"
      />
      <Center w="600px" height="150px" bg="#e6e7e8" pl="6">
        <Heading as="h2" fontSize="2.7rem" color="#074f71">
          {title}
        </Heading>
      </Center>
    </Flex>
  );
};
