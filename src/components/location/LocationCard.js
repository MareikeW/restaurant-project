import { Container, LocationText, LocationTitle } from "./LocationCardStyles";

function LocationCard() {
  return (
    <Container>
      <LocationTitle>Find Us</LocationTitle>
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.822481199123!2d-3.5256033190293037!3d50.72323244697595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486da43cfdb4bcad%3A0xed3422c130cd554!2sRendezvous%20Wine%20Bar!5e0!3m2!1sen!2suk!4v1624708188476!5m2!1sen!2suk"
        width="100%"
        height="295"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
      <LocationText>
        30-40 Southernhay East, Exeter. EX1 1PE
        <br />
        07931 778633 || @OurRestaurant
      </LocationText>
    </Container>
  );
}

export default LocationCard;
