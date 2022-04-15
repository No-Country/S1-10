import React, { useState } from "react";
import Symptoms from "./Symptoms";
import ProblemHealth from "./ProblemHealth";
import TimeProblem from "./TimeProblem";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  useColorModeValue,
  Stack,
  Link,
  Heading,
  Lorem,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import axios from "axios";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    problem: [],
    symptom: [],
    time: "7",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const formTitles = ["Problema", "Tiempo", "Síntomas"];

  const pageDisplay = () => {
    if (page == 0)
      return <ProblemHealth formData={formData} setFormData={setFormData} />;
    if (page == 1)
      return <TimeProblem formData={formData} setFormData={setFormData} />;
    if (page == 2)
      return <Symptoms formData={formData} setFormData={setFormData} />;
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#F8F7F2", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>{formTitles[page]}</Heading>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          align="center"
        >
          {pageDisplay()}
        </Box>
        <Stack spacing={6} direction="row" align="center">
          <Button
            px={38}
            bg={"#3ABEEC"}
            color={"white"}
            _hover={{
              bg: "#15a4d7",
            }}
            onClick={() => {
              if (page === 0) {
                console.log("paginita");
              } else {
                setPage((currentPage) => currentPage - 1);
              }
            }}
          >
            👈 Volver
          </Button>
          <Button
            px={35}
            bg={"#3ABEEC"}
            color={"white"}
            _hover={{
              bg: "#15a4d7",
            }}
            onClick={() => {
              if (page === formTitles.length - 1) {
                onOpen();
                // alert(formData);
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === formTitles.length - 1 ? "Enviar" : "Siguiente 👉"}
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Formulario Enviado</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                A continuación podrás ver las conclusiones y recomendaciones
              </ModalBody>

              <ModalFooter>
                <NextLink href="/conclusion" passHref>
                  <Button colorScheme="cyan" mr={3} onClick={onClose}>
                    Ok
                  </Button>
                </NextLink>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Form;
