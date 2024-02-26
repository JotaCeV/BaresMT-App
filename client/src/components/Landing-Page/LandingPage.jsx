import { Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Flex>
      <Center bg="#7bd0c9" w="50%" h="100vh">
        <Heading
          transition="fontSize 0.3s ease-in-out"
          _hover={{ fontSize: "5xl" }}
          userSelect="none"
          onClick={() => navigate("/Tiente")}
        >
          Tiente
        </Heading>
      </Center>
      <Center bg="#f5d1b7" w="50%" h="100vh">
        <Heading
          transition="fontSize 0.3s ease-in-out"
          _hover={{ fontSize: "5xl" }}
          userSelect="none"
          onClick={() => navigate("/Milseis")}
        >
          MilSeis
        </Heading>
      </Center>
    </Flex>
  );
}

export default LandingPage;
