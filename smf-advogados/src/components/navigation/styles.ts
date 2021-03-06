import styled from "styled-components";

export const Navigation = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 11rem;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  display: flex;
  z-index: 1000;
  transition: ease-out 0.6s;

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
      justify-content: flex-end;
      width: 100%;
      height: calc(100% - 2rem);
      margin: 1rem 0px;
      padding: 0px 4rem;

      @media (max-width: 767px) {
        justify-content: space-evenly;
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
        }

        @media (max-width: 1040px) {
          margin: 0px;
        }

        > a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;

          @media (min-width: 768px) and (max-width: 1300px) {
            flex-direction: column;
          }

          > svg {
            width: 2.5rem;
            height: 2.5rem;
            margin-right: 1rem;
            fill: var(--text-secondary-color, rgb(255, 255, 255));

            @media (min-width: 1000px) and (max-width: 1300px) {
              margin-right: 0px;
            }

            @media (max-width: 767px) {
              margin-right: 0px;
            }

            @media (max-width: 500px) {
              margin: 0px 8px;
              width: 2rem;
              height: 2rem;
            }
          }

          > div {
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: 400;
            color: var(--text-secondary-color, rgb(255, 255, 255));

            @media (min-width: 768px) and (max-width: 1300px) {
              flex-direction: column;
              font-size: 1.2rem;
            }

            @media (max-width: 767px) {
              display: none;
            }
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
    color: var(--text-secondary-color, rgb(255, 255, 255));
    font-weight: 400;

    @media (max-width: 767px) {
      display: none;
    }
  }
`;
