import React from "react";

import {
  Container,
  Title,
  Content,
  Description,
  Paragraph,
  ParagraphTitle,
  Story,
  ImageContainer,
  MoreContainer,
  ReadMore,
  BackgroundWrapper,
} from "./styles";
import { getTranslation } from "../../helpers";

interface Props {
  language: string;
}

export const PartnershipsComponent: React.FunctionComponent<Props> = ({
  language,
}) => {
  const onClickComeLivePortugal = (): void => {
    window.open("http://www.mudeparaportugal.com.br/", "_blank");
  };
  const onClickAEO = (): void => {
    window.open(
      "https://smfadvogados.com/wp-content/uploads/2020/11/Portfo%CC%81lio-AEO-EN.pdf",
      "_blank"
    );
  };

  return (
    <Container id="partnerships">
      <BackgroundWrapper />
      <Title>{getTranslation("partnerships", language)}</Title>
      <Content>
        <Story>
          <ImageContainer>
            <img
              src="https://www.smfadvogados.com/wp-content/uploads/2020/10/logo_msa.png"
              alt="live_portugal"
            />
          </ImageContainer>
          <Description>
            <ParagraphTitle>
              {getTranslation("partnerships_title_1", language)}
            </ParagraphTitle>
            <Paragraph>
              {getTranslation("partnerships_text_1", language)}
            </Paragraph>
          </Description>

          <MoreContainer>
            <ReadMore onClick={onClickComeLivePortugal}>
              {getTranslation("read_more", language)} →
            </ReadMore>
          </MoreContainer>
        </Story>
      </Content>
      <Content>
        <Story>
          <ImageContainer>
            <img
              src="https://www.smfadvogados.com/wp-content/uploads/2020/10/logo-aeo-300x225.png"
              alt="live_portugal"
            />
          </ImageContainer>
          <Description>
            <ParagraphTitle>
              {getTranslation("partnerships_title_2", language)}
            </ParagraphTitle>
            <Paragraph>
              {getTranslation("partnerships_text_2", language)}
            </Paragraph>
          </Description>

          <MoreContainer>
            <ReadMore onClick={onClickAEO}>
              {getTranslation("read_more", language)} →
            </ReadMore>
          </MoreContainer>
        </Story>
      </Content>
    </Container>
  );
};
