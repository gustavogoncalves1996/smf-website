import React from "react";

import {
  Container,
  Title,
  Content,
  Description,
  Paragraph,
  ImagesContainer,
} from "./styles";
import { getTranslation } from "../../helpers";

interface Props {
  language: string;
}

export const AboutUsComponent: React.FunctionComponent<Props> = ({
  language,
}) => {
  return (
    <Container id="about_us">
      <Title>{getTranslation("about_us", language)}</Title>
      <Content>
        <Description>
          <Paragraph>{getTranslation("about_us_p1", language)}</Paragraph>
          <Paragraph>{getTranslation("about_us_p2", language)}</Paragraph>
        </Description>

        <ImagesContainer>
          <figure>
            <img
              src="https://www.smfadvogados.com/wp-content/uploads/2020/09/hll_de_entrada-scaled.jpg"
              alt="image_1"
            />
            <img
              src="https://www.smfadvogados.com/wp-content/uploads/2020/09/meeting_room-scaled.jpg"
              alt="image_2"
            />
            <img
              src="https://www.smfadvogados.com/wp-content/uploads/2020/10/FotoGrupo1.jpg"
              alt="image_3"
            />
            <img
              src="https://www.smfadvogados.com/wp-content/uploads/2020/10/FotoGrupo2.jpg"
              alt="image_4"
            />
          </figure>
        </ImagesContainer>
      </Content>
    </Container>
  );
};
