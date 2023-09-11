import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { darkTheme } from "./utils/Themes";
import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import ProjectDetails from "./Components/ProectDetails/ProjectDetail";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Body>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route
              path="/projects"
              element={
                <Wrapper>
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                </Wrapper>
              }
            />
            <Route
              path="/education"
              element={
                <Wrapper>
                  <Education />
                </Wrapper>
              }
            />
          </Routes>
          <Skills />
          <Experience />
          <Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </Wrapper>
          <Wrapper>
            <Education />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </ThemeProvider>
  );
}

export default App;
