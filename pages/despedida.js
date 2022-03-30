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
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"}>Suponer logo</Heading>
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
                  Gracias por utilizar Te cuido
                </FormLabel>
              </FormControl>
  
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  