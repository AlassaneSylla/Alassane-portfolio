import { HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, details, link }) => {
  return (
    <Box
      data-aos="zoom-in-up"
      maxW="sm"
      borderWidth="0"
      borderRadius='lg'
      bg='white'
      overflow='hidden'
      shadow="md"
    >
      <HStack>
        <Image src={imageSrc} loading="lazy" alt="project image" borderRadius='lg' />
      </HStack>
      <VStack p={4} align='start' backgroundColor="gray.40">
        <Text fontWeight='bold' color='gray.800'>{title}</Text>
        <Text color='gray.700' fontSize="xs">{description}</Text>
        <HStack
          cursor="pointer"
          color="teal.600"
          fontWeight="medium"
          _hover={{ color: 'teal.800', textDecoration: 'underline'}}
        >
          {link ? (
            <Link href={link} isExternal fontSize='sm'>
              {details} <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </Link>
          ) : (
            <Text fontSize='sm'>{details}</Text>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
