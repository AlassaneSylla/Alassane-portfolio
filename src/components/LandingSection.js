import React from "react";
import { Avatar, Heading, VStack, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";

const greeting = "Hello, moi c'est Alassane 👋";
const [title1, title2] = ["Développeur Logiciel", "Développeur Full-Stack"];
const bio2 = "Je conçois des applications web modernes et performantes avec React, Angular, Python et Django. Passionné par les solutions digitales innovantes.";
const MotionBox = motion(Box);

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="teal.700"
    py={{ base: 8, md: 16 }}
    position="relative"
  >
    <VStack
      spacing={{ base: 2, md: 4 }}
    >
      <Avatar
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        size={{ base: "xl", md: "2xl" }}
        name="Alassane"
        src="/images/alassane-avatar.jpg"
        loading="lazy"
      />
      <Text color="whiteAlpha.900" fontSize={{ base: "sm", md: "md" }}>
        {greeting}
      </Text>
      <Heading as='h1' size={{ base: "xl", md: "2xl" }}>
      <Typewriter
        words={[title1, title2]}
        loop={0}
        cursor
        cursorStyle='|'
        typeSpeed={30}
        deleteSpeed={30}
        delaySpeed={2000}
      />
      </Heading>
      <Heading
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        textAlign='center'
        as='h2'
        size={{ base: "sm", md: "md" }}
        p={{ base: "2" }}
      >
        {bio2}
      </Heading>

      {/* ChevronDown animation */}
      <MotionBox
        position="absolute"
        bottom="30px"
        transform="translateX(-50%)"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        cursor="pointer"
        color="white"
        onClick={() => {
          document.getElementById('about-me-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <VStack spacing={1} align="center">
          <Text fontSize="sm" color="whiteAlpha.800">défiler vers le bas</Text>
          <ChevronDown size={50} />
        </VStack>
      </MotionBox>

    </VStack>
  </FullScreenSection>
);

export default LandingSection;
