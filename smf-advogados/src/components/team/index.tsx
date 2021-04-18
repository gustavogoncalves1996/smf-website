import React from "react";

import {
  Container,
  Title,
  TeamLeaderContainer,
  Element,
  TeamContainer,
} from "./styles";
import { getTranslation } from "../../helpers";
import { leaders, team, interns, administrative } from "./helpers";
import { ReactComponent as Linkedin } from "../../assets/img/linkedin_element.svg";
import { ReactComponent as Email } from "../../assets/img/email_element.svg";

interface Props {
  language: string;
}

export const TeamComponent: React.FunctionComponent<Props> = ({ language }) => {
  const onClickEmail = (email: string): void => {
    window.open(`mailto:${email}`, "_blank");
  };
  const onClickLinkedin = (linkedin: string): void => {
    window.open(linkedin, "_blank");
  };

  return (
    <Container>
      <Title>{getTranslation("our_team", language)}</Title>
      <TeamLeaderContainer>
        {leaders.map((leader) => {
          return (
            <Element>
              <figure>
                <img src={leader.image} alt="" />
                <figcaption>
                  <ul>
                    {leader.linkedin && (
                      <li
                        onClick={(): void => onClickLinkedin(leader.linkedin)}
                      >
                        <Linkedin />
                      </li>
                    )}
                    {leader.email && (
                      <li onClick={(): void => onClickEmail(leader.email)}>
                        <Email />
                      </li>
                    )}
                  </ul>
                </figcaption>
              </figure>
              <h4>{leader.name}</h4>
              <p>{getTranslation(`${leader.job}_${leader.genre}`, language)}</p>
            </Element>
          );
        })}
      </TeamLeaderContainer>
      {/* <TeamContainer></TeamContainer>
      <TeamContainer></TeamContainer>
      <TeamContainer>
        <Element>
          <figure>
            <img src="" alt="" />
          </figure>
          <h4>Nome da pessoa</h4>
          <p>Cargo important</p>
        </Element>
      </TeamContainer> */}
    </Container>
  );
};
