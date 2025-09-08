import {
  AbsoluteCenter,
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavBar from "./components/Nav-Bar/NavBar";
import { useSearchParams } from "react-router-dom";
import ProductsPage from "./components/Products-Page/ProductsPage";
import productsJSON from "./utils/products.json";
import OrderList from "./components/Order-list/OrderList";
import lobbyImg from "./assets/tiente_outdoor.jpg"

function TientePage() {
  const TienteTheme = {
    bg: "#7bd0c9",
    bg_dark: "#62a6a1",
    color: "#fff",
  };
  const [pageView, setPageView] = useState("");
  const [tienteOrders, setTienteOrders] = useState([]);

  const [params] = useSearchParams();

  const view = params.get("view");

  useEffect(() => {
    setPageView(view);
  }, [view]);

  const switchComponents = (view) => {
    switch (view) {
      case "Catalogo":
        return (
          <ProductsPage theme={TienteTheme} products={productsJSON.products} />
        );

      case "Pedidos":
        return (
          <OrderList
            products={productsJSON.products}
            theme={TienteTheme}
            barOrders={tienteOrders}
            barOrdersFunc={setTienteOrders}
          />
        );

      default:
        return (
          <Box backgroundImage={`url(${lobbyImg})`} backgroundPosition="top" backgroundSize="cover" backgroundRepeat="no-repeat" w="100%" h="100vh">
            <Box h="40vh" w="60%" bg="rgba(255,255,255,0.9)" boxShadow="0px 0px 10px rgb(236, 236, 236)" backdropFilter="blur(8px)" mt="55vh" mx="auto" borderRadius="10px"  display="flex" flexDirection="column" alignItems="center" py="20px">
              <Heading as="h1" fontSize="50px" textTransform="uppercase">
                Tiente Bar
              </Heading>
              <Heading as="h2" fontSize="30px">
                Horarios
              </Heading>
              <UnorderedList mt="1rem">
                <Text fontSize="20px" as="i">
                  Lunes a Domingos
                </Text>
                <ListItem>9:00 - 13:00 / 16:00 - 20:00</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        );
    }
  };

  return (
    <Flex>
      <NavBar theme={TienteTheme}/>

      {switchComponents(pageView)}
    </Flex>
  );
}

export default TientePage;