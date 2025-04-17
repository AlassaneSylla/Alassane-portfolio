import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack, Image, Text, Button } from "@chakra-ui/react";
import { DownloadIcon, InfoIcon } from "@chakra-ui/icons";

const AboutMe = () => {
  return (
    <FullScreenSection
      backgroundColor="gray.50"
      isDarkBackground
      p={{ base: 4, md: 8 }}
      alignItems="flex-start"
      spacing={8}
      py={16}
    >
      <Heading
        as="h1"
        id="about-me-section"
        fontSize={{ base: "xl", md: "2xl" }}
        mb={8}
        display="flex"
        alignItems="center"
        gap={2}
        color="gray.800"
      >
        <InfoIcon /> À propos de moi
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }}
        gridGap={6}
        maxW="900px"
        mx="auto"
      >
        <VStack
          data-aos="fade-up-right"
          border="1px solid"
          borderColor="blue.100"
          p={3}
          rounded="md"
          align="center"
          justify="center"
        >
          <Image
            src="/images/alassane.jpg"
            alt="Papa Alassane Sylla"
            rounded="md"
            objectFit="cover"
          />
        </VStack>
        <VStack data-aos="fade-left" align="start" spacing={4} color="gray.800">
          <Text>
            Je m'appelle Papa Alassane Sylla, développeur full stack, passionné
            par les technologies web et les solutions digitales.
          </Text>
          <Text>
            Passionné par le développement web, je suis diplômé en informatique de l'Institut Polytechnique de Dakar, avec des certifications en Python (Force-N) et en Front-End (Meta). J'ai eu la chance de participer à des projets variés : PME, e-commerce, logistique et éducation.
          </Text>
          <Text>
            J'interviens aussi bien sur le front que sur le backend, et je conçois des interfaces intuitives en m'appuyant Figma. J'adopte une approche agile, centrée sur l'utilisateur.
          </Text>
          <Text>
            Ce qui me motive ? Concevoir des applications utiles, performantes et élégantes, qui répondent à de vrais besoins. Je m'investis aussi dans des actions communautaires autour de la santé, de l'entrepreneuriat et de la vie citoyenne, avec la volonté de créer un impact positif et durable.
          </Text>
          <Button
            data-aos="flip-up"
            as="a"
            leftIcon={<DownloadIcon />}
            href="/CV_Papa Alassane Sylla.pdf"
            colorScheme="teal"
            width={{ base: "100%", md: "full" }}
            download
            mt={4}
          >
            Télécharger mon CV
          </Button>
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default AboutMe;
