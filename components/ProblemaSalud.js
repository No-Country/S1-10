import React from "react";
import {
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Input,
  Heading,
  useColorModeValue,
  CheckboxGroup,
} from "@chakra-ui/react";

const Problema = ({ formData, setFormData }) => {
  const handleCheck = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        problem: e.target.value,
        checkedItem: true,
      });
    } else {
      setFormData({
        ...formData,
        problem: "",
        checkedItem: false,
      });
    }
    console.log(e.target.checked);
    console.log("***  Saved Values  ***");
    console.log(formData.checkedItem);
    console.log(formData);
  };

  return (
    <Stack spacing={4} align="center">
      <FormControl id="salud">
        <FormLabel fontSize={"2xl"} justify={"center"}>
          ¿Cuál es tu problema?
        </FormLabel>
      </FormControl>
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column"]}>
          {/* <Input
            type="text"
            value={formData.checkedItem}
            onClick={(e) => ({ ...FormData, problem: e.target.value })}
          ></Input> */}
          <Checkbox value="Gastrointeritis" onChange={handleCheck}>
            Gastrointeritis
          </Checkbox>

          <Checkbox value="Respiratorio" onChange={handleCheck}>
            Respiratorio
          </Checkbox>
          <Checkbox value="Lesiones de Piel">Lesiones de piel</Checkbox>
          <Checkbox value="Fiebre">Fiebre</Checkbox>
          <Checkbox value="Picadura de Insecto">Picadura de Insecto</Checkbox>
          <Checkbox value="Mordedura de animal">Mordedura de animal</Checkbox>
          <Checkbox value="Dolores Focalizados">Dolores Focalizados</Checkbox>
          <Checkbox value="Mareos">Mareos</Checkbox>
          <Checkbox value="Otros">Otros</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export default Problema;
