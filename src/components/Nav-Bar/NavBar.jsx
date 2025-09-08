import { Button, Center, Flex, Spacer, Stack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import {
  PiBookOpenText,
  PiClipboardText,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import tienteLogo from "../../assets/tiente_logo.png"

function NavBar({ theme }) {
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
      position="sticky"
      top="0"
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
        w={isOpen ? "210px" : "0px"}
        h={isOpen ? "210px" : "0px"}
        transition="width 0.4s ease-in, height 0.4s ease-in"
        onClick={() => navigate(`/`)}
      >
        <Image src={tienteLogo} alt="Tiente Logo" opacity={isOpen ? 1 : 0} transition="opacity 0.3s ease-in-out"/>
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
          onClick={() => navigate(`/?view=Catalogo`)}
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
          onClick={() => navigate(`/?view=Pedidos`)}
        >
          {isOpen ? "Lista de Pedidos" : ""}
        </Button>
      </Stack>
      <Spacer />
    </Flex>
  );
}

export default NavBar;
