import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(82 58 57 / 70%);
  padding: 8rem 0px;
  width: 30%;

  @media (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-align: center;
  cursor: default;
  border-bottom: 3px solid white;
  margin: 0px 5rem;
  padding: 1rem 1.5rem;
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 400;
  color: white;
  text-align: center;
  cursor: default;
  margin: 5rem 5rem 0px;
`;

export const ActivitiesArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;

  > div:last-of-type {
    width: 100% !important;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Activity = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.25);
  min-height: 50rem;
  width: 50%;
  position: relative;
  overflow: hidden;

  @media (min-width: 1100px) and (max-width: 1300px) {
    min-height: 30rem;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    filter: blur(2px);
  }
`;

export const ActivityText = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 400;
  line-height: 28px;
  color: #fff;
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  cursor: pointer;
`;
