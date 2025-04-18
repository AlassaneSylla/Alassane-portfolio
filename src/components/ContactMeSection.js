import React, {useEffect} from "react";
import useSubmit from "../hooks/useSubmit";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Textarea, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import {useAlertContext} from "../context/alertContext";
import { EmailIcon } from "@chakra-ui/icons";
import Swal from 'sweetalert2';
//firebase imports
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
//for realtime alert
import emailjs from 'emailjs-com';


const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await addDoc(collection(db, "messages"), {
          firstName: values.firstName,
          email: values.email,
          type: values.type,
          comment: values.comment,
          createdAt: serverTimestamp()
        });
        
        //send mail with EmailJS
        console.log('Envoi vers EmailJS…');
        emailjs.send(
          'service_u7sl9v1',
          'template_46b2uor',
          {
            name: values.firstName,
            email: values.email,
            comment: values.comment,
          },
          'Aoqju55u5IgrclOLQ'
        )
        .then((response) => {
          console.log('Email envoyé avec succès !', response.status, response.text);
        })
        .catch((err) => {
          console.error(`Erreur lors de l'envoi de l'email`, err);
        });

        console.log("Message enregistré !");

        Swal.fire({
          title: 'Message envoyé !',
          text: `Merci ${values.firstName}, je vous répondrai dans les plus brefs délais.`,
          icon: 'success',
          confirmButtonColor: '#319795',
        });

        resetForm();
      }
      catch (error) {
        console.error("Erreur Firestore :", error);
        Swal.fire({
          title: 'Erreur',
          text: `Un problème est survenu, veuillez réessayer plus tard.`,
          icon: 'error',
          confirmButtonColor: '#E53E3E',
        });
      }

      // submit('/alassane-api', values);
      // if (response?.type === 'success') {
      //   onOpen('succès', `Merci pour votre soumission ${values.firstName}, nous vous répondrons dans les plus brefs délais !`);
      //   Swal.fire({
      //     title: 'Message envoyé !',
      //     text: `Merci ${values.firstName}, je vous répondrai dans les plus brefs délais.`,
      //     icon: 'success',
      //     confirmButtonColor: '#319795',
      //   });
      //   resetForm();
      // }
      // else if (response?.type === 'erreur') {
      //   onOpen('erreur', `Un problème s'est produit, veuillez réessayer plus tard !`);
      //   Swal.fire({
      //     title: 'Erreur',
      //     text: `Un problème est survenu, veuillez réessayer plus tard.`,
      //     icon: 'error',
      //     confirmButtonColor: '#E53E3E',
      //   });
      // }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(`le prénom est obligatoire`),
      email: Yup.string().email(`Courriel non valide`).required(`L'adresse électronique est requise`),
      type: Yup.string().required(`Veuillez sélectionner un type de demande`),
      comment: Yup.string().required(`un message est nécessaire`)
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="gray.200"
      py={4}
      spacing={8}
      color='#000000'
    >
      <VStack
        w={{ base: "100%", md: "1024px" }}
        p={{ base: 6, md: 32 }}
        alignItems="flex-start"
      >
        <Heading
          as="h1"
          fontSize={{ base: "xl", md: "2xl" }}
          id="contactme-section">
          <EmailIcon /> Contactez-moi
        </Heading>
        <Box data-aos="fade-up" p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName" color="teal.600">
                  Nom et prénom
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  bg="white"
                  color="teal.800"
                  borderColor="gray.300"
                  focusBorderColor="teal.500"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email" color="teal.600">
                  Adresse électronique
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  bg="white"
                  color="teal.800"
                  borderColor="gray.300"
                  focusBorderColor="teal.500"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type" color="teal.600">Type de demande</FormLabel>
                <Select
                  id="type"
                  name="type"
                  bg="white"
                  color="teal.800"
                  borderColor="gray.300"
                  focusBorderColor="teal.500"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="hireMe">Proposition de projet freelance</option>
                  <option value="openSource">Conception de site web</option>
                  <option value="colab">Collabaration</option>
                  <option value="other">Autres</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment" color="teal.600">Votre message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  bg="white"
                  color="teal.800"
                  borderColor="gray.300"
                  focusBorderColor="teal.600"
                  minH={120}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                data-aos="zoom-in-up"
                type="submit"
                colorScheme="teal"
                width={{ base: "100%", md: "full" }}
                isLoading={isLoading}
                mt={6}
              >
                Envoyer
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
