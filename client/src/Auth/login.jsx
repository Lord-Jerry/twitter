import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/core";

export default () => {
  return (
    <FormControl
      max-width="450px"
      width={["40%", "90%", "70%", "40%"]}
      alignItems="center"
      margin="0 auto"
      border="10px"
    >
      <FormLabel color="white" htmlFor="email">
        Email address
      </FormLabel>
      <Input
        width="100%"
        type="email"
        id="email"
        aria-describedby="email-helper-text"
      />

      <FormLabel color="white" htmlFor="email">
        Password
      </FormLabel>
      <Input
        width="100%"
        type="password"
        id="password"
        aria-describedby="password-helper-text"
      />

      <Button rounded="50px" mt="15px" width="100%">Log in</Button>
    </FormControl>
  );
};
