import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

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
 ${tw`text-green font-semibold hover:text-green py-4 px-8 border border-green rounded content-center block my-4`};
 background-color: transparent;
 &:hover {
  background: #004102;
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
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-l md:text-xl lg:text-2xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={4}>
      <Me offset={0}>
        <SmallTitle>Hello, I am</SmallTitle>  
        <BigTitle>Christoph Flick.</BigTitle>
        <Subtitle>I'm a software engineer building awesome software.</Subtitle>
      </Me>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Project Pizzabutler"
            bg="linear-gradient(to right, #082A2A 0%, #133B3B 100%)"
          >
            A web application to order food in the web and via mobile app.
            <MetaInfo>Technical Project Lead</MetaInfo>
          </ProjectCard>
          <ProjectCard
            title="This portfolio page"
            link="https://www.christophflick.de"
            bg="linear-gradient(to right, #133B3B 0%, #082A2A 100%)"
          >
            A simple website created with Gatsby.
            <MetaInfo>Hobby</MetaInfo>
          </ProjectCard>
          <ProjectCard
            title="blogstoph"
            link="https://github.com/ChFlick/blogstoph"
            bg="linear-gradient(to right, #082A2A 0%, #133B3B 100%)"
          >
            A simple blogging web application. Initially built to learn react and get into blogging.
            <MetaInfo>Hobby</MetaInfo>
          </ProjectCard>
          <ProjectCard
            title="Personal Node Red Setup"
            link="https://github.com/ChFlick/node-red-setup"
            bg="linear-gradient(to right, #133B3B 0%, #082A2A 100%)"
          >
            Smart Home Central / Controlling system to control all my devices and gather data.
            <MetaInfo>Hobby</MetaInfo>
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={2}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
          every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
          make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids
          want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all
          right?
        </AboutDesc>
      </About>
      <Contact offset={3}>
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
        <Footer>
          &copy; 2019 by Christoph Flick.{' '}
          <a href="https://github.com/ChFlick/chflick.github.io">Github Repository</a>. Made with ❤️{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
