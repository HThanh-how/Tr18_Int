import { Button, Box } from "@chakra-ui/react";



const data ={
    color: "yellow",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/zoom-fly-3-premium-mens-running-shoe-XhzpPH-removebg-preview.png",
    name : "Nike Newton",
    description: "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
    price: 200,
}

export default function SingleShoes() {


  return (
<Box py={10}>
  <Box
    backgroundColor={data.color}
    className="item-image"
    style={{ backgroundColor: data.color }}
  >
    <img src={data.image} className="" />
  </Box>
  <Box mt={26} mb={5} fontWeight="bold" fontSize="xl">
    {data.name}
  </Box>
  <Box mb={5} fontSize="sm" color="gray.500" lineHeight={1.8}>
    {data.description}
  </Box>
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Box fontWeight="bold" fontSize="lg">${data.price}</Box>
    <Button bgColor={"yellow.400"} rounded={"full"}>Add to cart</Button>
  </Box>
</Box>

  );
}