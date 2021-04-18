import React from "react";

import {
  Container,
  Footer,
  LogoWrapper,
  FooterMenu,
  BottomFooter,
  OptionWrapper,
  Option,
  BottomFooterText,
  BottomFooterIcons,
  BottomFooterIcon,
} from "./styles";
import { getTranslation } from "../../helpers";
import logo from "../../assets/img/logo.png";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

interface Props {
  language: string;
}

export const FooterComponent: React.FunctionComponent<Props> = ({
  language,
}) => {
  const onClickInsta = (): void => {
    window.open(
      "https://www.instagram.com/smf.advogados_pt?igshid=1ln87f7h0jw98",
      "_blank"
    );
  };

  const onClickLinkedin = (): void => {
    window.open(
      "https://www.linkedin.com/company/sim%C3%B5es-morais-farinha-advogados/",
      "_blank"
    );
  };

  return (
    <Container id="footer">
      <Footer>
        <LogoWrapper>
          <img src={logo} alt="image_logo" />
        </LogoWrapper>
        <FooterMenu>
          <OptionWrapper>
            <Option>
              <a href="#root">{getTranslation("home", language)}</a>
              <ArrowRightAltIcon />
            </Option>
            <Option>
              <a href="#about_us">{getTranslation("about_us", language)}</a>
              <ArrowRightAltIcon />
            </Option>
            <Option>
              <a href="#our_team">{getTranslation("our_team", language)}</a>
              <ArrowRightAltIcon />
            </Option>
            <Option>
              <a href="#practice_areas">
                {getTranslation("practice_areas", language)}
              </a>
              <ArrowRightAltIcon />
            </Option>
          </OptionWrapper>
          <OptionWrapper>
            <Option>
              <a href="#partnerships">
                {getTranslation("partnerships", language)}
              </a>
              <ArrowRightAltIcon />
            </Option>
            <Option>
              <a href="#news">{getTranslation("news", language)}</a>
              <ArrowRightAltIcon />
            </Option>
            <Option>
              <a href="#contact_us">{getTranslation("contacts", language)}</a>
              <ArrowRightAltIcon />
            </Option>
          </OptionWrapper>
        </FooterMenu>
      </Footer>
      <BottomFooter>
        <BottomFooterText>
          {"© Simões, Morais & Farinha. 2021. All rights reserved."}
        </BottomFooterText>
        <BottomFooterIcons>
          <BottomFooterIcon onClick={onClickInsta}>
            <InstagramIcon />
          </BottomFooterIcon>
          <BottomFooterIcon onClick={onClickLinkedin}>
            <LinkedInIcon />
          </BottomFooterIcon>
        </BottomFooterIcons>
      </BottomFooter>
    </Container>
  );
};
