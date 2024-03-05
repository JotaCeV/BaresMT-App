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
import React from "react";

function ProductsPage({ theme, products }) {
  return (
    <Center w="100%" p="1.5rem 2rem" flexDirection="column">
      <Input width="100%" placeholder="Buscar producto..." variant="filled" />

      <TableContainer mt="1rem" borderRadius="0.5rem 0.5rem 0 0" w="100%">
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
            {products.map(({ name, type, detail, price }) => (
              <Tr>
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
