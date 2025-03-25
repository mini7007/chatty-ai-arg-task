import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaChevronDown, FaBars } from "react-icons/fa";
import heroImage from "./assests/hero-image.png";

// Define animations
const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// Styled Components for Header
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: transparent;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-wrap: wrap;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    gap: 15px;
    padding: 15px 20px;
    background: #001f3f;
    position: relative;
    z-index: 10;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    gap: 15px;
    padding: 15px 20px;
    background: #001f3f;
    position: relative;
    z-index: 10;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    font-size: 1.5rem;
  }
`;

const NavLink = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: #00bfff;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #001f3f;
  border-radius: 5px;
  width: 150px;
  display: ${({ open }) => (open ? "block" : "none")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    box-shadow: none;
    background: #003366;
  }
`;

const Login = styled.a`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: #00bfff;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
  }
`;

const StartChattingButton = styled.button`
  background: rgb(0, 0, 0);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background: rgb(6, 69, 90);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 16px;
    width: 100%;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Styled Components for Hero Section
const HeroContainer = styled.section`
  text-align: center;
  color: white;
  padding: 80px 20px;
  background: linear-gradient(135deg, #041727);
  position: relative;
  border-radius: 0.8rem;

  @media (max-width: 768px) {
    padding: 40px 15px;
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 40px;
  animation: ${fadeIn} 1.2s ease-out;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  animation: ${fadeIn} 1.4s ease-out;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
    order: 1;
  }
`;

const CTAButton = styled.button`
  background: ${({ primary }) => (primary ? "#0E91A5" : "transparent")};
  color: ${({ primary }) => (primary ? "white" : "#ffffff")};
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: ${({ primary }) => (primary ? "none" : "1px solid #00bfff")};
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background: ${({ primary }) => (primary ? "#0A0A0A" : "#0A0A0A")};
    color: white;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 8px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 20px;
    order: 2;
  }
`;

const UShape = styled.div`
  position: absolute;
  width: 450px;
  height: 250px;
  border: 6px solid rgba(255, 255, 255, 0.3);
  border-bottom: none;
  border-radius: 200px 200px 0 0;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 40px;

  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 150px;
    border: 4px solid rgba(255, 255, 255, 0.5);
    border-bottom: none;
    border-radius: 150px 150px 0 0;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroImage = styled.img`
  max-width: 300px;
  height: auto;
  z-index: 2;
  position: relative;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

// Styled Components for Footer
const FooterContainer = styled.footer`
  background: #001f3f;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
  border: 1px solid #00bfff;
  width: 95%;
  margin: 0px auto;
  transform: translateY(50%);
  border-radius: 0.8rem;

  @media (max-width: 768px) {
    padding: 15px;
    gap: 27px;
    transform: translateY(30%);
    flex-wrap: nowrap;
    white-space: nowrap;
    // animation: ${marquee} 15s linear infinite;
    justify-content: flex-start;
    overflow: hidden;

    &:hover {
      animation-play-state: paused;
    }
  }
`;

const FooterItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: transform 0.3s ease, color 0.3s ease;

  &:not(:last-child)::after {
    content: "";
    color: white;
    margin-left: 20px;
  }

  &:hover {
    transform: scale(1.05);
    color: #00bfff;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-right: 15px;

    &:not(:last-child)::after {
      margin-left: 15px;
    }
  }
`;

const Hero = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar>
        <Logo>chatty.ai</Logo>
        <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </HamburgerMenu>
        <LeftSection isOpen={menuOpen}>
          <NavLink
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
            onClick={() => setFeaturesOpen(!featuresOpen)}
          >
            Features <FaChevronDown />
            <DropdownMenu open={featuresOpen}>
              {/* Dropdown items can be added here */}
            </DropdownMenu>
          </NavLink>

          <NavLink
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
            onClick={() => setResourcesOpen(!resourcesOpen)}
          >
            Resources <FaChevronDown />
            <DropdownMenu open={resourcesOpen}>
              {/* Dropdown items can be added here */}
            </DropdownMenu>
          </NavLink>

          <NavLink href="#">Pricing</NavLink>
        </LeftSection>

        <RightSection isOpen={menuOpen}>
          <Login href="#">Login</Login>
          <StartChattingButton>🌴Start Chatting</StartChattingButton>
        </RightSection>
      </Navbar>

      <HeroContainer>
        <Title>The Smartest AI Assistant, Ready to Chat!</Title>
        <SubTitle>
          Simplify tasks, automate routines, and enjoy personalized
          interactions—all in one chat.
        </SubTitle>
        <HeroWrapper>
          <UShape />
          <HeroImage src={heroImage} alt="AI Assistant" />
        </HeroWrapper>
        <CTAContainer>
          <CTAButton primary>▶ Demo</CTAButton>
          <CTAButton>
            <span style={{ marginRight: "5px" }}>⚡</span> Get the App
          </CTAButton>
        </CTAContainer>
      </HeroContainer>

      <FooterContainer>
        <FooterItem href="#">Waverio</FooterItem>
        <FooterItem href="#">SquareStone</FooterItem>
        <FooterItem href="#">Martino</FooterItem>
        <FooterItem href="#">Virogan</FooterItem>
        <FooterItem href="#">Vertex</FooterItem>
        <FooterItem href="#">Aromix</FooterItem>
      </FooterContainer>
    </>
  );
};

export default Hero;