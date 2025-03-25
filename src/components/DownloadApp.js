import React from "react";
import styled, { keyframes } from "styled-components";

// Define the rotating animation for the gradient border
const rotateAnimation = keyframes`
  0% {
    background: linear-gradient(0deg, #00bfff, #800080, #ff69b4);
  }
  100% {
    background: linear-gradient(360deg, #00bfff, #800080, #ff69b4);
  }
`;

const DownloadSection = styled.section`
  padding: 96px 20px;
  background: rgba(215, 250, 255, 1);
  text-align: center;
  width: 100%; /* Use 100% width for responsiveness */
  max-width: 1520px; /* Cap the width for larger screens */
  margin: 0 auto; /* Center the section horizontally */
  box-sizing: border-box; /* Include padding in width calculation */

  /* Mobile adjustments */
  @media (max-width: 768px) {
    padding: 40px 15px; /* Reduced padding for mobile */
  }
`;

const DownloadHeading = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  color: #0e91a5;

  /* Mobile adjustments */
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const DownloadTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: black;

  /* Mobile adjustments */
  @media (max-width: 768px) {
    font-size: 1.8rem; /* Reduced font size for mobile */
    margin-bottom: 10px;
  }
`;

const DownloadText = styled.p`
  font-family: Open Sans;
  font-size: 1rem;
  color: black;
  margin-bottom: 30px;
  max-width: 1100px; /* Limit text width for better readability on desktop */
  margin-left: auto;
  margin-right: auto;

  /* Mobile adjustments */
  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly smaller font for mobile */
    margin-bottom: 20px;
    line-height: 1.5; /* Improved readability */
  }
`;

const StoreButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  border-radius: 8px;

  /* Mobile adjustments */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack buttons vertically */
    gap: 15px; /* Reduced gap for mobile */
    align-items: center; /* Center the buttons */
  }
`;

const StoreButton = styled.a`
  position: relative;
  background: black;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  border-top: none; /* No border on top */
  border-left: 1.5px solid rgba(52, 152, 219, 1); /* Left border with rgba */
  border-right: 1.5px solid rgba(52, 152, 219, 1); /* Right border with rgba */
  border-bottom: 1.5px solid rgba(52, 152, 219, 1); /* Bottom border with rgba */
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(0deg, #00bfff, #800080, #ff69b4);
    z-index: -1;
    border-radius: 10px;
    animation: ${rotateAnimation} 5s linear infinite;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  }

  &:hover::before {
    animation: ${rotateAnimation} 1s linear infinite;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    width: 80%; /* Make buttons wider on mobile */
    max-width: 300px; /* Cap the width for larger mobile screens */
    justify-content: center; /* Center the content inside the button */
    padding: 10px 15px; /* Slightly smaller padding */
    font-size: 0.9rem; /* Smaller font size */
  }
`;

const DownloadApp = () => {
  return (
    <DownloadSection>
      <DownloadHeading>DOWNLOAD</DownloadHeading>
      <DownloadTitle>Get Chatty Now!</DownloadTitle>
      <DownloadText>
        Get started with Chatty in seconds! Download the app on Google Play or
        the App Store to unlock your personal AI assistant, ready to help you
        stay organized, answer questions, and simplify daily tasks. Chatty is
        just a tap away—available anytime, anywhere.
      </DownloadText>
      <StoreButtons>
        <StoreButton href="#">
          <img
            src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000"
            alt="Google Play"
          />
          Google Playstore
        </StoreButton>
        <StoreButton href="#">
          <img
            src="https://img.icons8.com/?size=100&id=4PbFeZOKAc61&format=png&color=000000"
            alt="Apple App Store"
          />
          Apple Appstore
        </StoreButton>
        <StoreButton href="#">
          <img
            src="https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
            alt="Microsoft Store"
          />
          Microsoft Store
        </StoreButton>
      </StoreButtons>
    </DownloadSection>
  );
};

export default DownloadApp;