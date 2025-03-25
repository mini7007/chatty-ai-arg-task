import React from "react";
import styled from "styled-components";
import profile1 from "../components/images/sofia.jpeg"; // Placeholder; ideally, use unique images per user
import googlePlayIcon from "../components/images/play-store.png";
import appleStoreIcon from "../components/images/app-store.png";
import trustpilotIcon from "../components/images/trustpilot.png";

// Styled Components for Review Section
const ReviewContainer = styled.section`
  padding: 80px 20px;
  background: #f5f9ff;
  text-align: center;
  overflow: hidden;
`;

const ReviewHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0e91a5;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

const ReviewTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
`;

const ReviewSubtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 40px;
  line-height: 1.5;
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  max-width: 1100px;
  margin: auto;
`;

const ReviewCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  animation: fadeIn 0.5s ease-out forwards; /* Fade-in animation */
  opacity: 0; /* Start hidden for animation */

  /* Hover effect */
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h4 {
    font-size: 1.1rem;
    color: #333;
    margin: 0;
  }
  p {
    font-size: 0.9rem;
    color: #666;
    margin: 5px 0;
  }
`;

const Rating = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0e91a5;
  margin: 5px 0;
  animation: twinkle 2s infinite; /* Twinkling stars */
`;

const HeartIcon = styled.span`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  color: #0e91a5;
  animation: pulse 1.5s infinite; /* Pulsing heart */
`;

const SourceIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 20px;
  /* Hover rotation */
  &:hover {
    transform: rotate(360deg);
    transition: transform 0.5s ease;
  }
`;

const BoldRating = styled.span`
  font-weight: bold;
  color: black;
`;
const BoldText = styled.span`
  font-weight: bold;
  color:black;
`;

// Define CSS animations using a styled-component
const GlobalAnimations = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% {
      transform: translateX(-50%) scale(1);
    }
    50% {
      transform: translateX(-50%) scale(1.1);
    }
    100% {
      transform: translateX(-50%) scale(1);
    }
  }

  @keyframes twinkle {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ReviewSection = () => {
  const reviews = [
    {
      name: "Mira Thomson",
      rating: 5.0,
      source: "Google Playstore",
      icon: googlePlayIcon,
    },
    {
      name: "Sarah K.",
      rating: 4.9,
      source: "Google Playstore",
      icon: googlePlayIcon,
    },
    {
      name: "John Doe",
      rating: 5.0,
      source: "Apple App Store",
      icon: appleStoreIcon,
    },
    {
      name: "Alice Johnson",
      rating: 4.8,
      source: "TrustPilot",
      icon: trustpilotIcon,
    },
    {
      name: "Bob Smith",
      rating: 5.0,
      source: "Google Playstore",
      icon: googlePlayIcon,
    },
    {
      name: "Emily Davis",
      rating: 4.9,
      source: "Apple App Store",
      icon: appleStoreIcon,
    },
    {
      name: "Michael Brown",
      rating: 5.0,
      source: "TrustPilot",
      icon: trustpilotIcon,
    },
    {
      name: "Linda Wilson",
      rating: 4.9,
      source: "Google Playstore",
      icon: googlePlayIcon,
    },
    {
      name: "David Lee",
      rating: 5.0,
      source: "Apple App Store",
      icon: appleStoreIcon,
    },
  ];

  return (
    <>
      <GlobalAnimations /> {/* Injects animation keyframes */}
      <ReviewContainer>
        <ReviewHeading>Reviews</ReviewHeading>
        <ReviewTitle>What people are saying about Chatty</ReviewTitle>
        <ReviewSubtitle>
          See why users love Chatty, with over <BoldText>100,000+</BoldText> reviews averaging  <BoldText>4.9</BoldText> stars
          on Google and Apple Stores.<br/> Our chatbot delivers satisfaction,
          reliability, and powerful assistance that users trust worldwide. <br/>
          Discover what makes Chatty a top choice in assistant!
        </ReviewSubtitle>
        <ReviewGrid>
          {reviews.map((review, index) => (
            <ReviewCard key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProfileContainer>
                <ProfileImage
                  src={profile1}
                  alt={`Profile picture of ${review.name}`}
                />
                <HeartIcon aria-hidden="true">❤️</HeartIcon>
              </ProfileContainer>
              <TextContent>
                <h4>{review.name}</h4>
                <Rating>{'⭐'.repeat(Math.floor(review.rating))}</Rating>
                <p>
                  Rated <BoldRating>{review.rating}</BoldRating> on {review.source}
                </p>
              </TextContent>
              <SourceIcon src={review.icon} alt={`Logo of ${review.source}`} />
            </ReviewCard>
          ))}
        </ReviewGrid>
      </ReviewContainer>
    </>
  );
};

export default ReviewSection;