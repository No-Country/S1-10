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
import { getSession, signIn, signOut } from "next-auth/react";

import NextLink from "next/link";

export default function Bienvenida() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#F8F7F2", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Bienvenido</Heading>
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
                ¿Podemos ayudarte?
              </FormLabel>
            </FormControl>

            <Stack spacing={6} direction="row" align="center">
              <NextLink href="/problema" passHref>
                <Button
                  href={"/problema"}
                  px={38}
                  bg={"#3ABEEC"}
                  color={"white"}
                  _hover={{
                    bg: "#15a4d7",
                  }}
                >
                  SI
                </Button>
              </NextLink>
              <NextLink href="/despedida" passHref>
                <Button
                  px={35}
                  bg={"#3ABEEC"}
                  color={"white"}
                  _hover={{
                    bg: "#15a4d7",
                  }}
                >
                  NO
                </Button>
              </NextLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
/* 
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log("Get Server side: ", session);

  if (!session) {
    return {
      redirect: {
        destination: "/ingreso",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}; */
