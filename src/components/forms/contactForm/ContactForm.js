import { useState, useEffect } from "react";
import { Form, Container } from "./ContactFormStyles";

function ContactForm() {
  const [formInput, setFormInput] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isFullNameError, setIsFullNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isMessageError, setIsMessageError] = useState(false);
  const [onSubmitMessage, setOnSubmitMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormInput((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handleSubmit(e) {
    console.log("1");
    e.preventDefault();
    setIsFullNameError(!formInput.fullName ? true : false);
    setIsEmailError(!formInput.email ? true : false);
    setIsPhoneError(!formInput.phone ? true : false);
    setIsMessageError(!formInput.message ? true : false);
  }

  useEffect(() => {
    if (!isFullNameError && !isEmailError && !isPhoneError && !isMessageError) {
      console.log(isFullNameError);
      setOnSubmitMessage("Thank you");
      setFormInput({
        fullName: "",
        email: "",
        phone: "",
        message: ""
      });
      // send to database inc issubscribed
    } else {
      console.log(isFullNameError);
      setOnSubmitMessage("Please complete all required fields");
      return null;
    }
  }, [isFullNameError, isEmailError, isPhoneError, isMessageError]);

  function handleSubscribed() {
    setIsSubscribed(!isSubscribed);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="grid-container">
        <div className="fullName">
          <input
            className={isFullNameError ? "red" : null}
            type="text"
            placeholder="name*"
            name="fullName"
            value={formInput.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="email">
          <input
            className={isEmailError ? "red" : null}
            type="email"
            placeholder="email*"
            name="email"
            value={formInput.email}
            onChange={handleChange}
          />
        </div>

        <div className="phone">
          <input
            className={isPhoneError ? "red" : null}
            type="tel"
            placeholder="phone*"
            name="phone"
            value={formInput.phone}
            onChange={handleChange}
          />
        </div>

        <div className="message">
          <textarea
            className={isMessageError ? "red" : null}
            placeholder="your message*"
            name="message"
            value={formInput.message}
            onChange={handleChange}
          />
        </div>
        <div className="submit">
          <input type="submit" value="Submit" />
          <p className="onSubmitText">{onSubmitMessage}</p>
        </div>
        <div className="check_box">
          <label>
            <input
              type="checkbox"
              checked={isSubscribed}
              onChange={handleSubscribed}
            />
            Tick if you'd like us to keep in touch with you about all our
            restaurants with exclusive news and advance booking opportunities.{" "}
            <a href="/">data policy and protection can be found here</a>.
          </label>
        </div>
      </Form>
    </Container>
  );
}

export default ContactForm;
