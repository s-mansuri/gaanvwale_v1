import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";

function Contact() {
  return (
    <div>
      <MainHeader />
      <div className="mainContent">
        <div className="contactContent">
          <div style={{ marginTop: "10rem" }}>
            We would love to hear from you! For any inquiries or feedback,
            please feel free to contact us via email, phone or through our
            social media channels. Our team is always available to assist you
            and ensure that your experience with us is a memorable one.
          </div>
          <hr />
          <div>Mobile/Whatsapp - +91-9407190731, +91-9669333088</div>
          <div>Email - iliyasmansuri731@gmail.com, smansuri960@gmail.com</div>
          <div>
            Website - <a href="https://www.gaanvwale.com">GaanvWale</a>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default Contact;
