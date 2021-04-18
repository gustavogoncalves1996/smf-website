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

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { ModalTeamType } from "../../App";

interface Props {
  language: string;
  setModalTeam: (modal: ModalTeamType) => void;
}

export const TeamComponent: React.FunctionComponent<Props> = ({
  language,
  setModalTeam,
}) => {
  const onClickEmail = (email: string): void => {
    window.open(`mailto:${email}`, "_blank");
  };
  const onClickLinkedin = (linkedin: string): void => {
    window.open(linkedin, "_blank");
  };

  const defaultImage = (genre: string): string => {
    if (genre === "male") {
      return "https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg";
    }

    return "https://cdn.nohat.cc/thumb/f/720/comvecteezy356502.jpg";
  };

  const onClickElement = (element: any): void => {
    setModalTeam({
      open: true,
      title: element.name,
      image: element.image,
      areas: element.areas,
      education: element.education,
      experience: element.experience,
      languages: element.languages,
    });
  };

  // TODO: CHANGE THE ON CLICK FUNCTION TO ANOTHER PLACE (BUTTON)

  return (
    <Container>
      <Title>{getTranslation("our_team", language)}</Title>
      <TeamContainer>
        {leaders.map((leader) => {
          return (
            <TeamElement onClick={(): void => onClickElement(leader)}>
              <img src={leader.image} alt="" />
              <BioContainer>
                <Name>{leader.name}</Name>
                {(leader.linkedin || leader.email) && (
                  <div>
                    {leader.linkedin && (
                      <div
                        onClick={(): void => onClickLinkedin(leader.linkedin)}
                      >
                        <LinkedInIcon />
                      </div>
                    )}
                    {leader.email && (
                      <div onClick={(): void => onClickEmail(leader.email)}>
                        <EmailIcon />
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
          <TeamElement onClick={(): void => onClickElement(person)}>
            <img src={person.image || defaultImage(person.genre)} alt="" />
            <BioContainer>
              <Name>{person.name}</Name>
              {(person.linkedin || person.email) && (
                <div>
                  {person.linkedin && (
                    <div onClick={(): void => onClickLinkedin(person.linkedin)}>
                      <LinkedInIcon />
                    </div>
                  )}
                  {person.email && (
                    <div onClick={(): void => onClickEmail(person.email)}>
                      <EmailIcon />
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
          <TeamElement onClick={(): void => onClickElement(person)}>
            <img src={person.image || defaultImage(person.genre)} alt="" />
            <BioContainer>
              <Name>{person.name}</Name>
              <Job>
                {getTranslation(`${person.job}_${person.genre}`, language)}
              </Job>
              {(person.linkedin || person.email) && (
                <div>
                  {person.linkedin && (
                    <div onClick={(): void => onClickLinkedin(person.linkedin)}>
                      <LinkedInIcon />
                    </div>
                  )}
                  {person.email && (
                    <div onClick={(): void => onClickEmail(person.email)}>
                      <EmailIcon />
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
          <TeamElement onClick={(): void => onClickElement(person)}>
            <img src={person.image || defaultImage(person.genre)} alt="" />
            <BioContainer>
              <Name>{person.name}</Name>
              <Job>
                {getTranslation(`${person.job}_${person.genre}`, language)}
              </Job>
              {(person.linkedin || person.email) && (
                <div>
                  {person.linkedin && (
                    <div onClick={(): void => onClickLinkedin(person.linkedin)}>
                      <LinkedInIcon />
                    </div>
                  )}
                  {person.email && (
                    <div onClick={(): void => onClickEmail(person.email)}>
                      <EmailIcon />
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
