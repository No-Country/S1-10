import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Radio,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    RadioGroup,
    
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
                  ¿Por cuanto tiempo ha presentado sintomas?
                </FormLabel>
              </FormControl>
              <RadioGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                    <Stack spacing={[1, 5]} direction={['column']}>
                    <Radio value='tiempo1'>Menos de 7 dias</Radio>
                    <Radio value='tiempo2'>Entre 7 y 14 dias</Radio>
                    <Radio value='tiempo3'>Mas de 2 semanas</Radio>                
                    <Radio value='tiempo4'>Otro</Radio>
                    </Stack>
                </RadioGroup>
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
  