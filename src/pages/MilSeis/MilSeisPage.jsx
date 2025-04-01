import {
  AbsoluteCenter,
  Flex,
  Heading,
  List,
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

function MilSeisPage() {
  const MilseisTheme = {
    bg: "#f5d1b7",
    bg_dark: "#c4a792",
    color: "#000",
  };

  const [pageView, setPageView] = useState("");
  const [milseisOrders, setMilseisOrders] = useState([]);

  const [params] = useSearchParams();

  const view = params.get("view");

  useEffect(() => {
    setPageView(view);
  }, [view]);

  const switchComponents = (view) => {
    switch (view) {
      case "Catalogo":
        return (
          <ProductsPage theme={MilseisTheme} products={productsJSON.products} />
        );

      case "Pedidos":
        return (
          <OrderList
            products={productsJSON.products}
            theme={MilseisTheme}
            barOrders={milseisOrders}
            barOrdersFunc={setMilseisOrders}
          />
        );

      default:
        return (
          <AbsoluteCenter>
            <Heading as="h1" fontSize="50px" textTransform="uppercase">
              Mil Seis 82 Bar
            </Heading>
            <Heading as="h2" fontSize="30px" textAlign="center">
              Horarios
            </Heading>
            <UnorderedList mt="1rem">
              <Text fontSize="20px" as="i">
                Lunes, Martes, Jueves, Viernes y Sabados
              </Text>
              <ListItem>9:00 - 13:00 / 16:00 - 20:00</ListItem>
              <Text fontSize="20px" as="i">
                Miercoles
              </Text>
              <ListItem>9:00 - 13:00</ListItem>
            </UnorderedList>
          </AbsoluteCenter>
        );
    }
  };

  return (
    <Flex>
      <NavBar theme={MilseisTheme} barQuery="Milseis82" />

      {switchComponents(pageView)}
    </Flex>
  );
}

export default MilSeisPage;
