import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Logo = (props) => {
  return (
    <Text fontSize={"3xl"} fontFamily={"monospace"} fontWeight={"bold"}>
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      rounded={"full"}
      w={5}
      h={5}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
  
      _hover={{
        bg: useColorModeValue("pink.200", "pink.100"),
        color: "white",
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children} {href}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      mt={12}
      bg={useColorModeValue("pink.50", "pink.300")}
      color={useColorModeValue("pink.700", "pink.200")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}>
        <Logo />
        <Text> 💖 Made By Rore </Text>
        <Stack direction={"row"} spacing={5}>
          <SocialButton label={"Linkedin"} href={""}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={"Github"} href={""}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
