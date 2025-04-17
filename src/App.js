import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

import { Suspense, lazy, useEffect } from "react";
const Header = lazy(() => import("./components/Header"));
const LandingSection = lazy(() => import("./components/LandingSection"));
const AboutMeSection = lazy(() => import("./components/AboutMe"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const SkillsSection = lazy(() => import("./components/Skills"));
const StadiesSection = lazy(() => import('./components/Studies'));
const ContactMeSection = lazy(() => import("./components/ContactMeSection"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <LandingSection />
          <AboutMeSection/>
          <ProjectsSection />
          <SkillsSection/>
          <StadiesSection/>
          <ContactMeSection />
          <Footer />
          </Suspense>
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
