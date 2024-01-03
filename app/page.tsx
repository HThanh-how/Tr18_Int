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

      _before={{
        content: '""',
        display: "block",
        position: "fixed",
        width: "300%",
        height: "100%",
        top: "50%",
        left: "50%",
        borderRadius: "full",
        transform: "translateX(-50%) skewY(-8deg)",
        bgColor: "#f6c90e",
        zIndex: -1,
        animation: "wave 8s ease-in-out infinite alternate",
      }}

      // background={`linear-gradient(to bottom, #ffffff00, #ffffff),
      //              radial-gradient(circle, #00beb670, transparent)`}
      // backgroundBlendMode="normal, screen"
      position="relative"
    >

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      <ProductList/>
       <CartList/>
      </SimpleGrid>
    </Flex></>
  );
}
