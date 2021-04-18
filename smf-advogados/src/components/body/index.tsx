import React from "react";

import { Container } from "./styles";
import { AboutUsComponent } from "../about-us";
import { PartnershipsComponent } from "../partnerships";
import { ContactUsComponent } from "../contact-us";
import { ActivitiesComponent } from "../activities";
import { TeamComponent } from "../team";
import { ModalTeamType, ModalType } from "../../App";

interface Props {
  language: string;
  setModal: (modal: ModalType) => void;
  setModalTeam: (modal: ModalTeamType) => void;
}

export const BodyComponent: React.FunctionComponent<Props> = ({
  language,
  setModal,
  setModalTeam,
}) => {
  return (
    <Container>
      <AboutUsComponent language={language} />
      <TeamComponent language={language} setModalTeam={setModalTeam} />
      <ActivitiesComponent language={language} setModal={setModal} />
      <PartnershipsComponent language={language} />
      <ContactUsComponent language={language} />
    </Container>
  );
};
