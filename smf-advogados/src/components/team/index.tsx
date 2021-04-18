import React from "react";

import {
  Container,
  Title,
  TeamContainer,
  TeamElement,
  BioContainer,
  Name,
  Job,
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
      <TeamContainer>
        {leaders.map((leader) => {
          return (
            <TeamElement>
              <img src={leader.image} alt="" />
              <BioContainer>
                <Name>{leader.name}</Name>
                <Job>
                  {getTranslation(`${leader.job}_${leader.genre}`, language)}
                </Job>
                {(leader.linkedin || leader.email) && (
                  <div>
                    {leader.linkedin && (
                      <div
                        onClick={(): void => onClickLinkedin(leader.linkedin)}
                      >
                        <Linkedin />
                      </div>
                    )}
                    {leader.email && (
                      <div onClick={(): void => onClickEmail(leader.email)}>
                        <Email />
                      </div>
                    )}
                  </div>
                )}
              </BioContainer>
            </TeamElement>
          );
        })}
      </TeamContainer>
      <TeamContainer>
        {team.map((person) => (
          <TeamElement>
            <img src={person.image} alt="" />
            <BioContainer>
              <Name>{person.name}</Name>
              <Job>
                {getTranslation(`${person.job}_${person.genre}`, language)}
              </Job>
              {(person.linkedin || person.email) && (
                <div>
                  {person.linkedin && (
                    <div onClick={(): void => onClickLinkedin(person.linkedin)}>
                      <Linkedin />
                    </div>
                  )}
                  {person.email && (
                    <div onClick={(): void => onClickEmail(person.email)}>
                      <Email />
                    </div>
                  )}
                </div>
              )}
            </BioContainer>
          </TeamElement>
        ))}
      </TeamContainer>
      <TeamContainer>
        {interns.map((person) => (
          <TeamElement>
            <img src={person.image} alt="" />
            <BioContainer>
              <Name>{person.name}</Name>
              <Job>
                {getTranslation(`${person.job}_${person.genre}`, language)}
              </Job>
              {(person.linkedin || person.email) && (
                <div>
                  {person.linkedin && (
                    <div onClick={(): void => onClickLinkedin(person.linkedin)}>
                      <Linkedin />
                    </div>
                  )}
                  {person.email && (
                    <div onClick={(): void => onClickEmail(person.email)}>
                      <Email />
                    </div>
                  )}
                </div>
              )}
            </BioContainer>
          </TeamElement>
        ))}
      </TeamContainer>
      <TeamContainer>
        {administrative.map((person) => (
          <TeamElement>
            <img src={person.image} alt="" />
            <BioContainer>
              <Name>{person.name}</Name>
              <Job>
                {getTranslation(`${person.job}_${person.genre}`, language)}
              </Job>
              {(person.linkedin || person.email) && (
                <div>
                  {person.linkedin && (
                    <div onClick={(): void => onClickLinkedin(person.linkedin)}>
                      <Linkedin />
                    </div>
                  )}
                  {person.email && (
                    <div onClick={(): void => onClickEmail(person.email)}>
                      <Email />
                    </div>
                  )}
                </div>
              )}
            </BioContainer>
          </TeamElement>
        ))}
      </TeamContainer>
    </Container>
  );
};
