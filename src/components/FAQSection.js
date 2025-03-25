import React, { useState } from "react";
import styled from "styled-components";

// Styled Components for FAQ Section
const FAQContainer = styled.section`
  padding: 80px 20px;
  background: #f8fbff;
  text-align: center;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const FAQHeading = styled.h3`
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  color: #0e91a5;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }
`;

const FAQSubtitle = styled.p`
  font-family: Open Sans;
  font-size: 1rem;
  color: #535862;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 30px;
    line-height: 1.5;
  }
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  justify-content: center;
  max-width: 1100px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    max-width: 100%;
  }
`;

const FAQCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Question = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #170f49;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 10px; /* Ensure consistent spacing between text and button */

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #6f6c90;
  margin-top: 10px;
  display: ${(props) => (props.expanded ? "block" : "none")};

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 8px;
  }
`;

const ToggleButton = styled.button`
  background: ${(props) => (props.expanded ? "#0e91a5" : "#eee")};
  color: white;
  font-size: 1.9rem; /* Consistent font size for both desktop and mobile */
  font-weight: bold;
  border: none;
  border-radius: 30%; 
  width: 40px; /* Consistent size */
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0; /* Prevent button from shrinking */
  line-height: 1; /* Prevent line-height from affecting alignment */

  @media (max-width: 768px) {
    width: 35px; /* Slightly smaller for mobile */
    height: 35px;
    font-size: 1.9rem; /* Adjust font size for better fit */
  }
`;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I get started with Chatty?",
      answer:
        "Simply download the app from Google Play or the App Store, follow the setup guide, and start using Chatty instantly.",
    },
    {
      question: "Can I customize Chatty’s responses to fit my needs?",
      answer:
        "Yes! Chatty allows customization of responses through the settings panel.",
    },
    {
      question: "Is Chatty available in multiple languages?",
      answer: "Yes, Chatty supports multiple languages for a global audience.",
    },
    {
      question: "What types of tasks can Chatty assist with?",
      answer:
        "Chatty can assist with scheduling, reminders, customer support, and more!",
    },
    {
      question: "Can AI cancel my subscription?",
      answer:
        "No, AI cannot cancel subscriptions, but it can guide you through the process.",
    },
    {
      question: "What kind of support is available if I encounter issues?",
      answer:
        "We offer 24/7 support through our website and in-app help center.",
    },
    {
      question: "Can Chatty generate images?",
      answer:
        "Yes, Chatty can generate images using AI models like DALL·E or Midjourney.",
    },
  ];

  return (
    <FAQContainer>
      <FAQHeading>FAQs</FAQHeading>
      <FAQTitle>Have Questions?</FAQTitle>
      <FAQSubtitle>
        Our FAQ section covers everything you need to know about Chatty, from
        setup and customization to troubleshooting and support. Find quick,
        helpful answers to make integrating Chatty into your website seamless
        and hassle-free.
      </FAQSubtitle>
      <FAQGrid>
        {faqs.map((faq, index) => (
          <FAQCard key={index}>
            <Question onClick={() => setOpenIndex(index)}>
              {faq.question}
              <ToggleButton expanded={openIndex === index}>
                {openIndex === index ? "−" : "+"}
              </ToggleButton>
            </Question>
            <Answer expanded={openIndex === index}>{faq.answer}</Answer>
          </FAQCard>
        ))}
      </FAQGrid>
    </FAQContainer>
  );
};

export default FAQSection;