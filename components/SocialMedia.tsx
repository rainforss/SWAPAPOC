import { Center, ChakraProps, Icon } from "@chakra-ui/react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import React from "react";

interface SocialMediaProps extends ChakraProps {}

export const SocialMedia: React.FC<SocialMediaProps> = ({ ...chakraProps }) => {
  return (
    <Center {...chakraProps} gridColumnGap="2">
      <Icon
        fontSize="2rem"
        as={FaFacebookSquare}
        color="#3b5998"
        cursor="pointer"
      />
      <Icon
        fontSize="2rem"
        as={FaTwitterSquare}
        color="#1DA1F2"
        cursor="pointer"
      />
    </Center>
  );
};
