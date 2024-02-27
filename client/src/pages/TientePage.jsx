import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/Nav-Bar/NavBar";

function TientePage() {
  const TienteTheme = {
    bg: "#7bd0c9",
    bg_dark: "#62a6a1",
    color: "#fff",
  };

  return (
    <Flex>
      <NavBar theme={TienteTheme} />
      <Box>
        <Heading>Tiente page</Heading>
      </Box>
    </Flex>
  );
}

export default TientePage;
