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
  CheckboxGroup,
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
          <Heading fontSize={"3xl"}>Ambiental</Heading>
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
                ¿Cuál es tu problema?
              </FormLabel>
            </FormControl>
            <CheckboxGroup
              colorScheme="green"
              defaultValue={["naruto", "kakashi"]}
            >
              <Stack spacing={[1, 5]} direction={["column"]}>
                <Checkbox value="Ruidos Molestos">Ruidos Molestos</Checkbox>
                <Checkbox value="Malos Olores">Malos Olores</Checkbox>
                <Checkbox value="Insectos">Insectos</Checkbox>
                <Checkbox value="Agua de Red">Agua de Red</Checkbox>
                <Checkbox value="Polvo">Polvo</Checkbox>
                <Checkbox value="Animales Sueltos">Animales Sueltos</Checkbox>
                <Checkbox value="Humo/Ceniza">Humo/Ceniza</Checkbox>
                <Checkbox value="Basura/Escombros">Basura/Escombros</Checkbox>
                <Checkbox value="Otros">Otros</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Stack>
        </Box>
        <Stack spacing={6} direction="row" align="center">
          <NextLink href="/problema" passHref>
            <Button
              px={38}
              bg={"#3ABEEC"}
              color={"white"}
              _hover={{
                bg: "#15a4d7",
              }}
            >
              👈 Volver
            </Button>
          </NextLink>
          <NextLink href="/tiempoAmbiental" passHref>
            <Button
              px={35}
              bg={"#3ABEEC"}
              color={"white"}
              _hover={{
                bg: "#15a4d7",
              }}
            >
              Siguiente 👉
            </Button>
          </NextLink>
        </Stack>
      </Stack>
    </Flex>
  );
}
