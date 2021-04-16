import React from "react";

import { Container } from "./styles";
import { AboutUsComponent } from "../about-us";
import { PartnershipsComponent } from "../partnerships";
import { ContactUsComponent } from "../contact-us";
import { ActivitiesComponent } from "../activities";
import { ModalType } from "../../App";

interface Props {
  language: string;
  setModal: (modal: ModalType) => void;
}

export const BodyComponent: React.FunctionComponent<Props> = ({
  language,
  setModal,
}) => {
  return (
    <Container>
      <AboutUsComponent language={language} />
      <ActivitiesComponent language={language} setModal={setModal} />
      <PartnershipsComponent language={language} />
      <ContactUsComponent language={language} />
    </Container>
  );
};
