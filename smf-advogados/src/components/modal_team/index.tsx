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
import { ModalTeamType } from "../../App";
import CloseIcon from "@material-ui/icons/Close";

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
  const closeModal = (): void =>
    setModalTeam({
      open: false,
      title: "",
      image: "",
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

    languages,
  } = modalTeam;

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
          <img
            src="https://qtcrecruitment.com/wp-content/uploads/2017/12/LegalLawLegislation-Concept.-Judge-gavel-on-law-books-with-scales-of-justice..jpg"
            alt=""
          />
        </ImageContainer>
        <TextContainer>
          <Title>{title}</Title>
          <DescriptionsContainer>
            {/* {text.map((simpleText) => (
              <Description>{getTranslation(simpleText, language)}</Description>
            ))} */}
            Description to changeeeeeeeeeeeeeeeeeee
          </DescriptionsContainer>
          <TeamMembers></TeamMembers>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
};
