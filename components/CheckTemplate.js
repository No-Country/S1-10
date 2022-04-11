import React from "react";
import {
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  CheckboxGroup,
} from "@chakra-ui/react";

const checkTemplate = () => {
  const symptoms = [
    "Alergias",
    "Tos",
    "Congestion",
    "Asma",
    "Dificultad Respiratoria",
    "Fiebre",
    "Perdida Olfato/Gusto",
    "Mareos",
    "Otros",
  ];

  return (
    <Stack spacing={4} align="center">
      <FormControl id="bienvenida">
        <FormLabel fontSize={"2xl"} justify={"center"}>
          ¿Que sintomas son?
        </FormLabel>
      </FormControl>
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column"]}>
          {symptoms.map((item) => (
            <Checkbox key={item} value={item}>
              {item}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export default checkTemplate;
