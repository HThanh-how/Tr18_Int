"use client";
import { Box, Flex, Text, SimpleGrid, Image } from "@chakra-ui/react";
import getAllProduct from "../lib/useGetAllProduct";
import Product from "../component/Product";
export default function Home() {
  const [{ data, isLoading, isError }] = getAllProduct();
  console.log(data);
  
  return (
    <Box
      w={{ base: "90vw", md: "15vw" }}
      backgroundColor={"white"}
      h={{ base: "70vh", md: "25vw" }}
      rounded={"3xl"}
      boxShadow="2xl"
      p={4}
      overflow={"hidden"}
      zIndex={4}
    >
      <Box position="sticky" top={0} p={4}>
        <Box
          rounded={"100%"}
          w="300px"
          h="300px"
          bgColor="#f6c90e"
          position="absolute"
          zIndex={-15}
          top={"-200%"}
          left={"-50%"}
        ></Box>
        <Image
          zIndex={2}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          h="10px"
        />
        <Text mt={4} fontSize={"xl"} fontWeight={"800"} zIndex={2}>
          Our Product
        </Text>
      </Box>
      <Box
        overflow={"auto"}
        zIndex={8}
        h={"full"}
        pb={12}
        position="relative"
        css={`
          &::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        `}
      >
        {data?.map((shoe) => (
          <Product key={shoe.id} data={shoe} />
        ))}
      </Box>
    </Box>
  );
}
