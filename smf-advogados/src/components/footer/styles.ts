import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-primary, rgb(120, 75, 74));
  min-height: 50vh;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: var(--surface-color-400, rgba(255, 255, 255, 0.4));
  height: calc(50vh - 16rem);
  min-height: 28rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 4rem 12rem 4rem 4rem;
  height: calc(100% - 8rem);

  @media (max-width: 767px) {
    margin: 2rem;
    height: calc(100% - 4rem);
  }

  > img {
    height: 100%;

    @media (max-width: 400px) {
      height: 14rem;
    }
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: space-evenly;
  margin: 4rem;
  height: calc(100% - 8rem);

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem;
    height: calc(100% - 4rem);
    justify-content: center;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 767px) {
    flex-grow: initial;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  color: var(--text-secondary-color, rgb(255, 255, 255));
  font-size: 1.6rem;
  cursor: default;
  margin: 5px 0px;
  cursor: pointer;
  width: 100%;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    line-height: 1;
    width: 2px;
    height: 2px;
    display: inline-block;
    top: 50%;
    left: -17px;
    margin-top: -2px;
    background-color: var(--text-secondary-color, rgb(255, 255, 255));
  }

  > svg {
    width: 2rem;
    height: 2rem;
    margin-left: 2rem;
    transition: all 0.4s;
    opacity: 0;
    fill: var(--text-secondary-color, rgb(255, 255, 255));
  }

  > a {
    text-decoration: none;
    color: var(--text-secondary-color, rgb(255, 255, 255));
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

export const BottomFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: var(--surface-color-50, rgba(255, 255, 255, 0.05));
  border-top: 1px solid var(--surface-color-500, rgba(255, 255, 255, 0.5));
  margin-top: auto;
  height: 16rem;
`;

export const BottomFooterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary-color, rgb(255, 255, 255));
  font-size: 1.4rem;
  cursor: default;
  margin: 2rem 0px 0px;
`;

export const BottomFooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0px;
`;

export const BottomFooterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--text-secondary-color, rgb(255, 255, 255));
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0px 1.2rem;

  &:hover {
    background: var(--surface-color-100, rgba(255, 255, 255, 0.1));
  }

  svg {
    width: 3rem;
    height: 3rem;
    fill: var(--text-secondary-color, rgb(255, 255, 255));
  }
`;
