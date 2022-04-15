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
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Conclusión</Heading>
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
                Usted presenta síntomas similares al cuadro de Covid. Debe
                concurrir a un centro asistencial a realizar el examen
                correspondiente y seguir las indicaciones del profesional.
              </Text>
            </FormControl>

            <Stack spacing={6} direction="row" align="center">
              <NextLink href="/bienvenida" passHref>
                <Button
                  href={"/problema"}
                  px={38}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Inicio
                </Button>
              </NextLink>
              <NextLink href="/prediccion" passHref>
                <Button
                  px={35}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Siguiente
                </Button>
              </NextLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
