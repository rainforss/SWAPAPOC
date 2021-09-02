import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box height="calc(100vh - 200px)">
        <Text>TEST</Text>
      </Box>
    </Layout>
  );
};

export default Home;
