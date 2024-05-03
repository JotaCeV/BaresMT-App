import { Flex, GridItem, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

function OrderCards({ order }) {
  return (
    <GridItem border="2px solid black" borderRadius="0.4rem">
      <UnorderedList h="20vh" p="0.5rem 0 0.5rem 2rem" overflowY="auto">
        {order.products?.map((e) => (
          <ListItem>{e.name}</ListItem>
        ))}
      </UnorderedList>
      <Flex
        justifyContent="center"
        alignItems="center"
        mt="1rem"
        p="0.5rem"
        as="b"
        bg="#2ecc71"
        color="#fff"
        fontSize="1.5rem"
      >
        ${order.total}
      </Flex>
    </GridItem>
  );
}

export default OrderCards;
