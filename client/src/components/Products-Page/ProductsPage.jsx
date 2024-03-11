import {
  Center,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function ProductsPage({ theme, products }) {
  const [shownProducts, setShownProducts] = useState([]);

  useEffect(() => {
    setShownProducts(products);
  }, []);

  const searchProduct = (value) => {
    if (value === "") {
      return setShownProducts(products);
    }
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setShownProducts(filteredProducts);
  };

  return (
    <Center w="100%" p="1.5rem 2rem" flexDirection="column">
      <Input
        width="100%"
        placeholder="Buscar producto..."
        variant="filled"
        onChange={(e) => searchProduct(e.target.value)}
      />

      <TableContainer
        mt="1rem"
        borderRadius="0.5rem 0.5rem 0 0"
        w="100%"
        h="85vh"
        overflowY="auto"
      >
        <Table>
          <Thead>
            <Tr bg={theme.bg}>
              <Th color={theme.color}>Nombre</Th>
              <Th color={theme.color}>Tipo</Th>
              <Th color={theme.color}>Detalle</Th>
              <Th color={theme.color} isNumeric>
                Precio
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {shownProducts.map(({ name, type, detail, price }) => (
              <Tr key={name}>
                <Td>{name}</Td>
                <Td>{type}</Td>
                <Td>{detail ? detail : "Ninguno"}</Td>
                <Td isNumeric>${price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
}

export default ProductsPage;
