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
                ¿Que tipo de problema presenta?
              </FormLabel>
            </FormControl>

            <Stack spacing={6} direction="row" align="center">
              <Button
                px={38}
                bg={"#3ABEEC"}
                color={"white"}
                _hover={{
                  bg: "#15a4d7",
                }}
              >
                Salud
              </Button>
              <Button
                px={35}
                bg={"#3ABEEC"}
                color={"white"}
                _hover={{
                  bg: "#15a4d7",
                }}
              >
                Ambiental
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
