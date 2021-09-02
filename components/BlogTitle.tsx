import { Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

interface BlogTitleProps {
  title: string;
  imgSrc?: string;
}

export const BlogTitle: React.FC<BlogTitleProps> = ({ title, imgSrc }) => {
  return (
    <Flex justify="flex-start" align="center" pt="8">
      <Image
        src={imgSrc}
        fallbackSrc="https://via.placeholder.com/300x150"
        alt="Thumbnail"
        width="300px"
        height="150px"
        objectFit="cover"
        borderLeft="4px solid #074f71"
      />
      <Center w="calc(100% - 300px)" height="150px" bg="#e6e7e8" px="6">
        <Heading
          as="h2"
          fontSize="2.5rem"
          color="#074f71"
          w="100%"
          textAlign="left"
        >
          {title}
        </Heading>
      </Center>
    </Flex>
  );
};
