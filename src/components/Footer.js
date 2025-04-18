import React from "react";
import { Box, Flex, Text, Link, HStack, Stack } from "@chakra-ui/react";
import { socials } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          direction="column"
          margin="0 auto"
          px={{base: 4, md: 12}}
          py={3}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            textAlign="center"
            mb={3}
          >
            Design & développement : Papa Alassane Sylla • © 2025
          </Text>
          <Stack
            fontSize={{base: "sm", md: "md"}}
            textAlign="center"
          >
            <HStack as="ul" spacing={5} style={{listStyle:"none"}}>
              {socials.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} target="_blank">
                    <FontAwesomeIcon icon={link.icon} fontSize={{ base: "0.8rem", md: "1.2rem" }} />
                  </Link>
                </li>
              ))}
            </HStack>
          </Stack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
