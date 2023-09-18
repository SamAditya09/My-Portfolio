import React from "react";
import { Document,Card, Description,Date,Role,Span, Image,Body,Company,Top,Skills,ItemWrapper,Skill} from "./ExperienceCardStyle.";

const ExperienceCard = ({ experience }) => {
  return (
    <>
      <Card>
        <Top>
          <Image src={experience.img} />
          <Body>
            <Role>{experience.role}</Role>
            <Company>{experience.company}</Company>
            <Date>{experience.date}</Date>
          </Body>
        </Top>
        <Description>
          {experience?.desc && <Span>{experience?.desc}</Span>}
          {experience?.skills && (
            <>
              <br />
              <Skills>
                <b>Skills:</b>
                <ItemWrapper>
                  {experience?.skills?.map((skill, index) => (
                    <Skill>• {skill}</Skill>
                  ))}
                </ItemWrapper>
              </Skills>
            </>
          )}
        </Description>
        {experience.doc && 
          <a href={experience.doc} target="new">
            <Document src={experience.pdfimg} />
          </a>
        }
      </Card>
    </>
  );
};

export default ExperienceCard;
