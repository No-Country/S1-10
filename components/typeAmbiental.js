import React from "react";
import {
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  CheckboxGroup,
} from "@chakra-ui/react";

const Type = ({ formData, setFormData }) => {
  const handleCheck = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        symptom: [...formData.symptom, e.target.value],
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

  const tipo = [
    "Son agresivos?",
    "Estan en la via pública?",
    "Estan en una vivienda?",
    "Hay un nido?",
    "Es un area contaminada?",
    
  ];

  return (
    <Stack spacing={4} align="center">
      <FormControl id="bienvenida">
        <FormLabel fontSize={"2xl"} justify={"center"}>
          ¿Que caracteristica observa?
        </FormLabel>
      </FormControl>
      <CheckboxGroup colorScheme="green" value={formData.symptom}>
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

export default Type;
