import React from "react";

import {
  Container,
  InnerContainer,
  ImageContainer,
  TextContainer,
  TeamElement,
  BioContainer,
  Name,
  Close,
  Area,
  TitleArea,
  AreaContent,
} from "./styles";
import { ModalTeamType } from "../../App";
import CloseIcon from "@material-ui/icons/Close";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

interface Props {
  language: string;
  modalTeam: ModalTeamType;
  setModalTeam: (modal: ModalTeamType) => void;
}

export const ModalTeamComponent: React.FunctionComponent<Props> = ({
  language,
  modalTeam,
  setModalTeam,
}) => {
  console.log("Modal team");
  console.log({
    language,
    modalTeam,
  });
  const onClickEmail = (email: string): void => {
    window.open(`mailto:${email}`, "_blank");
  };
  const onClickLinkedin = (linkedin: string): void => {
    window.open(linkedin, "_blank");
  };
  const closeModal = (): void =>
    setModalTeam({
      open: false,
      title: "",
      image: "",
      linkedin: "",
      email: "",
      areas: [{ pt: "", en: "" }],
      education: [{ pt: "", en: "" }],
      experience: [{ pt: "", en: "" }],
      languages: [{ pt: "", en: "" }],
    });

  const {
    open,
    title,
    image,
    areas,
    education,
    experience,
    linkedin,
    languages,
    email,
  } = modalTeam;

  // TODO: tentr perceber como vou fazer para ter em conta os idiomas para os conteudos

  return (
    <Container
      style={{ opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden" }}
    >
      <InnerContainer
        style={{
          bottom: open ? 0 : "-100vw",
          right: open ? 0 : "-100vh",
          transform: open ? "rotate(0)" : "rotate(32deg)",
        }}
      >
        <Close onClick={closeModal}>
          <CloseIcon />
        </Close>
        <ImageContainer>
          <TeamElement>
            <img src={image} alt="" />
            <BioContainer>
              <Name>{title}</Name>
              {(linkedin || email) && (
                <div>
                  {linkedin && (
                    <div onClick={(): void => onClickLinkedin(linkedin)}>
                      <LinkedInIcon />
                    </div>
                  )}
                  {email && (
                    <div onClick={(): void => onClickEmail(email)}>
                      <EmailIcon />
                    </div>
                  )}
                </div>
              )}
            </BioContainer>
          </TeamElement>
        </ImageContainer>
        <TextContainer>
          <Area></Area>
          <Area></Area>
          <Area></Area>
          <Area>
            <TitleArea></TitleArea>
            <AreaContent>
              <ul>
                {languages.map((lang) => {
                  // return <li>{lang[language]}</li>;
                })}

                <li></li>
              </ul>
            </AreaContent>
          </Area>
        </TextContainer>
        {/* <TextContainer>
          <Title>{title}</Title>
          <DescriptionsContainer>
            {text.map((simpleText) => (
              <Description>{getTranslation(simpleText, language)}</Description>
            ))}
            Description to changeeeeeeeeeeeeeeeeeee
          </DescriptionsContainer>
          <TeamMembers></TeamMembers>
        </TextContainer> */}
      </InnerContainer>
    </Container>
  );
};
