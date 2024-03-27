import React from "react";
import img1 from "./images/15years2.jfif";
import img2 from "./images/15years3.jfif";
import img3 from "./images/15years4.jfif";
import img4 from "./images/brands1.jfif";
import img5 from "./images/brands2.jfif";
import img6 from "./images/brands3.jfif";
import img7 from "./images/brands4.jfif";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import img8 from "./images/inspiration1.jfif";
import img9 from "./images/inspiration2.jfif";
import img10 from "./images/inspiration3.jfif";
const Home = () => {
  return (
    <div className="wrapper">
      <div className="home">
        <div>
          <div>
            <img src={img1} alt="" />
            <p>Earrings</p>
            <p>perfect gift for her</p>
            <a href="#">Buy now!</a>
          </div>
          <div>
            <img src={img2} alt="" />
            <p>Holiday decorations</p>
            <p>get ready before christmas</p>
            <a href="#">Buy now!</a>
          </div>
          <div>
            <img src={img3} alt="" />
            <p>Plants</p>
            <p>from cactus to tropical plants</p>
            <a href="#">Buy now!</a>
          </div>
        </div>
        <div>
          <div>
            <p>Free returns</p>
            <p>you can ask a refund anytime</p>
          </div>
          <div>
            <p>secure packaging</p>
            <p>you can ask a refund anytime</p>
          </div>
          <div>
            <p>free shipping</p>
            <p>you can ask a refund anytime</p>
          </div>
          <div>
            <p>best discounts</p>
            <p>you can ask a refund anytime</p>
          </div>
        </div>
        <div>
          <p>we produce the best handmade products.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            voluptatum debitis eum maxime eos fugiat tenetur quaerat harum, unde
            vitae minus quia molestias expedita iste temporibus, vero modi
            laboriosam sunt.
          </p>
          <a href="#">buy avada today</a>
        </div>
        <div>
          <div>
            <div>
              <img src={img4} alt="" />
              <p>christmas decoration</p>
            </div>
            <div>
              <img src={img5} alt="" />
              <p>DIY terrariums</p>
            </div>
            <div>
              <img src={img6} alt="" />
              <p>Ceramics</p>
            </div>
            <div>
              <img src={img7} alt="" />
              <p>handmade jewels</p>
            </div>
          </div>
          <div>
            <div>
              <p>Subscribe to our newsletter to recieve updates</p>
              <p>we will send you the good stuff. no spam!</p>
            </div>
            <div>
              <a href="#">Your name...</a>
              <a href="#">Your email...</a>
              <a href="#">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <p>avanda handmade</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            culpa ipsam autem officia, pariatur, quisquam error unde accusantium
            itaque similique cupiditate in aspernatur labore voluptates! Velit
            enim ex deleniti totam?
          </p>
          <div>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <IoLogoYoutube />
            </span>
          </div>
        </div>
        <div>
          <p>popular products</p>
          <p>floral masks</p>
          <p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className="dollar">$12.00</p>
          <p>small paint</p>
          <p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className="dollar">$15.00</p>
          <p>small paint</p>
          <p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className="dollar">$15.00</p>
        </div>
        <div>
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
        </div>
        <div>
          <p>featured products</p>
          <p>handmade neckless</p>
          <p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className="dollar">$40.00 - $90.00</p>
          <p>small paint</p>
          <p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className="dollar">$15.00</p>
          <p>small paint</p>
          <p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className="dollar">$15.00</p>
        </div>
        <div>
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
