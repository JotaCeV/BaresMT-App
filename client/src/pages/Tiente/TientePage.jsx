import { Box, Flex, Heading } from "@chakra-ui/react";
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
        return <OrderList products={productsJSON.products} />;

      default:
        return <Heading>Tiente Bar</Heading>;
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
