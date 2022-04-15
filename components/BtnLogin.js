import React from "react";
import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

const BtnLogin = ({ provider, bgColor }) => {
  return (
    <div>
      <Button
        bg={`${bgColor}.400`}
        color={"white"}
        _hover={{
          bg: `${bgColor}.500`,
        }}
        onClick={() => signIn(provider.id)}
      >
        Ingresar con {provider.name}
      </Button>
    </div>
  );
};

BtnLogin.defaultProps = {
  bgColor: "#3ABEEC",
};

export default BtnLogin;
