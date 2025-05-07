import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={0} borderRadius="lg" overflow="hidden">
      <Image src={imageSrc}></Image>
      <VStack color="black" bg="white" px={4} py={4} align="left">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <a href="/#projects" style={{fontWeight: "bold"}}>See more <FontAwesomeIcon icon={faArrowRight} /></a>
      </VStack>
    </VStack>
  );
};

export default Card;
