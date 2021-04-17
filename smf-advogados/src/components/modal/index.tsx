import React from "react";

import {
  Container,
  InnerContainer,
  ImageContainer,
  TextContainer,
  Title,
  DescriptionsContainer,
  Description,
  TeamMembers,
  Close,
} from "./styles";
import { getTranslation } from "../../helpers";
import { ModalType } from "../../App";

interface Props {
  language: string;
  modal: ModalType;
  setModal: (modal: ModalType) => void;
}

export const ModalComponent: React.FunctionComponent<Props> = ({
  language,
  modal,
  setModal,
}) => {
  const closeModal = (): void =>
    setModal({
      open: false,
      title: "",
      text: [""],
    });

  const { open, title, text } = modal;

  return (
    <Container
      id="modalllll"
      style={{ opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden" }}
    >
      <InnerContainer
        style={{
          bottom: open ? 0 : "-100vw",
          right: open ? 0 : "-100vh",
          transform: open ? "rotate(0)" : "rotate(32deg)",
        }}
      >
        <Close onClick={closeModal}>X</Close>
        <ImageContainer>
          <img
            src="https://qtcrecruitment.com/wp-content/uploads/2017/12/LegalLawLegislation-Concept.-Judge-gavel-on-law-books-with-scales-of-justice..jpg"
            alt=""
          />
        </ImageContainer>
        <TextContainer>
          <Title>{getTranslation(title, language)}</Title>
          <DescriptionsContainer>
            {text.map((simpleText) => (
              <Description>{getTranslation(simpleText, language)}</Description>
            ))}
          </DescriptionsContainer>
          <TeamMembers></TeamMembers>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
};
