import React from "react";
import styled from "styled-components";
import image1 from "../components/images/chatbot1.png";
import image2 from "../components/images/chatbot1.png";
import image3 from "../components/images/chatbot1.png";
import image4 from "../components/images/chatbot1.png";

const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background: rgba(4, 27, 41, 1); /* Dark background */
  color: white;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`;

// Left side 
const LeftSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 400px;
  margin-right: 50px;
  position: relative;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
    @media (max-width: 768px) {
    display: none; 
  }
`;

const Image = styled.img`
  width: 178.66px;
  height: 386.64px;
  border-radius: 12px;
  border: 2px solid white;
  position: relative;
  top: -29px;
  left: -35px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 150px;
    height: auto;
    top: 0;
    left: 0;
  }
`;

// Right side 
  const RightSection = styled.div`
    text-align: center;
    max-width: 600px;
  `;

  const SubTitle = styled.p`
    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: 10px;
  `;

  const Title = styled.h2`
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 40px;
  `;

  const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: auto;
    max-width: 700px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `;

  const StatBox = styled.div`
    width: 300px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 2px solid rgba(14, 145, 165, 1);
  `;

  const StatNumber = styled.h3`
    font-weight: 700;
    font-size: 48px;
    color: white;
    margin-bottom: 10px;
  `;

  const StatText = styled.p`
    font-size: 1rem;
    opacity: 0.8;
  `;

const Content = () => {
  return (
    <ContentContainer>
      {/* Left Side - Images */}
      <LeftSection>
        <Image src={image1} alt="Feature 1" />
        <Image src={image2} alt="Feature 2" />
        <Image src={image3} alt="Feature 3" />
        <Image src={image4} alt="Feature 4" />
      </LeftSection>

      {/* Right Side - Stats */}
      <RightSection>
        <SubTitle>Chatty helping thousands of users</SubTitle>
        <Title>We're only just getting <br /> started on our journey</Title>
        <StatsGrid>
          <StatBox>
            <StatNumber>500K+</StatNumber>
            <StatText>Active users worldwide</StatText>
          </StatBox>
          <StatBox>
            <StatNumber>100M+</StatNumber>
            <StatText>Chat responses every day</StatText>
          </StatBox>
          <StatBox>
            <StatNumber>0.01sec</StatNumber>
            <StatText>Average response time</StatText>
          </StatBox>
          <StatBox>
            <StatNumber>100K+</StatNumber>
            <StatText>5-star reviews</StatText>
          </StatBox>
        </StatsGrid>
      </RightSection>
    </ContentContainer>
  );
};

export default Content;
