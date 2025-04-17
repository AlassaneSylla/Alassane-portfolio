import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
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
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      bg="gray.900"
      transform={isVisible ? "translateY(0)" : "translateY(-200px)"}
    >
      <Box
        color="white"
        maxWidth={{ base: "100%", md: "1280px" }} px={{ base: 2, md: 16 }}
      >
        <HStack
          px={{base: 4, md: 16}}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
          flexDirection={{base: 'column', md: 'row'}}
          spacing={{base: 2, md: 4}}
        >
          <nav>
            <HStack as="ul" spacing={5} style={{listStyle:"none"}}>
              {socials.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} target="_blank">
                    <FontAwesomeIcon icon={link.icon} fontSize={{ base: "0.8rem", md: "1.2rem" }} />
                  </Link>
                </li>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack
              spacing={{ base: 4, md: 8 }}
              fontWeight="bold"
              fontSize={{ base: "sm", md: "md" }}
            >
              <Link
                href="/#about-me-section"
                onClick={() => handleClick('about-me-section')}
              >
                À propos
              </Link>
              <Link
                href="/#projects-section"
                onClick={() => handleClick('projects-section')}
              >
                Projects
              </Link>
              <Link
                href="/#skills-section"
                onClick={() => handleClick('skills-section')}
              >
                Skills
              </Link>
              <Link
                href="/#stadies-section"
                onClick={() => handleClick('stadies-section')}
              >
                Études
              </Link>
              <Link
                href="/#contactme-section"
                onClick={() => handleClick('contactme-section')}
              >
                Contact
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
