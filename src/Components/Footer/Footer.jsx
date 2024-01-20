import React from "react";
import styles from "./Footer.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.Links}>
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Notes</li>
        </ul>
      </div>
      <div className={styles.contacts}>
        <h3>Quick Contact</h3>
        <ul>
          <li>
            <FaPhoneAlt />
            <span>
              Call Now
              <br />
              +91 9693993200
            </span>
          </li>
          <li>
            <FaWhatsapp size={20} />
            <span>
              {" "}
              Whatsapp
              <br />
              +91 9693993200
            </span>
          </li>
          <li>
            <FaInstagramSquare size={20} />
            <span>
              {" "}
              Email
              <br />
              bcaguide360@gmail.com
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.Address}>
        <h3>Office Address</h3>
        <ul>
          <li>Panchmukhi Mandir, Boring Road ,Patna</li>
        </ul>
      </div>
      <div className={styles.SocialLinks}>
        <h3>Social Links</h3>
        <ul>
          <li>
            <FaWhatsapp size={28} />
          </li>
          <li>
            <FaFacebook size={28} />
          </li>

          <li>
            <FaYoutube size={28} />
          </li>
          <li>
            <FaInstagramSquare size={28} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
