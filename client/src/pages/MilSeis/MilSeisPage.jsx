import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/Nav-Bar/NavBar";
import { useSearchParams } from "react-router-dom";
import ProductsPage from "../../components/Products-Page/ProductsPage";
import productsJSON from "./products.json";

function MilSeisPage() {
  const [pageView, setPageView] = useState("");
  const MilseisTheme = {
    bg: "#f5d1b7",
    bg_dark: "#c4a792",
    color: "#000",
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
          <ProductsPage theme={MilseisTheme} products={productsJSON.products} />
        );

      default:
        return <Heading>Milseis82 Bar</Heading>;
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
