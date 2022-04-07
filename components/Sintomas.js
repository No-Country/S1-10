import React from "react";
import {
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  CheckboxGroup,
} from "@chakra-ui/react";

const Sintomas = ({ formData, setFormData }) => {
  const handleCheck = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        symptom: [e.target.value],
        checkedSymptom: true,
      });
    } else {
      setFormData({
        symptom: formData.symptom.pop(),
        checkedSymptom: false,
      });
    }
    console.log(e.target.checked);
    console.log("***  Saved Values  ***");
    console.log(formData.checkedSymptom);
    console.log(formData);
  };

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
            <Checkbox key={item} value={item} onChange={handleCheck}>
              {item}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export default Sintomas;
