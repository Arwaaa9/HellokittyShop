import {
  Container,
  Box,
  Avatar,
  Button,
  HStack,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  MenuDivider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const username = localStorage.getItem("username");
  return (
    <Box
    // bg={useColorModeValue("pink.50", "pink.300")}
    // color={useColorModeValue("pink.700", "pink.200")}
      py="2"
      boxShadow="sm"
      border="0 solid pink"
      position="fixed"
      top="0"
      width="100%"
      zIndex="1"
      paddingY={4}>
      <Container maxW="1000px" px={9} mx="auto">
        <HStack spacing={4}>
          <Text fontSize="2xl" fontWeight="semibold" color={"white"}>
           ARWA
          </Text>
          <Spacer />
          <HStack spacing={3}>
            {localStorage.getItem("email") ? (
              console.log("logged in")
            ) : (
              <Button
                color="#fff"
                rounded="md"
                bg="pink"
                _hover={{ bg: "pink" }}
                onClick={() => Navigate("/signUp")}>
                Sign Up
              </Button>
            )}
            {localStorage.getItem("email") ? (
              console.log("logged in")
            ) : (
              <Button
                color="#fff"
                rounded="md"
                bg="pink"
                _hover={{ bg: "pink" }}
                onClick={() => Navigate("/login")}>
                Log In
              </Button>
            )}
            <Menu isLazy>
              <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
                <Avatar size="sm" />
              </MenuButton>
              <MenuList
                zIndex={5}
                border="2px solid"
                boxShadow="4px 4px 0">
                <MenuDivider />
                <MenuDivider />
                <MenuItem>
                  <Button
                    w={"40%"}
                    bg={"transparent"}
                    onClick={() => {
                      localStorage.clear();
                      Navigate("/");
                    }}>
                    <Text fontWeight="400" color={"red.500"}>
                      Logout
                    </Text>
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
