import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 0 14rem;
  position: relative;
  background: var(--background-color, rgb(247, 249, 252));
  background-image: linear-gradient(
      var(--surface-color-700, rgba(255, 255, 255, 0.7)),
      var(--surface-color-700, rgba(255, 255, 255, 0.7))
    ),
    url(https://dl.wotor.net/_com/zenoimpex.com/images/demo/666.jpg);

  @media (max-width: 767px) {
    padding: 4rem 0 10rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid var(--color-primary, rgb(120, 75, 74));
  padding: 1rem 1.5rem;
  color: var(--text-primary-title-color, rgb(51, 51, 51));
  font-weight: bold;
  font-size: 3rem;
  margin: 0px auto 6rem;
  cursor: default;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  cursor: default;
  width: 100%;
  max-width: 80%;
  margin: 0px auto 6rem;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem var(--box-shadow-primary-color, rgba(0, 0, 0, 0.15));
  background: var(--surface-color, rgb(255, 255, 255));
  min-height: 50rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ContentContacts = styled.div`
  display: flex;
  flex-direction: row;
  cursor: default;
  width: 100%;
  max-width: 80%;
  margin: 0rem auto 10rem;
  border-radius: 3px;

  @media (min-width: 768px) and (max-width: 1200px) {
    flex-direction: column;
    margin: 0rem auto 6rem;
  }

  @media (max-width: 767px) {
    margin: 0rem auto;
  }
`;

export const ContactInfoEntry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30rem;
  width: 23rem;
  background-color: var(--surface-color-800, rgba(255, 255, 255, 0.8));
  box-shadow: 0 1.5rem 4rem var(--box-shadow-primary-color, rgba(0, 0, 0, 0.15));
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  transition: transform 0.3s;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 40rem;
    margin: 2rem auto 4rem;
    max-width: 100%;
  }

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }

  svg {
    height: 6rem;
    width: 4rem;
    fill: var(--color-primary-800, rgba(120, 75, 74, 0.8));
    margin-bottom: 1.5rem;
  }
`;

export const ContactTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary-text-color, rgb(102, 102, 102));
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem !important;
`;

export const Information = styled.div`
  display: flex;
  font-weight: 400;
  color: var(--text-primary-text-color, rgb(102, 102, 102));
  font-size: 1.2rem;
  margin: 4px 0px;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: default;
  width: 100%;
  padding: 2rem 0rem;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  width: 50%;
  padding: 2rem 4rem 4rem;

  @media (max-width: 767px) {
    padding: 2rem;
    width: 100%;
  }
`;

export const FormTitle = styled.div`
  font-size: 4rem;
  color: var(--text-primary-title-color, rgb(51, 51, 51));

  @media (max-width: 767px) {
    font-size: 3rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0px;
`;

export const SimpleInput = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 3rem;
  position: relative;

  input {
    padding: 0px 1rem;
    border: none;
    border-bottom: 1px solid var(--color-primary, rgb(120, 75, 74));
    background-color: transparent;
    font-size: 14px;
    line-height: 25px;
    width: 100%;
    outline: none;
    height: 4rem;
  }

  label {
    display: flex;
    align-items: center;
    position: absolute;
    cursor: text;
    top: 0;
    left: 0;
    right: 0;
    color: var(--text-primary-title-color, rgb(51, 51, 51));
    font-size: 14px;
    width: 100%;
    transition: 0.2s ease-in-out;
    height: 100%;
  }

  input:focus {
    border-bottom: 1px solid var(--color-primary, rgb(120, 75, 74));
  }

  input:focus + label {
    color: var(--color-primary, rgb(120, 75, 74));
    font-size: 1rem;
    top: -2rem;
    pointer-events: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const SimpleTextArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: relative;

  textarea {
    padding: 0px 1rem;
    border: none;
    border-bottom: 1px solid var(--color-primary, rgb(120, 75, 74));
    background-color: transparent;
    font-size: 14px;
    line-height: 25px;
    width: 100%;
    outline: none;
    height: 10rem;
    resize: none;
  }

  label {
    display: flex;
    align-items: flex-start;
    position: absolute;
    cursor: text;
    top: 0;
    left: 0;
    right: 0;
    color: var(--text-primary-title-color, rgb(51, 51, 51));
    font-size: 14px;
    width: 100%;
    transition: 0.2s ease-in-out;
    height: 100%;
  }

  textarea:focus {
    border-bottom: 1px solid var(--color-primary, rgb(120, 75, 74));
  }

  textarea:focus + label {
    color: var(--color-primary, rgb(120, 75, 74));
    font-size: 1rem;
    top: -2rem;
    pointer-events: none;
  }
`;

export const Map = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  min-height: 35rem;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 4rem;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    border: none;
  }
`;

export const SendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 6rem;

  @media (max-width: 767px) {
    margin-top: 4rem;
  }
`;

export const Send = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: var(--text-secondary-color, rgb(255, 255, 255));
  background-color: var(--color-primary, rgb(120, 75, 74));
  border: 2px solid var(--color-primary, rgb(120, 75, 74));
  cursor: pointer;
  transition: all 0.2s;
  padding: 1.4rem 1rem;
  border-radius: 10px;
  letter-spacing: 1.3px;

  &:hover {
    background-color: transparent;
    color: var(--color-primary, rgb(120, 75, 74));
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 767px) {
    padding: 1.2rem 1rem;
  }
`;
