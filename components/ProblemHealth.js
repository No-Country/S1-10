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

const allProblems = [
  { name: "Gastrointeritis", checked: false },
  { name: "Respiratorio", checked: false },
  { name: "Lesiones de Piel", checked: false },
  { name: "Mordedura de animal", checked: false },
  { name: "Fiebre", checked: false },
  { name: "Picadura de Insecto", checked: false },
  { name: "Dolores Focalizados", checked: false },
  { name: "Mareos", checked: false },
  { name: "Otros", checked: false },
];

const Problema = ({ formData, setFormData }) => {
  const handleCheck = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        problem: [...formData.problem, e.target.value],
      });
    } else {
      setFormData({
        ...formData,
        problem: "",
      });
    }
    console.log(e.target.checked);
    console.log(e.target.value);
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
        <CheckboxGroup colorScheme="green" value={formData.problem}>
          <Stack spacing={[1, 5]} direction={["column"]}>
            {allProblems.map((item) => (
              <Checkbox
                key={item.name}
                value={item.name}
                onChange={handleCheck}
              >
                {item.name}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </FormControl>
    </Stack>
  );
};

export default Problema;

{
  /*  <Input
              type="text"
              value={formData.problem}
              onClick={(e) => ({ ...FormData, problem: e.target.value })}
            ></Input> */
}
//check box with ChakraUI components
{
  /* <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column"]}>
          
           <Input
            type="text"
            value={formData.checkedItem}
            onClick={(e) => ({ ...FormData, problem: e.target.value })}
          ></Input> 
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
      </CheckboxGroup> */
}
