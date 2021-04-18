import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
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
  margin: 8rem auto 8rem;
  cursor: default;
`;

export const ActivitiesArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > div:last-of-type {
    width: 100% !important;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Activity = styled.div`
  display: flex;
  background: var(--dark-surface-color-250, rgba(255, 255, 255, 0.25));
  min-height: 50rem;
  width: 33.3%;
  position: relative;
  overflow: hidden;

  @media (max-width: 1300px) {
    min-height: 30rem;
  }

  @media (min-width: 700px) and (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 699px) {
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
  color: var(--text-secondary-color, rgb(255, 255, 255));
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  cursor: pointer;
`;
