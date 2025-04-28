import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

export const socials = [
  {
    icon: faEnvelope,
    url: "mailto: p.alassane.sylla@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/AlassaneSylla",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/papa-alassane-sylla/",
  },
  {
    icon: faTwitter,
    url: "https://x.com/Alou__Sylla",
  },
];

const Header = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
      translateY={0}
      transition="transform .3s ease-in-out"
      bg="gray.900"
      transform={isVisible ? "translateY(0)" : "translateY(-200px)"}
    >
      <Box
        color="white"
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={3}
      >
        <HStack
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ base: 3, md: 8 }}
          w="100%"
          textAlign="center"
          px={{base: 4, md: 16}}
          py={3}
        >
          <Box>
            <HStack as="ul" spacing={4} listStyleType="none">
              {socials.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} target="_blank" _hover={{ color: "teal.300" }}>
                    <FontAwesomeIcon icon={link.icon} fontSize="1.2rem" />
                  </Link>
                </li>
              ))}
            </HStack>
          </Box>

          <Box>
            <HStack
              spacing={{ base: 3, md: 6 }}
              fontSize={{ base: "sm", md: "md" }}
            >
              {[
                { label: "À propos", id: "about-me" },
                { label: "Projets", id: "projects" },
                { label: "Skills", id: "skills" },
                { label: "Études", id: "stadies" },
                { label: "Contact", id: "contactme" },
              ].map((item) => (
                <Link
                  key={item.id}
                  as="button"
                  onClick={handleClick(item.id)}
                  fontWeight="bold"
                  _hover={{ color: "teal.300" }}
                  transition="color 0.2s ease-in-out"
                >
                  {item.label}
                </Link>
              ))}
            </HStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
