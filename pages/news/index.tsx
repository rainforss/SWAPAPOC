import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Blogs } from "../../components/Blogs";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { Wrapper } from "../../components/Wrapper";
import { useBlogs } from "../../hooks/useBlogs";

const News: NextPage = () => {
  const { blogs, isError, isLoading } = useBlogs();

  return (
    <Layout>
      <Box minHeight="calc(100vh - 200px)">
        <Wrapper>
          <PageTitle>News</PageTitle>
          {isLoading ? <Text>Loading</Text> : <Blogs blogs={blogs} />}
        </Wrapper>
      </Box>
    </Layout>
  );
};

export default News;
