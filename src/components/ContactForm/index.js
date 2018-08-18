import React from "react";

import "./style.css";

export default () => {
  return (
    <div>
      <form className="form" name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <h2 className="contact-heading">CONTACT US</h2>
        <p type="Name:">
          <input
            className="form-input"
            placeholder="Write your name here.."
            type="text"
            name="name"
            required
            aria-required="true"
            pattern="[a-zA-Z][a-zA-Z0-9\s]*"
            title="Please enter your name e.g.: John Doe"
          />
        </p>
        <p type="Email:">
          <input
            className="form-input"
            placeholder="Let us know how to contact you back.."
            type="email"
            name="email"
            required
            aria-required="true"
            pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
            title="Please enter valid email e.g.: example@example.com"
          />
        </p>
        <p type="Message:">
          <textarea
            className="form-input"
            placeholder="What would you like to tell us.."
            defaultValue={""}
            required
            aria-required="true"
          />
        </p>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};
