import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

const TiempoProblema = ({ formData, setFormData }) => {
  //const [value, setValue] = useState(formData.time);

  const handleCheck = (e) => {
    setFormData({
      ...formData,
      time: e.target.value,
    });
    console.log(e.target.value);
    console.log("***  Saved Values  ***");
    console.log(formData);
  };
  // console.log(value);

  return (
    <FormControl id="timeProblem">
      <Stack spacing={4} align="center">
        <FormLabel fontSize={"2xl"} justify={"center"}>
          ¿Por cuanto tiempo ha presentado sintomas?
        </FormLabel>

        <RadioGroup
          colorScheme="green"
          name="timeProblem"
          value={formData.time}
        >
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
    </FormControl>
  );
};

export default TiempoProblema;
