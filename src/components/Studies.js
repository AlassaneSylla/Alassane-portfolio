import { Box, Heading, Text, Link, Image, HStack } from "@chakra-ui/react";

const certifications = [
  {
    platform: "Coursera",
    title: "Meta Front-End Developer",
    logo: "/images/coursera.png",
    alt: "Coursera-logo",
    link: "https://www.credly.com/badges/b344fccc-3168-4a01-9d26-5d3a3763627b/public_url",
  },
  {
    platform: "FORCE-N Sénégal",
    title: "Développement logiciel Python",
    logo: "/images/force-n.png",
    alt: "Forcne-N_logo",
    link: "https://drive.google.com/file/d/1cjHwDtBvnkeqwZNBAyXiUlOxR03A_ocp/view?usp=sharing",
  },
  {
    platform: "EDACY Senegal",
    title: "Software Engenieering",
    logo: "/images/edacy.jpg",
    alt: "Edacy-logo",
    link: "https://drive.google.com/file/d/1_gA7FzjF_eMKEfGSVzTZTANmYpuCSYpQ/view?usp=sharing",
  },
  {
    platform: "Certificat Dev Front",
    title: "Bakeli Shool of technology",
    logo: "/images/bakeli.png",
    alt: "Bakeli-logo",
    link: "#",
  },
  {
    platform: "Licence Génie Logiciel",
    title: "Institut Polytechniaue Dakar",
    logo: "/images/ipd.jpg",
    alt: "IPD-logo",
    link: "https://drive.google.com/file/d/17QvJtJVQEUfZ9coJF92-QMgHBPY9dRK6/view?usp=sharing",
  },
];

const StadiesSection = () => (
    <Box
        id="certifications"
        maxW="910px"
        mx="auto"
        py={16}
        px={6}
        backgroundColor="white"
    >
        <Heading
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="stadies-section"
          as="h3"
          fontSize="xl"
          mb={6}
          color="teal.500"
          p={{base: "2"}}
        >
          Formations & Certifications
        </Heading>
        <HStack
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, minmax(0, 1fr))" }}
          gap={12}
        >
        {certifications.map((cert) => (
            <HStack key={cert.title}>
                <Image
                  src={cert.logo}
                  boxSize="40px"
                  borderRadius="full"
                  fit="cover"
                  alt={cert.alt}
                  border="1px"
                  borderColor="gray.400"
                />
                <Box>
                  <Text fontWeight="bold" fontSize="sm" color="gray.700">{cert.title}</Text>
                  <Text fontSize="xs" fontWeight="bold" color="gray.700">{cert.platform}</Text>
                  <Link href={cert.link} fontSize="xs" color="teal.400" isExternal>
                    Voir diplôme
                  </Link>
                </Box>
            </HStack>
        ))}
        </HStack>
    </Box>
);

export default StadiesSection;
