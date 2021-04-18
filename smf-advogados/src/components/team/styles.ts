import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  min-height: 60rem;
  justify-content: space-evenly;
`;

export const TeamElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 35rem;
  min-height: 50rem;
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
  flex-grow: 1;
  background: var(--surface-color, rgb(255, 255, 255));
  margin: -3rem auto 0;
  width: 80%;
  padding: 0.5rem;
  box-shadow: 0 1.5rem 4rem var(--box-shadow-primary-color, rgba(0, 0, 0, 0.15));
  border-radius: 0.5rem;

  > :not(div:last-of-type) {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;

    > div {
      height: 2rem;
      width: 2rem;
      margin: 0px 1rem;
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

export const MoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const ReadMore = styled.div`
  margin-left: auto;
  font-size: 1.6rem;
  color: var(--color-primary-600, rgba(120, 75, 74, 0.6));
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid var(--color-primary-600, rgba(120, 75, 74, 0.6));
  padding: 3px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-600, rgba(120, 75, 74, 0.6));
    color: var(--text-secondary-color, rgb(255, 255, 255));
    box-shadow: 0 1rem 2rem var(--surface-color-100, rgba(255, 255, 255, 0.1));
  }

  &:active {
    box-shadow: 0 0.5rem 1rem var(--surface-color-100, rgba(255, 255, 255, 0.1));
  }
`;
