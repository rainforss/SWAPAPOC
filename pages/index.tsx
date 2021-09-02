import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { CarouselTile } from "../components/CarouselTile";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box height="calc(100vh - 200px)">
        <Wrapper>
          <CarouselTile />
        </Wrapper>
      </Box>
    </Layout>
  );
};

export default Home;
