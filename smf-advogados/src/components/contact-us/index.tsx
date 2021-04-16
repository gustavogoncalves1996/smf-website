import React from "react";

import {
  Container,
  Title,
  Content,
  Form,
  FormTitle,
  FormContainer,
  SimpleInput,
  SimpleTextArea,
  Map,
  SendContainer,
  Send,
  ContentContacts,
  ContactsContainer,
  ContactInfoEntry,
  ContactTitle,
  Information,
} from "./styles";
import { getTranslation } from "../../helpers";
import { ReactComponent as EmailSVG } from "../../assets/img/email.svg";
import { ReactComponent as FaxSVG } from "../../assets/img/fax.svg";
import { ReactComponent as LocationSVG } from "../../assets/img/location.svg";
import { ReactComponent as PhoneSVG } from "../../assets/img/phone.svg";

interface Props {
  language: string;
}

export const ContactUsComponent: React.FunctionComponent<Props> = ({
  language,
}) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");

  const send = (): void => {};

  const onChangeInputValue = (
    key: string,
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    switch (key) {
      case "name":
        setName(e.currentTarget.value);
        return;
      case "email":
        setEmail(e.currentTarget.value);
        return;
      case "number":
        setNumber(e.currentTarget.value);
        return;
      case "message":
        setMessage(e.currentTarget.value);
        return;
      default:
        return;
    }
  };

  const additionalStyle = (value: string) =>
    value === "" ? {} : { color: "#784b4a", fontSize: "1rem", top: "-2rem" };

  const onClickContact = (): void => {
    window.open("tel:229481864", "_blank");
  };

  const onClickFax = (): void => {
    window.open("tel:229490186", "_blank");
  };

  const onClickEmail = (): void => {
    window.open("mailto:geral@smfadvogados.com");
  };

  const onClickLocation = (): void => {
    window.open(
      "http://maps.google.com/maps?q=Rua%20Dr.%20Carlos%20Pires%20Felgueiras%20nº%2098",
      "_blank"
    );
  };

  return (
    <Container id="contact_us">
      <Title>{getTranslation("contact_us", language)}</Title>
      <ContentContacts>
        <ContactsContainer>
          <ContactInfoEntry onClick={onClickContact}>
            <PhoneSVG />
            <ContactTitle>
              {getTranslation("contact_us_entry_number", language)}
            </ContactTitle>
            <Information>+351 229 481 864</Information>
            <Information>+351 925 169 997</Information>
          </ContactInfoEntry>
          <ContactInfoEntry onClick={onClickEmail}>
            <EmailSVG />
            <ContactTitle>
              {getTranslation("contact_us_entry_email", language)}
            </ContactTitle>
            <Information>geral@smfadvogados.com</Information>
          </ContactInfoEntry>
          <ContactInfoEntry onClick={onClickFax}>
            <FaxSVG />
            <ContactTitle>
              {getTranslation("contact_us_entry_fax", language)}
            </ContactTitle>
            <Information>+351 229 490 186</Information>
          </ContactInfoEntry>
          <ContactInfoEntry onClick={onClickLocation}>
            <LocationSVG />
            <ContactTitle>
              {getTranslation("contact_us_entry_address", language)}
            </ContactTitle>
            <Information>
              Rua Dr. Carlos Pires Felgueiras nº 98, 2º Andar – Salas D e E
            </Information>
            <Information>4470-157 Maia</Information>
            <Information>Portugal</Information>
          </ContactInfoEntry>
        </ContactsContainer>
      </ContentContacts>
      <Content>
        <Form>
          <FormTitle>{getTranslation("contact_us_title", language)}</FormTitle>
          <FormContainer>
            <SimpleInput>
              <input
                id="input_name"
                type="text"
                value={name}
                onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                  onChangeInputValue("name", e)
                }
              />
              <label htmlFor="input_name" style={additionalStyle(name)}>
                {getTranslation("contact_us_name", language)}
              </label>
            </SimpleInput>
            <SimpleInput>
              <input
                id="input_email"
                type="text"
                value={email}
                onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                  onChangeInputValue("email", e)
                }
              />
              <label htmlFor="input_email" style={additionalStyle(email)}>
                {getTranslation("contact_us_email", language)}
              </label>
            </SimpleInput>
            <SimpleInput>
              <input
                id="input_number"
                type="number"
                value={number}
                onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                  onChangeInputValue("number", e)
                }
              />
              <label htmlFor="input_number" style={additionalStyle(number)}>
                {getTranslation("contact_us_number", language)}
              </label>
            </SimpleInput>
            <SimpleTextArea>
              <textarea
                id="input_message"
                value={message}
                onChange={(e: React.FormEvent<HTMLTextAreaElement>): void =>
                  onChangeInputValue("message", e)
                }
              />
              <label htmlFor="input_message" style={additionalStyle(message)}>
                {getTranslation("contact_us_message", language)}
              </label>
            </SimpleTextArea>
          </FormContainer>
          <SendContainer>
            <Send onClick={send}>
              {getTranslation("contact_us_button", language)}
            </Send>
          </SendContainer>
        </Form>
        <Map>
          <iframe
            id="map"
            title="map"
            src="https://maps.google.com/maps?q=4470-157%20Maia&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </Map>
      </Content>
    </Container>
  );
};
