import React from "react";

import { Container } from "./styles";
import { AboutUsComponent } from "../about-us";
import { PartnershipsComponent } from "../partnerships";
import { ContactUsComponent } from "../contact-us";
import { ActivitiesComponent } from "../activities";

interface Props {
  language: string;
}

export const BodyComponent: React.FunctionComponent<Props> = ({ language }) => {
  return (
    <Container>
      <AboutUsComponent language={language} />
      <ActivitiesComponent language={language} />
      <PartnershipsComponent language={language} />
      <ContactUsComponent language={language} />
    </Container>
  );
};
