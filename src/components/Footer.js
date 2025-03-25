import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Styled Components
const FooterContainer = styled.footer`
  background: rgba(4, 27, 41, 1);
  color: white;
  padding: 50px 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;

  @media (max-width: 768px) {
    min-width: 100%;
    text-align: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactInfo = styled.p`
  font-family: Open Sans;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 20px; /* Added spacing between logo and contact info */

  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    margin-top: 15px; /* Adjusted spacing for mobile */
  }
`;

const SectionTitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  margin: 5px 0;
  transition: 0.3s ease;

  &:hover {
    color: #00bfff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FooterBottomLink = styled(FooterLink)`
  &:not(:last-child)::after {
    content: "|";
    color: white;
    margin: 0 10px;
  }

  @media (max-width: 768px) {
    &:not(:last-child)::after {
      margin: 0 8px;
    }
  }
`;

const SubscribeSection = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center-align the entire Subscribe section */
  }
`;

const SubscribeInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 200px;
  font-size: 1rem;
  background: white;
  &::placeholder {
    color: lightgray;
  }

  @media (max-width: 768px) {
    width: 80%;
    max-width: 300px;
  }
`;

const SubscribeButton = styled.button`
  background: #0099cc;
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
  transition: 0.3s ease;
  transform: translateX(0);

  &:hover {
    background: #0077aa;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const FooterDivider = styled.hr`
  border: 0;
  height: 1px;
  background: lightgray;
  margin: 20px auto;
  width: 80%;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: auto;
  padding: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  text-decoration: none;
  color: white;
  transition: 0.3s ease;
  transform: scale(1);

  &:hover {
    color: #00bfff;
    transform: scale(1.2);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: lightgray;
  text-align: center;
  flex: 1;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
    order: 3;
    gap: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <img
              src="https://ik.imagekit.io/Myimage/logo.PNG?updatedAt=1742810382401"
              alt="Chatty.ai"
              width="30"
            />
            Chatty.ai
          </Logo>
          <ContactInfo>+1 (1234) 567-89-01</ContactInfo>
          <ContactInfo>support@chatty.ai</ContactInfo>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Quick Links</SectionTitle>
          <QuickLinks>
            <LinkColumn>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Reviews</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
            </LinkColumn>
            <LinkColumn>
              <FooterLink href="#">Playstore</FooterLink>
              <FooterLink href="#">Appstore</FooterLink>
              <FooterLink href="#">Microsoft Apps</FooterLink>
            </LinkColumn>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <SubscribeSection>
            <SectionTitle>Subscribe</SectionTitle> {/* Removed inline style */}
            <div>
              <SubscribeInput type="email" placeholder="Get product updates" />
              <SubscribeButton>→</SubscribeButton>
            </div>
          </SubscribeSection>
        </FooterSection>
      </FooterContent>

      <FooterDivider />

      <FooterBottom>
        <SocialIcons>
          <SocialIcon href="#">
            <i className="fab fa-linkedin"></i>
          </SocialIcon>
          <SocialIcon href="#">
            <i className="fab fa-facebook"></i>
          </SocialIcon>
          <SocialIcon href="#">
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon href="#">
            <i className="fab fa-instagram"></i>
          </SocialIcon>
        </SocialIcons>

        <Copyright>© 2020 LIFT MEDIA. ALL RIGHTS RESERVED</Copyright>

        <FooterBottomLinks>
          <FooterBottomLink href="#">About</FooterBottomLink>
          <FooterBottomLink href="#">Privacy Policy</FooterBottomLink>
          <FooterBottomLink href="#">Terms & Conditions</FooterBottomLink>
        </FooterBottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;