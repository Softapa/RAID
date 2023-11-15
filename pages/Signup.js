import React, { useState } from "react";
// import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import styles from "./Authpage/Auth.module.css";
import Head from "next/head";
import Image from "next/image";
import { Images } from "../public/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socialIcons = [
  { icon: faFacebook, link: "https://facebook.com" },
  { icon: faTwitter, link: "https://twitter.com" },
  { icon: faInstagram, link: "https://instagram.com" },
  { icon: faLinkedin, link: "https://linkedin.com" },
  { icon: faYoutube, link: "https://youtube.com" },
];
const Signup = ({ dir, toggleLanguage, selectedLocale }) => {
  // const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.signup.head.title" });
  const titlediscription = intl.formatMessage({
    id: "page.signup.head.discription",
  });
  const emailheading = intl.formatMessage({ id: "page.signup.email.heading" });
  const emailinput = intl.formatMessage({ id: "page.signup.email.input" });
  const passwordheading = intl.formatMessage({
    id: "page.signup.password.heading",
  });
  const passwordinput = intl.formatMessage({
    id: "page.signup.password.input",
  });
  const terms = intl.formatMessage({
    id: "page.signup.terms",
  });
  const conditions = intl.formatMessage({
    id: "page.signup.condition",
  });
  const othersoptions = intl.formatMessage({
    id: "page.signup.others.options",
  });
  const signUpquate = intl.formatMessage({
    id: "page.signup.signin.quate",
  });
  const signin_signUp = intl.formatMessage({
    id: "page.signup.signin",
  });

  // const titlediscription = intl.formatMessage({
  //   id: "page.signin.head.discription",
  // });
  // const [selectedOption, setSelectedOption] = useState("en"); // State to store the selected option
  const signinbutton = intl.formatMessage({
    id: "page.signup.button",
  });
  const handleChange = (event) => {
    let newlocal = event.target.value;
    toggleLanguage(newlocal);
  };
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>SignIn</title>
      </Head>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div className={styles.leftColumn}>
          <div className={styles.sidebar}>
            <div className={styles.logo}>
              <Image className={styles.logo} fill src={Images.Logo} />
            </div>

            <select
              id="dropdown"
              onChange={handleChange}
              style={{
                height: "2vw",
                width: "10vw",
                border: "none",
                outline: "none",
                borderBlockColor: "#fff",
              }}
            >
              <option
                value="English"
                style={{
                  border: "none",
                  outline: "none",
                  borderBlockColor: "#fff",
                }}
              >
                English
              </option>
              <option
                value="Français"
                style={{
                  border: "none",
                  outline: "none",
                  borderBlockColor: "#fff",
                }}
              >
                Français
              </option>
            </select>
          </div>
          <div className={styles.maincontainer}>
            <div className={styles.maincontent}>
              <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.titlediscription}>
                  {titlediscription}
                </div>
                <div className={styles.inputcontain}>
                  <label className={styles.label}>{emailheading}</label>
                  <div>
                    <input
                      name="email"
                      placeholder={emailinput}
                      type="email"
                      className={styles.emailinput}
                    />
                  </div>
                </div>
                <div className={styles.inputcontain}>
                  <label className={styles.label}>{passwordheading}</label>
                  <div>
                    <input
                      name="email"
                      placeholder={passwordinput}
                      type="email"
                      className={styles.emailinput}
                    />
                  </div>
                </div>
                <div className={styles.termsAndconditions}>
                  <p className={styles.terms}>{terms}</p>

                  <p className={styles.conditions}>{conditions}</p>
                </div>
                <div className={styles.Signinbtn}>
                  <p className={styles.Signinbtntxt}>{signinbutton}</p>
                </div>
                <div className={styles.loginwith}>{othersoptions}</div>
                <div className={styles.othersbtnContain}>
                  <div className={styles.btnothers}>
                    <div className={styles.otherslogo}>
                      <Image fill src={Images.googlelogo} />
                    </div>
                    <text className={styles.logotxt}>Google</text>
                  </div>
                  <div className={styles.btnothers}>
                    <div className={styles.otherslogo}>
                      <Image fill src={Images.fblogo} />
                    </div>
                    <text className={styles.logotxt}>Facebook</text>
                  </div>
                </div>
                <div className={styles.signupcontainer}>
                  <text className={styles.signUpquate}>{signUpquate}</text>

                  <text className={styles.signin_signUp}>{signin_signUp}</text>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fotter}>
            <div className={styles.copyright}>Copyright 2023 RIAID INVSET</div>
            <div>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    size="xl"
                    className={styles.fonts}
                    color="#788B6C"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightColomn}>
          <Image fill property src={Images.signupbanner} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
