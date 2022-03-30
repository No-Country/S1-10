
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
              <FormControl id="bienvenida">
                <FormLabel fontSize={"2xl"} justify={"center"}>
                  ¿Cuál es tu problema?
                </FormLabel>
              </FormControl>
              <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                    <Stack spacing={[1, 5]} direction={['column']}>
                    <Checkbox value='Gastrointeritis'>Gastrointeritis</Checkbox>
                    <Checkbox value='Respiratorio'>Respiratorio</Checkbox>
                    <Checkbox value='Lesiones de Piel'>Lesiones de piel</Checkbox>
                    <Checkbox value='Fiebre'>Fiebre</Checkbox>
                    <Checkbox value='Picadura de Insecto'>Picadura de Insecto</Checkbox>
                    <Checkbox value='Mordedura de animal'>Mordedura de animal</Checkbox>
                    <Checkbox value='Dolores Focalizados'>Dolores Focalizados</Checkbox>
                    <Checkbox value='Mareos'>Mareos</Checkbox>
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
  