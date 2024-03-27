import React from "react";
import { TiTick } from "react-icons/ti";
const Contact = () => {
  return (
    <div className="wrapper">
      <div className="contact">
        <div>
          <h2>contact us every time you want !</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quaerat rerum quidem saepe in perspiciatis! Quae id ?{" "}
            <span>
              <TiTick />
            </span>
          </p>
        </div>
        <div>
          <div>
            <h5>Email:</h5>
            <p>info@gmail.com</p>
          </div>
          <div>
            <h5>phone:</h5>
            <p>0912345678</p>
          </div>
        </div>
        <div>
          <h5>bulk purchase request:</h5>
          <p>
            <a href="#">go to form</a> <a href="#">more information</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
