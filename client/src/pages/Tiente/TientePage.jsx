import {
  AbsoluteCenter,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/Nav-Bar/NavBar";
import { useSearchParams } from "react-router-dom";
import ProductsPage from "../../components/Products-Page/ProductsPage";
import productsJSON from "./products.json";
import OrderList from "../../components/Order-list/OrderList";

function TientePage() {
  const [pageView, setPageView] = useState("");
  const TienteTheme = {
    bg: "#7bd0c9",
    bg_dark: "#62a6a1",
    color: "#fff",
  };

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
          <OrderList products={productsJSON.products} theme={TienteTheme} />
        );

      default:
        return (
          <AbsoluteCenter>
            <Heading as="h1" fontSize="50px" textTransform="uppercase">
              Tiente Bar
            </Heading>
            <Heading as="h2" fontSize="30px" textAlign="center">
              Horarios
            </Heading>
            <UnorderedList mt="1rem">
              <Text fontSize="20px" as="i">
                Lunes a Domingos
              </Text>
              <ListItem>9:00 - 13:00 / 16:00 - 20:00</ListItem>
            </UnorderedList>
          </AbsoluteCenter>
        );
    }
  };

  return (
    <Flex>
      <NavBar theme={TienteTheme} barQuery="Tiente" />

      {switchComponents(pageView)}
    </Flex>
  );
}

export default TientePage;
