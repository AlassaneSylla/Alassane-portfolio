import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Card from "./Card";

const projects = [
  {
    title: "Projet Capstone - Certificat Meta Front-End (Coursera)",
    description: "Développement d'un site web de réservation de tables, réalisé avec React. Ce projet met en œuvre les compétences acquises tout au long de la formation, notamment en gestion des composants, gestion d'état, et navigation.",
    image: "/images/little-lemon.JPG",
    link: "https://github.com/AlassaneSylla",
    details: "Code Github"
  },
  {
    title: "Site web - AP2S Concept Group",
    description: "Développement et maintenance d'un site web responsive pour une entreprise spécialisée dans l'aménagement paysager et la sécurité. Les technos utilisés: HTML, CSS, JavaScript, JQuery et PHP, pour une présentation claire des services.",
    image: "/images/ap2s.JPG",
    link: "https://ap2sconcepts.com/",
    details: "En ligne"
  },
  {
    title: "Site web - Global Marine Service",
    description: "Développement et maintenance d'un site web responsive pour Global Marine Service, une entreprise de logistique et de mecanique. Les technos utilisees lors de la conception: HTML, CSS, JS, JQuery et PHP.",
    image: "/images/global-marine-service.JPG",
    link: "https://global-marine-services.com/",
    details: "En ligne"
  },
  {
    title: "E-Daara - Projet de certification FORCE-N (Développement Logiciel Python)",
    description: "Plateforme e-learning conçue avec une stack full-stack : Django (back-end), Angular (front-end), PostgreSQL (base de données), et AWS pour le déploiement.",
    image: "/images/edaara.JPG",
    link: "https://github.com/AlassaneSylla",
    details: "Code Github"
  },
  {
    title: "Xakilo - Application moderne de gestion d'inventaire",
    description: "Application en cours de conception (finalisation prévue en juillet), dédiée à la gestion de stock. Stack utilisée : React, Django, Framer Motion, Material UI, et SweetAlert pour les interactions utilisateur.",
    image: "/images/xakilo.JPG",
    details: "En cours"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="teal.500"
      isDarkBackground
      p={{ base: 4, md: 10 }}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading
        as="h1"
        id="projects-section"
        fontSize={{ base: "xl", md: "2xl" }}
        mb={8}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <StarIcon /> Mes Projets
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }}
        gridGap={16}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.image}
            loading="lazy"
            details={project.details}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
