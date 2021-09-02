import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { ReactNode } from "react";

interface WrapperProps {
  fullWidth?: boolean;
  children?: ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ fullWidth, children }) => {
  if (fullWidth) {
    return (
      <Box width="100%" py="10">
        {children}
      </Box>
    );
  }
  return (
    <Box width="70%" py="10" mx="auto">
      {children}
    </Box>
  );
};
