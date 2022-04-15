import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#F8F7F2", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Registrarse
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            para poder cuidarte ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel>Apellido</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="Phone" isRequired>
              <FormLabel>Numero de telefono</FormLabel>
              <Input type="number" />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <NextLink href="/bienvenida" passHref>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"#3ABEEC"}
                  color={"white"}
                  _hover={{
                    bg: "#15a4d7",
                  }}
                >
                  Guardar
                </Button>
              </NextLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
