import { Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface PageTitleProps {
  children?: React.ReactNode;
}

export const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <Heading as="h2" color="#074f71">
      {children}
    </Heading>
  );
};
