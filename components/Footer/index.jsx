/*
 * component: Footer
 * author: Juliet Kelechi
 * Date: September 20, 2020
 */

import React from "react";
import { FooterStyles } from "./footer.styled";
import { BsArrowRight } from 'react-icons/bs';
import Button from "../Button";
import Divider from "../Dividers/index.component";
import Input from "../Inputs/Inputs.component";
import {P} from '../../components/FontSize/styles'

const Footer = () => {
  return (
    <FooterStyles>
      <section className="middle-layer">
        <div className="col-4 ">
          <h6 className="col-4">A & E Properties</h6>
        </div>
        <div className="col-4">
          <h6>Contact Information</h6>
          <ul>
            <a href="">
              <li>Email: shadowMask@yahoomail.com</li>
            </a>
            <a href="">
              <li>Tel: (234) 000 000 0000</li>
            </a>
          </ul>
        </div>
        <div className="col-4">
          <h6>On Social Networks</h6>
          <ul>
            <a href="">
              <li>Facebook</li>
            </a>
            <a href="">
              <li>Twitter</li>
            </a>
            <a href="">
              <li>Instagram</li>
            </a>
            <a href="">
              <li>Linkedin</li>
            </a>
          </ul>
        </div>
        <div className="col-4">
          <h6>Subscribe Newsletter</h6>

          <aside>
            {/*<Input*/}
            {/*  label={"Email"}*/}
            {/*    inputName={"email"}*/}
            {/*/>*/}
            <Button
              type={"submit"}
              variant={"secondary"}
              click={() => {
              }}
              text={"Subscribe"}
            />
          </aside>
        </div>
      </section>

      <Divider
        width={"80%"}
      />

      <section className="bottom-banner">
        <aside>
          <ul>
            <a href="/privacy-policy">
              <li>
                Privacy Policy
              </li>
            </a>
            <a href="/terms-and-conditions">
              <li>Terms & Conditions</li>
            </a>
            <a href="/cookies-policy">
              <li>Cookies Policy</li>
            </a>
          </ul>
        </aside>
        <aside>
          &copy; {new Date().getFullYear()} A & E Properties <strong>(Juliet)</strong>
        </aside>
      </section>
    </FooterStyles>
  );
};

export default Footer;
