import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:647-979-3954">(647) 979-3954</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:alsaboaa@mcmaster.ca">alsaboaa@mcmaster.ca</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Innovating one project at a time</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="http://github.com">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="http://linkedin.com">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </SocialContainer>
            </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
