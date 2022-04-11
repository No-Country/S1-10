import React from "react";
import {
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  CheckboxGroup,
} from "@chakra-ui/react";

const TypeAmbiental = ({ formData, setFormData }) => {
  const handleCheck = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        symptom: [...formData.type, e.target.value],
      });
    } else {
      setFormData({
        symptom: formData.type.pop(),
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
      <CheckboxGroup colorScheme="green" value={formData.type}>
        <Stack spacing={[1, 5]} direction={["column"]}>
          {tipo.map((item) => (
            <Checkbox key={item} value={item} onChange={handleCheck}>
              {item}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export default TypeAmbiental;
