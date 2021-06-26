import React from "react";
import styled from "styled-components";
import ContactForm from "../components/forms/contactForm/ContactForm";
import LocationCard from "../components/location/LocationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Contact = () => {
  return (
    <Container>
      <ContactForm />
      <LocationCard />
    </Container>
  );
};

export default Contact;
