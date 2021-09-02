import { Center, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { SocialMedia } from "./SocialMedia";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Flex
      position="relative"
      direction="column"
      justify="center"
      height="100px"
      boxShadow="0 -2px 4px 0 rgb(0 0 0 / 25%)"
    >
      <Flex justify="center" gridColumnGap="12" fontSize="0.8rem">
        <Text as="small">1450 Empire Central, Suite 737, Dallas, TX 75247</Text>
        <Text as="small">Media Inquiries 214-722-4240 </Text>
        <Text as="small">Main Office 800-969-7972</Text>
        <Text as="small">Help Desk 877-862-0094</Text>
      </Flex>
      <Center fontSize="0.8rem">
        <NextLink href="#">
          <Link as="small" textDecor="underline">
            Terms of Use
          </Link>
        </NextLink>
        <Text as="small" lineHeight="0">
          &nbsp;|&nbsp;
        </Text>

        <NextLink href="#">
          <Link as="small" textDecor="underline">
            Privacy Policy
          </Link>
        </NextLink>
        <Text as="small" lineHeight="0">
          &nbsp;|&nbsp;
        </Text>
        <NextLink href="#">
          <Text as="small">&copy;2021-SWAPA</Text>
        </NextLink>
      </Center>
      <SocialMedia position="absolute" right="20px" top="32px" />
    </Flex>
  );
};
