import React from "react";
import styled from "styled-components";
import { FaClock, FaBolt, FaCog, FaCut, FaGlobe, FaBook } from "react-icons/fa";

// Styled component for the outer circle container
const IconWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  margin: 0 auto 15px;
`;

// Styled component for the outer circle (semi-transparent)
const OuterCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #D7FAFF;
  z-index: 1;
`;

// Styled component for the inner circle (solid background) with the icon
const IconContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #0E91A5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  z-index: 2;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: ${props => props.hoverColor || ""};
    transform: scale(1.1);
  }
`;

// Array of features (unchanged)
const features = [
  { 
    icon: <FaClock size={30} />, 
    title: "24/7 Availability", 
    description: "Always online for instant assistance, enhancing productivity and ensuring support whenever you need it.",
  },
  { 
    icon: <FaBolt size={30} />, 
    title: "Instant Responses", 
    description: "Get answers in seconds, reducing wait times and improving overall efficiency in your interactions.",
  },
  { 
    icon: <FaCog size={30} />, 
    title: "Personalized Interactions", 
    description: "Adapts to your preferences, delivering tailored experiences that meet your unique needs and expectations.",
  },
  { 
    icon: <FaCut size={30} />, 
    title: "Task Automation", 
    description: "Streamline up to 70% of routine tasks, freeing up time for more important activities and boosting productivity.",
  },
  { 
    icon: <FaGlobe size={30} />, 
    title: "Scalable for All Needs", 
    description: "Designed to accommodate diverse requirements, from personal use to comprehensive customer support solutions.",
  },
  { 
    icon: <FaBook size={30} />, 
    title: "Continuous Learning", 
    description: "Improves with every interaction, offering smarter solutions and enhanced performance over time for users.",
  },
];

// Features component
const Features = () => {
  return (
    <FeaturesContainer>
      <FeatureHeading>FEATURES</FeatureHeading>
      <Title>Discover the Power of Chatty</Title>
      <Description>
        Experience the AI ChatBot trusted by over 10,000 users, delivering 24/7
        support and automating up to 70% of routine tasks. Get responses 90%
        faster and enjoy personalized assistance, tailored to make every
        interaction seamless.
      </Description>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper>
              <OuterCircle />
              <IconContainer hoverColor={feature.hoverColor}>
                {feature.icon}
              </IconContainer>
            </IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

// Styled components for layout
const FeaturesContainer = styled.section`
  width: 100%; /* Full width for responsiveness */
  background-color: #F5F6FA;
  padding: 40px 16px; /* Reduced padding for mobile, 16px on sides for spacing */
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 96px 24px; /* Larger padding for desktop */
  }
`;

const FeatureHeading = styled.h3`
  font-size: 1rem; /* Slightly smaller for mobile */
  font-weight: bold;
  color: #0E91A5;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem; /* Adjusted for mobile */
  font-weight: bold;
  margin-bottom: 15px;
  color: #1A2A44;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: 0.9rem; /* Adjusted for mobile */
  color: #6B7280;
  max-width: 90%; /* Constrain width for mobile */
  margin: 0 auto 30px;
  line-height: 1.6;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    max-width: 700px;
    margin-bottom: 50px;
  }
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-direction: column; /* Stack vertically for mobile */
  gap: 20px; /* Reduced gap for mobile */
  max-width: 100%; /* Ensure it fits within the container */
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1000px;
  }
`;

const FeatureCard = styled.div`
  background: #FFFFFF;
  padding: 20px; /* Adjusted padding for mobile */
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  border: 2px solid transparent;
  transition: border-color 0.3s ease, transform 0.3s ease;
  width: 100%; /* Full width of the container */
  max-width: 400px; /* Constrain card width for mobile */
  margin: 0 auto; /* Center the card */

  &:hover {
    border-color: #00bfff;
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    padding: 25px;
    max-width: none;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem; /* Adjusted for mobile */
  font-weight: bold;
  color: #1A2A44;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem; /* Adjusted for mobile */
  color: #6B7280;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default Features;