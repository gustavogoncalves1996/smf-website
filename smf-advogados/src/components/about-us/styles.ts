import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 0 4rem;

  @media (max-width: 767px) {
    padding: 6rem 0 2rem;
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
  margin: 0px auto 4rem;
  cursor: default;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  cursor: default;
  width: 100%;
  padding: 0px 10rem;
  margin-bottom: 5rem;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0px 4rem;
    margin-bottom: 0px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  width: 50%;
  margin-right: 5rem;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const Paragraph = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 3rem;
  color: var(--text-primary-text-color, rgb(102, 102, 102));
  text-align: justify;
  margin-bottom: 1.6rem;
`;

export const ImagesContainer = styled.div`
  @keyframes slidy {
    0% {
      left: 0%;
    }
    20% {
      left: 0%;
    }
    25% {
      left: -100%;
    }
    45% {
      left: -100%;
    }
    50% {
      left: -200%;
    }
    70% {
      left: -200%;
    }
    75% {
      left: -300%;
    }
    95% {
      left: -300%;
    }
    100% {
      left: -400%;
    }
  }

  position: relative;
  width: 50%;
  overflow: hidden;
  margin-left: 5rem;

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }

  > figure {
    display: flex;
    align-items: center;
    position: relative;
    width: 500%;
    height: 40rem;
    margin: 0;
    left: 0;
    text-align: left;
    font-size: 0;
    animation: 30s slidy infinite;

    @media (max-width: 767px) {
      height: 30rem;
    }

    > img {
      width: 20%;
      float: left;
    }
  }
`;
