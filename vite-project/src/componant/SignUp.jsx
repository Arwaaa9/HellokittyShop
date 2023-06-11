import React from "react";
import {
  Link,
  useNavigate,
  useLocation,
  useParams,

} from "react-router-dom";
import { useState } from "react";
import { Box, Button, Input, FormLabel , Text } from "@chakra-ui/react";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let validationEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const chackEmail = validationEmail.test(email);
  const handleSubmit = (e) => {

      if (username.length > 0 && chackEmail === true && password.length > 4) {
        e.preventDefault();
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        navigate("/login");
      } else {
        alert("Please fill all the fields");
      }
        
    }
  return (
    <>
     {/* bg={"pink.100"} */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"70vh"}
        width={"90vw"}
        flexDirection={"column"}>
          <Text fontSize={"2xl"} m={7} fontWeight={"normal"} > Create Account  </Text>
        <FormLabel htmlFor="username"> Username </FormLabel>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          maxW={"300px"}
          type="text"
          border={"4px solid pink"}
          borderRadius="20px"
          placeholder="Enter your Username"
      
        />
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          maxW={"300px"}
          border={"4px solid pink"}
          borderRadius="20px"
          placeholder="Enter your Email"
        
        />
        <FormLabel htmlFor="password"> Password</FormLabel>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          maxW={"300px"}
          type="password"
          border={"4px solid pink"}
          borderRadius="20px"
          placeholder= "Enter your password"
        
        />
        <Button
          onClick={handleSubmit}
          bg={"pink"}
          _hover={{ bg: "pink.100" }}
          borderRadius="20px"
          mt={5}>
          Sign Up
        </Button>
      </Box>
    </>
  );
}

export default SignUp;
