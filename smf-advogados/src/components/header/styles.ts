import styled from "styled-components";

export const Header = styled.div``;

export const VideoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  > video {
    object-fit: cover;
    background-size: cover;
    height: 100%;
    width: 100%;

    @media (max-width: 767px) {
      width: 150%;
    }
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 30rem;
  right: 10rem;

  @media (max-width: 767px) {
    top: 12rem;
    right: 50%;
    transform: translate(50%);
  }

  > img {
    height: 30rem;

    @media (max-width: 767px) {
      height: 15rem;
    }
  }
`;
