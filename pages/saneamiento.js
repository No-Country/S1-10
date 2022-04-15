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
          <Heading fontSize={"3xl"}>Saneamiento </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          align="center"
        >
          <Stack spacing={4} align="center">
            <FormControl id="conclusion">
              <Text fontSize={"2xl"} justify={"center"}>
                SENASA +54 - 011) 4121-5000 Municipio de Mendoza 147 Defensa
                Civil 103 Emergencia Ambiental 105 Bomberos 100
              </Text>
            </FormControl>

            <Stack spacing={6} direction="row" align="center">
              <NextLink href="/prediccionAmbiental" passHref>
                <Button
                  href={"/problema"}
                  px={38}
                  bg={"#3ABEEC"}
                  color={"white"}
                  _hover={{
                    bg: "#15a4d7",
                  }}
                >
                  Anterior
                </Button>
              </NextLink>
              <NextLink href="/bienvenida" passHref>
                <Button
                  px={35}
                  bg={"#3ABEEC"}
                  color={"white"}
                  _hover={{
                    bg: "#15a4d7",
                  }}
                >
                  Inicio
                </Button>
              </NextLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
