import {Box, Heading, VStack, HStack, Text, Icon, Stack, Wrap,WrapItem, } from "@chakra-ui/react";
import { FaCode, FaTools, FaDatabase, FaCogs } from "react-icons/fa";

const SkillGroup = ({ icon, title, skills }) => (
  <Box>
    <HStack mb={4}>
        <Icon as={icon} color="gray.700" />
        <Text fontWeight="bold" fontSize="sm" color="gray.700">{title}</Text>
    </HStack>
    <Wrap spacing={4}>
      {skills.map((skill) => (
        <WrapItem key={skill} px={3} py={1} bg="gray.100" borderRadius="md" fontSize="xs" >
          {skill}
        </WrapItem>
      ))}
    </Wrap>
  </Box>
);

const SkillsSection = () => {
  return (
    <Box
      maxW="910px"
      mx="auto"
      py={16}
      backgroundColor="white"
      borderBottom="1px"
      borderColor="teal.400"
    >
      <Heading
        as="h1"
        fontSize={{ base: "xl", md: "2xl" }}
        id="skills-section"
        mb={6}
        p={{base: "2"}}
      >
        💼 Mon Parcours Technique
      </Heading>
      <VStack
        data-aos="fade-up"
        data-aos-duration="3000"
        align="start"
        spacing={6}
      >
        <Heading
          as="h3"
          fontSize="xl"
          mb={1}
          color="teal.500"
          px={6}
        >
          Compétences
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          justify="center"
          align="stretch"
          p={6}
        >
          <SkillGroup
            icon={FaCode}
            title="Langages"
            skills={["JavaScript", "Python", "TypeScript", "HTML", "CSS"]}
          />
          <SkillGroup
            icon={FaCogs}
            title="Frameworks"
            skills={["React", "Angular", "Django", "Nest"]}
          />
          <SkillGroup
            icon={FaDatabase}
            title="Base de données"
            skills={["Postgre", "MongoDB", "MySQL"]}
          />
          <SkillGroup
            icon={FaTools}
            title="Outils & Design"
            skills={["Git", "Figma", "UI/UX", "Jira", "Trello", "ClickUp"]}
          />
        </Stack>
      </VStack>
    </Box>
  );
};

export default SkillsSection;