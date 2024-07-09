import React from 'react'
import { useState } from 'react'
import { Container,Wrapper,Title,Desc, ToggleButtonGroup,ToggleButton,Divider,CardContainer} from './ProjectStyle'
import ProjectCards from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');

    const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  return (
    <>
    <Container id='projects'>
    <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'React' ?
            <ToggleButton active value="React" onClick={() => setToggle('React')}>FULLSTACK APP'S</ToggleButton>
            :
            <ToggleButton value="React" onClick={() => setToggle('React')}>FULLSTACK APP'S</ToggleButton>
          }
          {/* <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          } */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && sortedProjects.map((project) => (
              <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {sortedProjects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
    </>
  )
}

export default Projects