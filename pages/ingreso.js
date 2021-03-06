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
import {
  getProviders,
  getSession,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import BtnLogin from "./../components/BtnLogin";
import { useEffect } from "react";
import Router from "next/router";

const Ingreso = ({ providers, session }) => {
  console.log({ providers, session });

  useEffect(() => {
    if (session) return Router.push("/");
  }, [session]);

  if (session) return null;

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("#F8F7F2", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Logueate</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Para poder <Link color={"#3ABEEC"}>cuidarte</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          // bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Text>
            Welcome {session ? session.user.name : "No user logged in"}
          </Text>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Recordar Cuenta</Checkbox>
                <Link color={"#3ABEEC"}>Olvidaste la contraseña?</Link>
                <NextLink href="/registro" passHref>
                  <Link color={"#3ABEEC"}>No tienes cuenta?</Link>
                </NextLink>
              </Stack>
              {/* <NextLink href="/bienvenida" passHref></NextLink> */}
              <Button
                bg={"#3ABEEC"}
                color={"white"}
                _hover={{
                  bg: "#15a4d7",
                }}
                onClick={() => signIn(providers.id)}
              >
                Ingresar
              </Button>

              <BtnLogin provider={providers.google} bgColor={"red"}></BtnLogin>
              <BtnLogin
                provider={providers.facebook}
                bgColor={"blue"}
              ></BtnLogin>
              <Button
                bg={"#3ABEEC"}
                color={"white"}
                _hover={{
                  bg: "#15a4d7",
                }}
                onClick={() => signOut()}
              >
                Salir
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

Ingreso.getInitialProps = async (context) => {
  return {
    providers: await getProviders(context),
    session: await getSession(context),
  };
};

export default Ingreso;
