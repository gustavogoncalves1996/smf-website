import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 0 12rem;
  overflow: hidden;
  position: relative;
  background-image: url(https://wallpaperaccess.com/full/4971645.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 767px) {
    padding: 4rem 0 8rem;
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
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  cursor: default;
  width: 100%;
  padding: 6rem 0px;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 4rem 0px;
  }
`;

export const Story = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem var(--box-shadow-primary-color, rgba(0, 0, 0, 0.15));
  background-color: var(--surface-color, rgb(255, 255, 255));
  border-radius: 3px;
  padding: 4rem;
  padding-left: 6rem;
  font-size: 1.6rem;
  transform: skewX(-12deg);
  opacity: 0.9;

  @media (max-width: 767px) {
    transform: skewX(0deg);
    padding: 2rem;
  }
`;

export const Description = styled.div`
  cursor: default;
  margin-top: 2rem;
  transform: skewX(12deg);

  @media (max-width: 767px) {
    transform: skewX(0deg);
  }
`;

export const ParagraphTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem !important;
`;

export const Paragraph = styled.p`
  font-size: 1.4rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewX(12deg);

  @media (max-width: 767px) {
    transform: skewX(0deg);
  }

  > img {
    max-height: 15rem;
  }
`;

export const MoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
  transform: skewX(12deg);

  @media (max-width: 767px) {
    transform: skewX(0deg);
  }
`;

export const ReadMore = styled.div`
  margin-left: auto;
  font-size: 1.6rem;
  color: var(--color-primary, rgb(120, 75, 74));
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid var(--color-primary, rgb(120, 75, 74));
  padding: 3px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary, rgb(120, 75, 74));
    color: var(--text-secondary-color, rgb(255, 255, 255));
    box-shadow: 0 1rem 2rem var(--surface-color-100, rgba(255, 255, 255, 0.1));
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem var(--surface-color-100, rgba(255, 255, 255, 0.1));
    transform: translateY(0);
  }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: var(--surface-color-300, rgba(255, 255, 255, 0.3));
`;
