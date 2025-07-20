import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaDiscord } from 'react-icons/fa';

import DevfolioButton from './DevfolioButton';
import logo from '../images/ideax_x_only.svg'; 

const JoinCardContainer = styled.div`
  background: linear-gradient(135deg, rgba(11, 15, 51, 0.5), rgba(30, 27, 75, 0.5));
  border: 1px solid rgba(128, 90, 213, 0.4);
  border-radius: 20px;
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
  color: white;
  box-shadow: 0 0 30px rgba(128, 90, 213, 0.1);
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.8rem; /* Increased gap */
  margin-bottom: 1.5rem;
`;

const Logo = styled.img`
  width: 68px;
  height: 68px;
  object-fit: contain;
  margin-left: 0.25rem;
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Line = styled.span`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;

  &:nth-child(2) {
    font-size: 2.2rem;
  }

  &:nth-child(3) {
    font-size: 1.6rem;
  }
`;

const Line1 = styled.span`
  font-size: 2.8rem;
  font-weight: bolder;
  line-height: 1.4;
`;

const DevfolioWrapper = styled.div`
  margin: 1.5rem 0;
  text-align: center;
`;

const DiscordButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 500;
  text-decoration: none;
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(168, 139, 250, 0.4);
  }
`;

const Subtext = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #a78bfa;
  text-align: center;
`;

const JoinCard = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Devfolio) {
        window.Devfolio.loadEmbeds();
      }
    };
  }, []);

  return (
    <JoinCardContainer>
      <TitleRow>
        <Logo src={logo} alt="Logo" />
        <TitleText>
          <Line1>MBMC</Line1>
          <Line>IdeaX 2025</Line>
        </TitleText>
      </TitleRow>

      <DevfolioWrapper>
        <DevfolioButton />
      </DevfolioWrapper>

      <div style={{ textAlign: 'center' }}>
        <DiscordButton
          href="https://discord.gg/FDzGSRty"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
          Join Our Discord
        </DiscordButton>
      </div>

      <Subtext>Innovation begins with you!</Subtext>
    </JoinCardContainer>
  );
};

export default JoinCard;
