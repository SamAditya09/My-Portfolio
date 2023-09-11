import React from "react";
import {
  HeroBg,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/Photo.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import HeroBgAnimation from "../HeroBgAnimation/HeroBgAnimation";

export const HeroSection = () => {
  return (
    <>
      <div id="about">
        <HeroContainer>
          <HeroBg>
            <HeroBgAnimation />
          </HeroBg>
          <HeroInnerContainer>
            <HeroLeftContainer id="Left">
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <SubTitle>{Bio.description}</SubTitle>
              <ResumeButton
                style={{ textDecoration: "none" }}
                href={Bio.resume}
                target="display"
              >
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>

            <HeroRightContainer id="Right">
              <Img src={HeroImg} alt="hero-image" />
            </HeroRightContainer>
          </HeroInnerContainer>
        </HeroContainer>
      </div>
    </>
  );
};
