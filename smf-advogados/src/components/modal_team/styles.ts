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
  background-color: var(--dark-surface-color-800, rgba(255, 255, 255, 0.8));
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
  background-color: var(--surface-color, rgb(255, 255, 255));
  transform: rotate(32deg);
  transition: 0.64s ease-in-out;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

export const Close = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -1rem;
  top: -1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background-color: var(--color-primary, rgb(120, 75, 74));
  z-index: 4;
  color: var(--text-secondary-color, rgb(255, 255, 255));
  cursor: pointer;
  transition: all 0.4s;

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 767px) {
    border-radius: 1rem;
    top: 2rem;
    right: 2rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 32rem;
  height: 100%;
  background-color: var(--color-primary-900, rgba(120, 75, 74, 0.9));
`;

export const TeamElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 35rem;
  padding: 2rem;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

export const BioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--surface-color, rgb(255, 255, 255));
  margin: -3rem auto 0;
  width: 80%;
  padding: 0.5rem;
  box-shadow: 0 1.5rem 4rem var(--box-shadow-primary-color, rgba(0, 0, 0, 0.15));
  border-radius: 0.5rem;
  height: 12rem;

  > div {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;

    > div {
      cursor: pointer;

      > svg {
        width: 2.5rem;
        height: 2.5rem;
        fill: var(--color-primary-600, rgba(120, 75, 74, 0.6));
      }
    }
  }
`;

export const Name = styled.div`
  cursor: default;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  color: var(--text-primary-title-color, rgb(51, 51, 51));
  font-weight: 700;
  font-family: Oswald, sans-serif;
  letter-spacing: 2px;
`;

export const Job = styled.div`
  cursor: default;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem auto 0;
  color: var(--color-primary, rgb(120, 75, 74));
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

  > div:first-of-type {
    border-top: none;
    padding: 0;
  }
`;

export const Area = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1mm dotted black;
  padding: 4mm 0 0 0;
`;

export const AreaContent = styled.div``;

export const TitleArea = styled.div``;
