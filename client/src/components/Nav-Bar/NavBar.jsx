import { Button, Center, Flex, Heading, Spacer, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import {
  PiBookOpenText,
  PiClipboardText,
  PiArrowsClockwise,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function NavBar({ theme, barQuery }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Flex
      w={isOpen ? "280px" : "60px"}
      h="100vh"
      bg={theme.bg}
      flexDirection="column"
      alignItems="center"
      p="5px 0px"
      transition="all 0.5s ease-in-out"
      gap={4}
    >
      <Button
        onClick={() => setIsOpen(!isOpen)}
        bg="transparent"
        color={theme.color}
        fontSize="20px"
        transition="background 0.3s ease"
        _hover={{
          bg: theme.bg_dark,
        }}
      >
        {isOpen ? <IoMdClose /> : <IoIosArrowForward />}
      </Button>
      <Center
        bg="#fff"
        w={isOpen ? "210px" : "0px"}
        h="210px"
        transition="opacity 0.3s ease-in, width 0.3s ease-in"
        opacity={isOpen ? 1 : 0}
        onClick={() => navigate(`/${barQuery}`)}
      >
        <Heading>Imagen</Heading>
      </Center>
      <Stack w="100%" direction="column" alignItems="center" spacing={4}>
        <Button
          w="90%"
          fontSize="30px"
          bg="transparent"
          _hover={{
            bg: theme.bg_dark,
          }}
          color={theme.color}
          leftIcon={<PiBookOpenText />}
          onClick={() => navigate(`/${barQuery}?view=Catalogo`)}
        >
          {isOpen ? "Catalogo" : ""}
        </Button>

        <Button
          w="90%"
          fontSize="25px"
          bg="transparent"
          _hover={{
            bg: theme.bg_dark,
          }}
          color={theme.color}
          leftIcon={<PiClipboardText fontSize="30px" />}
          onClick={() => navigate(`/${barQuery}?view=Pedidos`)}
        >
          {isOpen ? "Lista de Pedidos" : ""}
        </Button>
      </Stack>
      <Spacer />
      {isOpen ? (
        <Button
          w="95%"
          h="50px"
          color={theme.color}
          bg="transparent"
          fontSize="30px"
          _hover={{
            bg: theme.bg_dark,
          }}
          leftIcon={<PiArrowsClockwise />}
          onClick={() => navigate("/")}
        >
          CAMBIAR BAR
        </Button>
      ) : (
        <></>
      )}
    </Flex>
  );
}

export default NavBar;
