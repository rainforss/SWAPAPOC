import { Flex, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface BlogTileProps {
  blog: any;
}

export const BlogTile: React.FC<BlogTileProps> = ({ blog }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(blog.fields.html, "text/html");
  const date = new Date(blog.sys.createdAt);
  const imgSrc = doc.body.querySelector("img")?.getAttribute("src");
  const passages = Array.from(doc.body.querySelectorAll("p")).filter(
    (p) =>
      p.textContent &&
      !p.textContent.includes("{{") &&
      p.textContent.length > 40
  );
  return (
    <Flex gridColumnGap="8" pt="4">
      <Image
        src={imgSrc!}
        fallbackSrc="https://via.placeholder.com/200"
        alt="Thumbnail"
        width="200px"
        height="200px"
        objectFit="contain"
      />
      <Flex direction="column" justify="flex-start" align="flex-start">
        <NextLink href={`/news/${blog.fields.title}`}>
          <Link fontSize="2.0rem" fontWeight="bold" mb="2">
            {blog.fields.title}
          </Link>
        </NextLink>

        <Text as="small">{date.toLocaleString()}</Text>
        {passages.map((p, index) => (
          <Text as="small" key={index}>
            {p.textContent}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
