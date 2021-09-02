import { Box, Center, Flex, Link, Spinner, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { BlogTitle } from "../../components/BlogTitle";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { Wrapper } from "../../components/Wrapper";
import { useSingleBlog } from "../../hooks/useSingleBlog";
import NextLink from "next/link";

interface NewsPostProps {}

const NewsPost: NextPage<NewsPostProps> = ({}) => {
  const router = useRouter();
  const { newsId } = router.query;
  const { blog, isError, isLoading } = useSingleBlog(newsId as string);
  if (!blog) {
    return (
      <Layout>
        <Box minHeight="calc(100vh - 200px)">
          <Wrapper>
            {/* <PageTitle>{newsId}</PageTitle> */}
            <Center height="50vh">
              <Spinner color="#074f71" size="xl" />
            </Center>
          </Wrapper>
        </Box>
      </Layout>
    );
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(blog.items[0].fields.html, "text/html");
  const date = new Date(blog.items[0].sys.createdAt);
  const imgSrc = doc.body.querySelector("img")?.getAttribute("src");
  const passages = Array.from(doc.body.querySelectorAll("p")).filter(
    (p) =>
      p.textContent &&
      !p.textContent.includes("{{") &&
      !p.textContent.includes("View in browser")
  );
  return (
    <Layout>
      <Box minHeight="calc(100vh - 200px)">
        <Wrapper>
          {/* <PageTitle>{newsId}</PageTitle> */}
          <NextLink href="/news">
            <Link>{"< Back"}</Link>
          </NextLink>
          <BlogTitle title={newsId as string} imgSrc={imgSrc as string} />
          {isLoading ? (
            <Text>Loading</Text>
          ) : (
            <Flex direction="column" mt="8">
              <Text fontWeight="bold">
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
              {passages.map((p, index) => (
                <Text as="small" key={index}>
                  {p.textContent}
                </Text>
              ))}
            </Flex>
          )}
        </Wrapper>
      </Box>
    </Layout>
  );
};

export default NewsPost;
