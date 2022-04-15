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
          <Heading fontSize={"3xl"}>Salud</Heading>
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
                ¿Que sintomas son?
              </FormLabel>
            </FormControl>
            <CheckboxGroup colorScheme="green">
              <Stack spacing={[1, 5]} direction={["column"]}>
                <Checkbox value="Gastrointeritis">Alergias</Checkbox>
                <Checkbox value="Respiratorio">Tos</Checkbox>
                <Checkbox value="Lesiones de Piel">Congestion</Checkbox>
                <Checkbox value="Fiebre">Asma</Checkbox>
                <Checkbox value="Picadura de Insecto">
                  Dificultad Respiratoria
                </Checkbox>
                <Checkbox value="Mordedura de animal">Fiebre</Checkbox>
                <Checkbox value="Dolores Focalizados">
                  Perdida Olfato/Gusto
                </Checkbox>
                <Checkbox value="Mareos">Mareos</Checkbox>
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
          <NextLink href="/recomendaciones" passHref>
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
