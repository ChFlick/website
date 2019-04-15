import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import tw from 'tailwind.macro'
import { colorSchemes } from '../styles/colorSchemes'
import * as Color from 'color'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { SmallTitle, Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Me from '../views/Me'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const ContentsA = styled.a`
  display: contents;
`

const HiButton = styled.button`
 ${tw`cursor-pointer font-semibold py-4 px-8 border-none rounded content-center block my-4`};
 background: ${props => props.theme.links};
 color: white;
 &:hover {
  background: ${props => Color(props.theme.links).darken(.3).hex()};
}
`

const MetaInfo = styled.p`
  ${tw`italic`}
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`pt-12 lg:pt-0 lg:pl-12 text-xl lg:text-2xl xl:text-3xl`};
`

const AboutDesc = styled.p`
  ${tw`md:text-lg lg:text-xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`font-sans text-l md:text-xl lg:text-2xl`};
`

const Footer = styled.footer`
  ${tw`text-center pin-b p-6 font-sans text-md lg:text-lg`};
`

const ColorSwitcher = styled.button`
  ${tw`fixed pin-b sm:left cursor-pointer font-sans py-1 px-4 border-none rounded content-center text-center outline-none`};
  left: 50%;
  transform: translateX(-50%);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background: ${props => Color(props.theme.background).darken(.3).hex()};
  &:hover {
    background: ${props => Color(props.theme.background).darken(.5).hex()};
  }
`

class Index extends React.Component {
  state = {
    themeId: 0,
    theme: {
      ...colorSchemes[0]
    }
  }

  newThemeId = () => {
    let n = Math.floor(Math.random() * colorSchemes.length);
    return n === this.state.themeId ? this.newThemeId() : n;
  }

  changeTheme = () => {
    const newThemeId = this.newThemeId();
    this.setState(() => ({
      themeId: newThemeId,
      theme: colorSchemes[newThemeId]
    }))
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <Layout />
          <ColorSwitcher onClick={this.changeTheme}>Switch Color</ColorSwitcher>
          <Me>
            <SmallTitle>Hello, I am</SmallTitle>
            <BigTitle>Christoph Flick.</BigTitle>
            <Subtitle>I'm a software engineer from Münster, bike capital of Germany.</Subtitle>
          </Me>
          <Projects>
            <Title>Projects</Title>
            <ProjectsWrapper>
              <ProjectCard
                title="Project Pizzabutler"
              >
                A web application to order food in the web and via mobile app.
                <MetaInfo>Technical Project Lead</MetaInfo>
              </ProjectCard>
              <ProjectCard
                title="This portfolio page"
                link="https://www.christophflick.de"
              >
                A simple website created with Gatsby.
                <MetaInfo>Hobby</MetaInfo>
              </ProjectCard>
              <ProjectCard
                title="blogstoph"
                link="https://github.com/ChFlick/blogstoph"
              >
                A simple blogging web application. Initially built to learn react and get into blogging.
                <MetaInfo>Hobby</MetaInfo>
              </ProjectCard>
              <ProjectCard
                title="Personal Node Red Setup"
                link="https://github.com/ChFlick/node-red-setup"
              >
                Smart Home Central / Controlling system to control all my devices and gather data.
                <MetaInfo>Hobby</MetaInfo>
              </ProjectCard>
            </ProjectsWrapper>
          </Projects>
          <About>
            <Title>About Me</Title>
            <AboutHero>
              <Avatar src={avatar} alt="Christoph Flick" />
              <AboutSub>
                <p>
                  Software Development is my passion. I primarily work on web applications, but I also have knowledge in developing desktop applicatios.
                  I'm very passionate about good coding practices and clean code, so that project stay maintainable and can be worked on in the future.
                </p>
                <p>
                  I consider myself a person with hunger for knowledge and I can be fascinated by a new topic quite fast.
                  When I'm not coding, I enjoy spending my time bouldering, gardening, playing board- or computer games, or spending time with friends.
                </p>
              </AboutSub>
            </AboutHero>
            <AboutDesc>
              I graduated in 2013 as Bachelor of Science in Business Computing from the Baden-Wuerttemberg Cooperative State University Mannheim
              and then worked for two years as a software engineer at <a href="http://f-i.de/" target="_blank" rel="noopener noreferrer">Finanz Informatik</a>.
              Now I'm doing my masters degree at Fachhochschule Dortmund while working part-time for
              <a href="http://bitside.de/" target="_blank" rel="noopener noreferrer"> bitside</a>.
            </AboutDesc>
          </About>
          <Contact>
            <Inner>
              <Title>Get In Touch</Title>
              <ContactText>
                If you have an offer or simply want to say hi, just send me an email.
                <ContentsA href="mailto:hi@christophflick.de"><HiButton>Say Hi!</HiButton></ContentsA>
                ...or find me on other platforms:{' '}
                <a href="https://github.com/ChFlick/">GitHub</a> &{' '}
                <a href="https://www.linkedin.com/in/christoph-flick/">LinkedIn</a>
              </ContactText>
            </Inner>
          </Contact>
          <Footer>
            <a href="./impressum">Impressum | </a>
            &copy; 2019 by Christoph Flick.{' '}
            <a href="https://github.com/ChFlick/chflick.github.io">Github Repository</a>. Made with ❤️{' '}
          </Footer>
        </>
      </ThemeProvider>
    )
  }
}

export default Index