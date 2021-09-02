import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselTileProps {}

export const CarouselTile: React.FC<CarouselTileProps> = ({}) => {
  return (
    <Flex align="stretch" pt="16">
      <Flex
        direction="column"
        justifyContent="center"
        align="flex-start"
        gridRowGap="4"
        bg="#e6e7e8"
        p="8"
      >
        <Heading as="h1" fontSize="2.8rem" color="#074f71">
          Southwest Airlines Pilots Association
        </Heading>
        <Heading as="h5" fontSize="1.5rem">
          43 Years of Services to Our Pilots
        </Heading>
        <Text as="small">
          {
            "Since 1978, the Southwest Airlines Pilots Association (SWAPA) has been the sole bargaining unit for the almost 10,000 Pilots of Southwest Airlines. Southwest Pilots are leaders in aviation industry productivity and are the world's leading experts on flying the Boeing-737."
          }
        </Text>
      </Flex>
      <Box height="300px">
        <Carousel width="650px" infiniteLoop autoPlay showIndicators={false}>
          <Box>
            <Image
              height="300px"
              src="/swapa_g1.jpg"
              alt="Our Pilots"
              objectFit="cover"
            />
          </Box>
          <Box>
            <Image
              height="300px"
              src="/swapa_g2.jpg"
              alt="Southwest Airlines"
              objectFit="cover"
            />
          </Box>
          <Box>
            <Image
              height="300px"
              src="/swapa_g3.jpg"
              alt="Flight Cabin"
              objectFit="cover"
            />
          </Box>
        </Carousel>
      </Box>
    </Flex>
  );
};
