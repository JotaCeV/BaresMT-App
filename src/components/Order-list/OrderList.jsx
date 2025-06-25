import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
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
  TableContainer,
  Tbody,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { PiPlusBold, PiMinusBold, PiTrashBold } from "react-icons/pi";
import React, { useState } from "react";
import OrderCards from "./Order-Cards/OrderCards";

function OrderList({ products, theme, barOrders, barOrdersFunc }) {
  const [deletingOrders, setDeletingOrders] = useState(false);
  const [orderProducts, setOrderProducts] = useState([]);
  const [orderSearch, setOrderSearch] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // MODAL FUNCTIONS

  const handleSearchedProducts = (value) => {
    if (value === "") {
      return setOrderSearch(products);
    }
    const filteredOrderSearch = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setOrderSearch(filteredOrderSearch);
  };

  const handleAddProduct = (productName, productPrice) => {
    const existingProduct = orderProducts.find((e)=> e.name === productName)
    if(existingProduct){
      const updatedProducts = orderProducts.map((e)=> {
        if(e.name === productName){
          return {
            ...e,
            quantity: e.quantity + 1
          }
        }
        return e
      })

      setOrderProducts(updatedProducts)
    } else {
      const newProduct = { name: productName, price: productPrice, quantity: 1 };
      setOrderProducts([...orderProducts, newProduct]);
    }
  };

  const handleDeleteProduct = (prodIndex) => {
    const filteredProducts = orderProducts.filter(
      (_, index) => index !== prodIndex
    );

    setOrderProducts(filteredProducts);
  };

  const calculateTotal = () => {
    let total = 0;
    orderProducts.forEach(({price, quantity}) => (total += (price * quantity)));

    return total;
  };

  const finishOrder = () => {
    const newOrder = { products: orderProducts, total: calculateTotal() };
    barOrdersFunc([...barOrders, newOrder]);
    onClose();
    setOrderProducts([]);
  };

  // CARD FUNCTIONS

  const handleDeleteOrder = (orderIndex) => {
    const deletedOrder = barOrders.filter((_, i) => i !== orderIndex);
    barOrdersFunc(deletedOrder);
  };

  return (
    <Flex w="100%" flexDirection="column" alignContent="center" p="1.5rem 2rem">
      <Heading
        textAlign="center"
        m="1.5rem"
        as="h1"
        size="2xl"
        textTransform="uppercase"
      >
        Lista de pedidos
      </Heading>

      <Stack direction="row" justify="center" w="100%" gap="1rem">
        <Button
          colorScheme="green"
          size="lg"
          onClick={onOpen}
          variant="outline"
        >
          Agregar pedido
        </Button>
        <Button
          colorScheme="red"
          size="lg"
          variant="outline"
          onClick={() => setDeletingOrders(!deletingOrders)}
        >
          Eliminar pedido
        </Button>
      </Stack>

      <Grid templateColumns="repeat(5, 1fr)" gap={3} m="1rem 0">
        {barOrders?.map((e, i) => (
          <OrderCards
            key={i}
            order={e}
            buttonFunc={() => handleDeleteOrder(i)}
            deletingState={!deletingOrders}
          />
        ))}
      </Grid>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign="center"
            fontSize="30px"
            bg={theme.bg}
            borderRadius="0.3rem 0.3rem 0 0"
            color={theme.color}
          >
            Crear Orden
          </ModalHeader>
          <ModalCloseButton />

          <Divider colorScheme="blackAlpha" />

          <ModalBody display="flex" gap="1rem">
            <Box w="55%">
              <Input
                placeholder="Buscar producto..."
                onChange={(e) => handleSearchedProducts(e.target.value)}
                w="100%"
                focusBorderColor={theme.bg}
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
                              variant="outline"
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

            <Box w="45%">
              <TableContainer h="55vh" overflowY="auto">
                <Table variant="striped">
                  <Tbody>
                    {orderProducts?.map(({ name, price, quantity }, index) => (
                      <Tr key={index}>
                        <Td>{name}</Td>
                        <Td>{price}</Td>
                        <Td>{quantity}</Td>
                        <Td>
                          <IconButton
                            icon={<PiTrashBold />}
                            colorScheme="red"
                            onClick={() => handleDeleteProduct(index)}
                          />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
              <Box textAlign="center">
                <Heading m="0.5rem">{`Total = $ ${calculateTotal()}`}</Heading>
                <Button
                  m="0.5rem"
                  colorScheme="green"
                  variant="outline"
                  onClick={() => finishOrder()}
                >
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
