import React, { useState, useEffect, useMemo, useRef, forwardRef } from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
  CardFooter,
  Image,
  Box,
  Flex,
  SimpleGrid,
  Container,

} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Cards = forwardRef((props , ref) => {
  const [cardProps, setCardProps] = useState(props.cardProps);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const filterItems = useMemo(() => {
    return cardProps.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [cardProps]);
  const storageEmail = localStorage.getItem("email");


  return (
    <>
      {storageEmail ? (
        <>
          <div ref={ref}></div>
          <Container
            w={"85%"}
            maxW={"1xl"}
            px={2}
            mx="auto"
            mt={10}
            borderRadius="30px"
            >
        
            <SimpleGrid
              px={{}}
              gap={5}
              columns={{ base: 1, md: 2, lg:3 }}
              w={{ base: "70%", md: "90%", lg: "80%" }}>
              {filterItems.map((item) => (
                <Card key={item.id}>
                  <CardBody>
                    <Image
                   src={item.Image}
                      borderRadius="20px"
                    />
                    <Stack mt="3" spacing="3">
                      <Heading size="sl">{item.title}</Heading>
                      <Text>{item.description}</Text>
                      <Text color="pink.300" fontSize="2xl"
                       borderRadius="20px"
                      >
                        {item.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="4">
                      <Button variant="ghost" bg={"pink"} >
                     ! Buy now     </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </Container>
        </>
      ) : (
        <>
          <div ref={ref}></div>
          <Container
            w={"90%"}
            maxW={"1xl"}
            px={4}
            mx="auto"
            mt={20}
            id="cards ">
            <Box
              w="90%"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              flexDirection={"column"}
              gap={4}
              pb={4}>
              <Text color="pink.200" fontSize="2xl">
             !! 🤨 Log in to see hellokitty
              </Text>
              <Button color="pink.200" onClick={handleClick}>
               Login
              </Button>
            </Box>
          </Container>
        </>
      )}
    </>
  );
}

);
export default Cards;