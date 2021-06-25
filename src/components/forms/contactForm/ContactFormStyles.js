import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: darkgreen;
  padding: 2em;
  box-sizing: border-box;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 1em;
    width: 300px;
    border: 0;
    margin-top: 0.8em;
    font-size: 1.3rem;
  }

  textarea {
    padding: 1em;
    width: 300px;
    border: 0;
    margin-top: 0.8em;
    font-size: 1.3rem;
  }

  input[type="submit"] {
    font-size: 1.31rem;
    box-shadow: 2px 2px 2px 2px #333;
  }

  input[type="submit"]:hover {
    font-size: 1.31rem;
    box-shadow: 1px 1px 1px 1px #333;
  }

  input[type="checkbox"] {
    font-size: 2.31rem;
    margin-right: 0.3em;
    width: unset;
  }

  .subscribeText {
    margin-top: 1em;
    width: 300px;
    font-size: 1.4rem;
  }

  .subscribeText a {
    color: red;
  }

  .onSubmitText {
    margin-top: 1em;
    width: 300px;
  }

  .red {
    background-color: red;
  }

  * {
    box-sizing: border-box;
  }
`;
