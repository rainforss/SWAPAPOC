import { Box } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children?: ReactElement;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box minHeight="100vh" position="relative">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
