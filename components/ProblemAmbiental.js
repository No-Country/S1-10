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
  { name: "Ruidos Molestos", checked: false },
  { name: "Malos Olores", checked: false },
  { name: "Insectos", checked: false },
  { name: "Agua de red", checked: false },
  { name: "Polvo", checked: false },
  { name: "Animales Sueltos", checked: false },
  { name: "Humo/Ceniza", checked: false },
  { name: "Basura/Escombros", checked: false },
  { name: "Otros", checked: false },
];

const ProblemAmbiental = ({ formData, setFormData }) => {
  const handleCheck = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        problem: [...formData.problem, e.target.value],
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

export default ProblemAmbiental;
