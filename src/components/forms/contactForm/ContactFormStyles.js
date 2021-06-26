import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: darkgreen;
  padding: 2em;
  box-sizing: border-box;

  @media (min-width: 1000px) {
    width: 60%;
  }
`;

export const ContactTitle = styled.h2`
  padding: 1em;
  color: whitesmoke;
  font-size: 1.4em;
  padding: 0;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: block;
    width: 300px;
    font-size: 1.2rem;
    color: whitesmoke;
    @media (min-width: 1000px) {
      width: unset;
    }
  }

  label a {
    color: blue;
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-gap: 10px;
    .title {
      grid-area: title;
    }
    .fullName {
      grid-area: left1;
    }
    .email {
      grid-area: left2;
    }
    .phone {
      grid-area: left3;
    }
    .message {
      grid-area: right;
    }
    .submit {
      grid-area: bottom1;
    }
    .check_box {
      grid-area: bottom2;
    }

    grid-template-columns: 50% 50% auto;
    grid-template-areas:
      "title title ."
      "left1 right ."
      "left2 right ."
      "left3 right ."
      "bottom1  bottom2 .";
  }

  input {
    padding: 1em;
    width: 300px;
    border: 0;
    margin-top: 0.8em;
    font-size: 1.3rem;
    @media (min-width: 1000px) {
      width: 90%;
    }
  }

  textarea {
    padding: 1em;
    width: 300px;
    border: 0;
    margin-top: 0.8em;
    font-size: 1.3rem;

    @media (min-width: 1000px) {
      height: 250px;
      width: 100%;
    }
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

  .onSubmitText {
    margin-top: 1em;
    width: 300px;
    color: whitesmoke;
  }

  .red {
    background-color: red;
  }

  * {
    box-sizing: border-box;
  }
`;
