import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1001;
  overflow: hiden;
  transition: 0.64s ease-in-out;
`;

export const InnerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 80%;
  height: 80%;
  background-color: #fff;
  transform: rotate(32deg);
  transition: 0.64s ease-in-out;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

export const Close = styled.a`
  position: absolute;
  right: -1rem;
  top: -1rem;
  width: 3rem;
  height: 3rem;
  font-size: 1.2rem;
  font-weight: 300;
  border-radius: 100%;
  background-color: #784b4a;
  z-index: 4;
  color: #fff;
  line-height: 3rem;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s;

  @media (max-width: 767px) {
    border-radius: 1rem;
    top: 2rem;
    right: 2rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  overflow: hidden;
  padding-right: 20rem;
  transition: all 0.4s;

  @media (min-width: 768px) and (max-width: 1000px) {
    display: none;
    width: 0%;
  }

  @media (max-width: 767px) {
    display: none;
    width: 0%;
  }

  > img {
    width: auto;
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding: 4rem;
  cursor: default;
  transition: all 0.4s;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  color: #784b4a;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export const DescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Description = styled.div`
  white-space: pre-line;
  text-align: justify;
  font-size: 1.2rem;
  color: #686868;
  line-height: 2rem;
  margin-bottom: 8px;
`;

export const TeamMembers = styled.div`
  display: flex;
  height: 24rem;
  background-color: pink;
  margin-top: auto;
`;
