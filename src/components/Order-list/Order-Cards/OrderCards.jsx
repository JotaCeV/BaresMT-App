import {
  Button,
  Flex,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { PiTrash } from "react-icons/pi";
import React from "react";

function OrderCards({ order, buttonFunc, deletingState }) {
  return (
    <GridItem border="2px solid black" borderRadius="0.4rem">
      <UnorderedList h="20vh" p="0.5rem 0 0.5rem 2rem" overflowY="auto">
        {order.products?.map((e, i) => (
          <ListItem key={i}>{e.name}</ListItem>
        ))}
      </UnorderedList>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mt="1rem"
        p="0.5rem"
        bg="#dfe6e9"
        fontSize="1.5rem"
        borderBottomRadius="0.2rem"
      >
        <Text color="#2ecc71" as="b" w="100%" textAlign="center">
          ${order.total}
        </Text>
        <Button
          colorScheme="red"
          fontSize="xl"
          onClick={buttonFunc}
          isDisabled={deletingState}
        >
          <PiTrash />
        </Button>
      </Flex>
    </GridItem>
  );
}

export default OrderCards;
