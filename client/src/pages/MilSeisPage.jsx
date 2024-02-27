import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/Nav-Bar/NavBar";

function MilSeisPage() {
  const MilseisTheme = {
    bg: "#f5d1b7",
    bg_dark: "#c4a792",
    color: "#000",
  };
  return (
    <Flex>
      <NavBar theme={MilseisTheme} />
      <Box>
        <Heading>MilSeis82 page</Heading>
      </Box>
    </Flex>
  );
}

export default MilSeisPage;
