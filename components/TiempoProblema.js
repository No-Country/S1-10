import React from "react";
import {
  FormControl,
  FormLabel,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

const TiempoProblema = ({ formData, setFormData }) => {
  console.log(formData);

  const handleCheck = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        time: e.target.value,
        checkedItemTime: true,
      });
    } else {
      setFormData({
        ...formData,
        time: "",
        checkedItemTime: false,
      });
    }
    console.log(e.target.checked);
    console.log("***  Saved Values  ***");
    console.log(formData.checkedItemTime);
    console.log(formData);
  };
  return (
    <Stack spacing={4} align="center">
      <FormControl id="bienvenida">
        <FormLabel fontSize={"2xl"} justify={"center"}>
          ¿Por cuanto tiempo ha presentado sintomas?
        </FormLabel>
      </FormControl>
      <RadioGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column"]}>
          <Radio value="7" onChange={handleCheck}>
            Menos de 7 dias
          </Radio>
          <Radio value="14" onChange={handleCheck}>
            Entre 7 y 14 dias
          </Radio>
          <Radio value="30" onChange={handleCheck}>
            Más de 2 semanas
          </Radio>
          <Radio value="60" onChange={handleCheck}>
            Más de 1 mes
          </Radio>
        </Stack>
      </RadioGroup>
    </Stack>
  );
};

export default TiempoProblema;
