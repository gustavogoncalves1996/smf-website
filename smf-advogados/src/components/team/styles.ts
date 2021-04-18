import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const TeamLeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 33.3%;
  }
`;

export const TeamContainer = styled.div``;

export const Element = styled.div`
  figure {
    position: relative;
    overflow: hidden;
    padding: 0;
    margin: 0;
    height: 30rem;
    width: 30rem;
    margin: 0 auto;

    img {
      height: 100%;
      width: 100%;
    }

    figcaption {
      display: flex;
      padding: 2rem;
      color: transparent;
      background-color: transparent;
      position: absolute;
      z-index: 996;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: auto;

      li {
        display: flex;
        cursor: pointer;
        padding: 10px;

        > svg {
          fill: #fff;
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      li:last-of-type {
        margin-top: 6px;
      }
    }

    &:hover {
      figcaption {
        visibility: visible;
        color: #fff;
        background: rgba(120, 75, 74, 0.6);
        height: 100%;
      }
    }
  }

  h4 {
    margin: 1rem 0 0;
    font-size: 1.8rem;
    text-transform: none;
    color: #784b4a;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
  }

  p {
    margin: 0 0 1rem;
    color: rgba(120, 75, 74, 0.8);
    text-align: center;
    font-size: 1.4rem;
  }
`;
