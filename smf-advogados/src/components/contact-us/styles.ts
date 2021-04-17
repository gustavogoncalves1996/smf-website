import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 0 14rem;
  position: relative;
  background: rgb(247, 249, 252);
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
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
  border-bottom: 3px solid #784b4a;
  padding: 1rem 1.5rem;
  color: #333333;
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
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 20%);
  background: white;
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
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 15%);
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
    fill: rgb(120 75 74 / 80%);
    margin-bottom: 1.5rem;
  }
`;

export const ContactTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem !important;
`;

export const Information = styled.div`
  display: flex;
  font-weight: 400;
  color: #777;
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
  color: #333333;

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
    border-bottom: 1px solid rgba(120, 75, 74, 0.5);
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
    color: #333333;
    font-size: 14px;
    width: 100%;
    transition: 0.2s ease-in-out;
    height: 100%;
  }

  input:focus {
    border-bottom: 1px solid #784b4a;
  }

  input:focus + label {
    color: #784b4a;
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
    border-bottom: 1px solid rgba(120, 75, 74, 0.5);
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
    color: #333333;
    font-size: 14px;
    width: 100%;
    transition: 0.2s ease-in-out;
    height: 100%;
  }

  textarea:focus {
    border-bottom: 1px solid #784b4a;
  }

  textarea:focus + label {
    color: #784b4a;
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
  width: 28rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: white;
  background-color: #784b4a;
  border: 2px solid #784b4a;
  cursor: pointer;
  transition: all 0.2s;
  padding: 2rem 1rem;
  border-radius: 3px;
  letter-spacing: 1.3px;

  &:hover {
    background-color: white;
    color: #784b4a;
    box-shadow: 0 1rem 2rem rgba(#fff, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(#fff, 0.15);
    transform: translateY(0);
  }

  @media (max-width: 767px) {
    padding: 1.2rem 1rem;
  }
`;
