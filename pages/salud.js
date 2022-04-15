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
import { useState } from "react";
import NextLink from "next/link";
import axios from "axios";

export default function SimpleCard() {
  const [salud, setSalud] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/tecuido", { salud });
    console.log(res);
  };

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
            <FormControl id="salud">
              <FormLabel fontSize={"2xl"} justify={"center"}>
                ¿Cuál es tu problema?
              </FormLabel>
            </FormControl>
            <CheckboxGroup colorScheme="green" onSubmit={handleSubmit}>
              <Stack spacing={[1, 5]} direction={["column"]}>
                <Checkbox
                  value="Gastrointeritis"
                  onChange={(e) => setSalud(e.target.value)}
                >
                  Gastrointeritis
                </Checkbox>
                <Checkbox value="Respiratorio">Respiratorio</Checkbox>
                <Checkbox value="Lesiones de Piel">Lesiones de piel</Checkbox>
                <Checkbox value="Fiebre">Fiebre</Checkbox>
                <Checkbox value="Picadura de Insecto">
                  Picadura de Insecto
                </Checkbox>
                <Checkbox value="Mordedura de animal">
                  Mordedura de animal
                </Checkbox>
                <Checkbox value="Dolores Focalizados">
                  Dolores Focalizados
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
          <NextLink href="/tiempoSalud" passHref>
            <Button
              px={35}
              bg={"#3ABEEC"}
              color={"white"}
              _hover={{
                bg: "#15a4d7",
              }}
              type="submit"
            >
              Siguiente 👉
            </Button>
          </NextLink>
        </Stack>
      </Stack>
    </Flex>
  );
}
