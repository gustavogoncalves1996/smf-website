import styled from "styled-components";

export const Navigation = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 14rem;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  display: flex;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.55);

  @media (max-width: 767px) {
    height: 12rem;
    flex-direction: column;
  }

  > nav {
    display: flex;
    height: 100%;
    width: 100%;

    @media (min-width: 768px) and (max-width: 1040px) {
      width: calc(100% - 12rem);
    }

    > ul {
      display: flex;
      width: 100%;
      height: calc(100% - 2rem);
      margin: 1rem 0px;
      padding: 0px 4rem;

      @media (max-width: 767px) {
        justify-content: center;
        padding: 0px;
        height: auto;
        margin: 0px;
      }

      @media (min-width: 768px) and (max-width: 1040px) {
        padding: 0px;
      }

      > li {
        display: flex;
        align-items: center;
        padding: 10px;
        margin: 20px;
        list-style-type: none;
        text-align: center;

        @media (max-width: 767px) {
          padding: 8px 4px;
          margin: 0px;
        }

        @media (min-width: 768px) and (max-width: 1040px) {
          margin: 0px;
        }

        > a {
          text-decoration: none;
          color: white;
          text-transform: uppercase;
          font-size: 1.6rem;
          font-weight: 400;

          @media (max-width: 767px) {
            font-size: 0.9rem;
          }

          &:hover {
            color: #9c7978;
          }
        }
      }
    }
  }
`;

export const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LanguageOption = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 767px) {
    margin: 0rem;
  }

  > img {
    margin-bottom: 8px;
    height: 3rem;
    width: 3rem;

    @media (max-width: 767px) {
      margin-bottom: 0px;
    }
  }

  > div {
    font-size: 1.4rem;
    color: white;
    font-weight: 400;

    @media (max-width: 767px) {
      display: none;
    }
  }
`;
