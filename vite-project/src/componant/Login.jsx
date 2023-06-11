import React from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { Box, Button, Input, FormLabel, Text } from "@chakra-ui/react";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailStorage = localStorage.getItem("email", email);
    const passwordStorage = localStorage.getItem("password", password);
    if (emailStorage === email && passwordStorage === password) {
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        width={"100vw"}
        flexDirection={"column"}>
        <Text fontSize={"2xl"} m={4} fontWeight={"normal"}>
          Log In
        </Text>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          maxW={"300px"}
          type="text"
          border={"4px solid pink"}
          borderRadius="20px"
          placeholder="Enter your Email"
         
        />
        <FormLabel htmlFor="password"> Password </FormLabel>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          maxW={"300px"}
          type="password"
          border={"4px solid pink"}
          borderRadius="20px"
          placeholder=" Enter your Password  "
         
        />
        <Button
          onClick={handleSubmit}
          bg={"pink"}
          _hover={{ bg: "pink.100" }}
          borderRadius="20px"
          mt={4}>
          Login
        </Button>
      </Box>
    </>
  );
}

export default Login;
