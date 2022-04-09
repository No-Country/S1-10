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
                Hospital Central +54 (261) 4200063 Htal. Dr. Carlos Pereyra +54
                (261) 4307641/3224 Hospital El Sauce +54 (261) 4511417/1418
                Htal. Héctor Elías Gailhac +54 (261) 4511307 Hospital J. N.
                Lencinas +54 (261) 4272600 Hospital Lagomaggiore +54 (261)
                4259700/9049 Htal. Pediátrico H. Notti +54 (261) 4450045
              </Text>
            </FormControl>

            <Stack spacing={6} direction="row" align="center">
              <NextLink href="/prediccion" passHref>
                <Button
                  href={"/problema"}
                  px={38}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Anterior
                </Button>
              </NextLink>
              <NextLink href="/bienvenida" passHref>
                <Button
                  px={35}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
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
