import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import React, { useState } from "react";

function OrderList({ products }) {
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [orderProducts, setOrderProducts] = useState([]);
  const [orderSearch, setOrderSearch] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearchedProducts = (value) => {
    if (value === "") {
      return setOrderSearch([]);
    }
    const filteredOrderSearch = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setOrderSearch(filteredOrderSearch);
  };

  const handleAddProduct = (productName, productPrice) => {
    const newProduct = { name: productName, price: productPrice };
    setOrderProducts([...orderProducts, newProduct]);
  };

  const handleDeleteProduct = (prodIndex) => {
    const filteredProducts = orderProducts.filter(
      (e, index) => index !== prodIndex
    );

    setOrderProducts(filteredProducts);
  };

  const calculateTotal = () => {
    let total = 0;
    orderProducts.forEach((e) => (total += e.price));

    return total;
  };

  return (
    <Flex w="100%" flexDirection="column" alignContent="center" p="1.5rem 2rem">
      <Heading textAlign="center" m="1.5rem" as="h1" size="2xl">
        Lista de pedidos
      </Heading>

      <Stack direction="row" justify="center" w="100%" gap="1rem">
        <Button colorScheme="green" size="lg" onClick={onOpen}>
          Agregar pedido
        </Button>
        <Button colorScheme="red" size="lg">
          Eliminar pedido
        </Button>
      </Stack>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" fontSize="30px">
            Crear Orden
          </ModalHeader>
          <ModalCloseButton />

          <Divider colorScheme="blackAlpha" />

          <ModalBody display="flex" gap="1rem">
            <Box w="60%">
              <Input
                placeholder="Buscar producto..."
                onChange={(e) => handleSearchedProducts(e.target.value)}
                w="100%"
              />
              {orderSearch ? (
                <TableContainer overflowY="auto" h="65vh">
                  <Table>
                    <Tbody>
                      {orderSearch?.map(({ name, type, price }) => (
                        <Tr key={name}>
                          <Td>{name}</Td>
                          <Td>{type}</Td>
                          <Td>${price}</Td>
                          <Td isNumeric>
                            <IconButton
                              icon={<PiPlusBold />}
                              colorScheme="green"
                              onClick={() => handleAddProduct(name, price)}
                            />
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              ) : (
                <></>
              )}
            </Box>

            <Divider orientation="vertical" />

            <Box w="35%">
              <TableContainer h="55vh" overflowY="auto">
                <Table variant="striped">
                  <Tbody>
                    {orderProducts?.map(({ name, price }, index) => (
                      <Tr key={index}>
                        <Td>{name}</Td>
                        <Td>{price}</Td>
                        <Td>
                          <IconButton
                            icon={<PiMinusBold />}
                            colorScheme="red"
                            onClick={() => handleDeleteProduct(index)}
                          />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
              <Box h="5vh" textAlign="center">
                <Heading m="0.5rem">{`Total = $ ${calculateTotal()}`}</Heading>
                <Button m="0.5rem" colorScheme="green" variant="outline">
                  Finalizar Pedido
                </Button>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default OrderList;
