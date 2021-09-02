import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NavLink from "next/link";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { FiLogIn } from "react-icons/fi";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      height="100px"
      px="8"
      boxShadow="0 2px 4px 0 rgb(0 0 0 / 25%)"
    >
      <Flex
        justify="space-evenly"
        gridColumnGap="8"
        align="center"
        fontSize="0.9rem"
        fontWeight="bold"
      >
        <NavLink href="/">
          <Image
            src="/swapalogo.png"
            alt="SWAPA Logo"
            width="200px"
            objectFit="contain"
            cursor="pointer"
          />
        </NavLink>
        <NavLink href="/">
          <Link>About Us</Link>
        </NavLink>
        <NavLink href="/">
          <Link>Advocacy</Link>
        </NavLink>
        <NavLink href="/news">
          <Link>News</Link>
        </NavLink>
        <NavLink href="/">
          <Link>Family</Link>
        </NavLink>
        <NavLink href="/">
          <Link>Resources</Link>
        </NavLink>
      </Flex>
      <Flex justify="space-evenly" gridColumnGap="4">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" width="200px" lineHeight="0" />
        </InputGroup>
        <Button
          leftIcon={<FiLogIn fontSize="1rem" />}
          colorScheme="blue"
          px="6"
          textAlign="center"
          my="auto"
          lineHeight="0"
          fontSize="0.8rem"
        >
          LOGIN
        </Button>
      </Flex>
    </Flex>
  );
};
