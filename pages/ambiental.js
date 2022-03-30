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
    CheckboxGroup
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
            <Heading fontSize={"3xl"}>Ambiental</Heading>
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
                  ¿Cuál es tu problema?
                </FormLabel>
              </FormControl>
              <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                    <Stack spacing={[1, 5]} direction={['column']}>
                    <Checkbox value='Ruidos Molestos'>Ruidos Molestos</Checkbox>
                    <Checkbox value='Malos Olores'>Malos Olores</Checkbox>
                    <Checkbox value='Insectos'>Insectos</Checkbox>
                    <Checkbox value='Agua de Red'>Agua de Red</Checkbox>
                    <Checkbox value='Polvo'>Polvo</Checkbox>
                    <Checkbox value='Animales Sueltos'>Animales Sueltos</Checkbox>
                    <Checkbox value='Humo/Ceniza'>Humo/Ceniza</Checkbox>
                    <Checkbox value='Basura/Escombros'>Basura/Escombros</Checkbox>
                    <Checkbox value='Otros'>Otros</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </Stack>          
          </Box>
          <Stack spacing={6} direction="row" align="center">
                <Button
                  px={38}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  👈 Volver 
                </Button>
                <Button
                  px={35}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Siguiente 👉
                </Button>
              </Stack>
        </Stack>
      </Flex>
    );
  }
  