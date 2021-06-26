import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: darkgreen;
  padding: 2em;
  box-sizing: border-box;

  @media (min-width: 1000px) {
    width: 40%;
  }
`;

export const LocationTitle = styled.h2`
  padding: 1em;
  color: whitesmoke;
  font-size: 1.4em;
  padding: 0;
  margin: 1em auto;
`;
export const LocationText = styled.p`
  padding: 1em;
  color: whitesmoke;
  font-size: 1.2em;
  margin: 0 auto;
  text-align: center;
`;
