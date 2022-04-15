import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  Image,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function SimpleCard() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#F8F7F2", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Center my={{ base: "30px", lg: "50px" }}>
            <NextLink href="/overview" passHref>
              <Image
                src="https://res.cloudinary.com/dxjaruq2p/image/upload/v1649998648/Tecuido/inicio_zytldn.png"
                alt="te cuido logo"
              />
            </NextLink>
          </Center>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          align="center"
        >
          <Stack spacing={4} align="center">
            <FormControl id="bienvenida">
              <FormLabel fontSize={"2xl"} justify={"center"}>
                Gracias por utilizar Te cuido
              </FormLabel>
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
