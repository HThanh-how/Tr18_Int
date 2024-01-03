"use client";
import { Box, Flex, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";
import getAllProduct from "../lib/useGetAllProduct";
import Product from "../component/Product";

const data = {
  id: 1,
  image:
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
  name: "Nike Air Zoom Pegasus 36",
  description:
    "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
  price: 108.97,
  color: "#e1e7ed",
};

export default function Home() {
  //   const [{ data, isLoading, isError }] = getAllProduct();

  return (
    <>
      <Flex alignItems="start" py={5}>
        <Box
          w="90px"
          h="90px"
          mr="34px"
          rounded="full"
          flexShrink={0}
          backgroundColor={data.color}
        >
          <Box w="130px">
            <Image
              w="130px"
              style={{
                transform: "rotate(-30deg) translateY(-30px)",
                filter: "drop-shadow(0 30px 20px rgba(0,0,0,.2))",
              }}
              src={data.image}
            />
          </Box>
        </Box>
        <Box w="full">
          <Box fontWeight={"800"}>{data.name}</Box>
          <Box fontWeight={"800"} fontSize={"xl"}>
            ${data.price}
          </Box>
          <Flex justifyContent="space-between">
            <Flex alignItems="center" mt={2} justifyContent="space-between">
              <Button rounded={"full"}>-</Button>
              <Text mx={4} fontWeight={"800"}>
                12
              </Text>
              <Button rounded={"full"}>+</Button>
              <Button
                ml={4}
                bgColor={"#f6c90e"}
                alignSelf={"end"}
                rounded={"full"}
              >
                <Image src="/trash.png" w={3} h={3} />
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
