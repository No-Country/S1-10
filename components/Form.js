import React, { useState } from "react";
import ProblemaSalud from "./ProblemaSalud";
import Sintomas from "./Sintomas";
import TiempoProblema from "./TiempoProblema";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  useColorModeValue,
  Stack,
  Link,
  Button,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import axios from "axios";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    problem: "",
    checkedItem: false,
    symptom: [],
    time: "",
    checkedItemTime: false,
  });

  const formTitles = ["Problema", "Tiempo", "Síntomas"];

  const pageDisplay = () => {
    if (page == 0)
      return <ProblemaSalud formData={formData} setFormData={setFormData} />;
    if (page == 1)
      return <TiempoProblema formData={formData} setFormData={setFormData} />;
    if (page == 2)
      return <Sintomas formData={formData} setFormData={setFormData} />;
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
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
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
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
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => {
              if (page === formTitles.length - 1) {
                alert("listo");
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === formTitles.length - 1 ? "Enviar" : "Siguiente 👉"}
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Form;
