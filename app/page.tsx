import { Box, Flex, Text, SimpleGrid, Image } from "@chakra-ui/react";
import Product from "../component/Product";
import ProductList from "../component/ProductList";
import CartList from "@/component/CartList";
export default function Home() {
  return (
    <><Flex
      height={{ base: "", md: "100vh" }}
      justifyContent="center"
      alignItems="center"
      py={8}
      background={`linear-gradient(to bottom, #ffffff00, #ffffff),
                   radial-gradient(circle, #00beb670, transparent)`}
      backgroundBlendMode="normal, screen"
      position="relative"
    >

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      <ProductList/>
       <CartList/>
      </SimpleGrid>
    </Flex></>
  );
}
