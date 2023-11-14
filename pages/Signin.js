import React, { useState } from "react";
// import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import styles from "./Authpage/Auth.module.css";
import Head from "next/head";
import Image from "next/image";
import { Images } from "../public/constants";

const Signin = ({ dir, toggleLanguage, selectedLocale }) => {
  // const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.signin.head.title" });
  const titlediscription = intl.formatMessage({
    id: "page.signin.head.discription",
  });
  const emailheading = intl.formatMessage({ id: "page.signin.email.heading" });
  const emailinput = intl.formatMessage({ id: "page.signin.email.input" });
  const passwordheading = intl.formatMessage({
    id: "page.signin.password.heading",
  });
  const passwordinput = intl.formatMessage({
    id: "page.signin.password.input",
  });
  const forgetheading = intl.formatMessage({
    id: "page.signin.forgetheading.password",
  });
  const forgetpassword = intl.formatMessage({
    id: "page.signin.forget.password",
  });

  // const titlediscription = intl.formatMessage({
  //   id: "page.signin.head.discription",
  // });
  // const [selectedOption, setSelectedOption] = useState("en"); // State to store the selected option
  const signinbutton = intl.formatMessage({
    id: "page.signin.button",
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
              <Image
                className={styles.logo}
                height={6}
                width={6}
                layout="responsive"
                src={Images.Logo}
              />
            </div>
            <select
              id="dropdown"
              onChange={handleChange}
              style={{ height: "2vw", width: "10vw", border: "none" }}
            >
              <option value="English" style={{ border: "none" }}>
                English
              </option>
              <option value="Français" style={{ border: "none" }}>
                Français
              </option>
            </select>
          </div>
          <div className={styles.maincontainer}>
            <div className={styles.maincontent}>
              <div>
                <div>{title}</div>
                <div className={styles.titlediscription}>
                  {titlediscription}
                </div>
                <label className={styles.label}>{emailheading}</label>
                <div>
                  <input
                    name="email"
                    placeholder={emailinput}
                    type="email"
                    className={styles.emailinput}
                  />
                </div>
                <label className={styles.forgetheading}>
                  {passwordheading}
                </label>
                <div>
                  <input
                    name="email"
                    placeholder={passwordinput}
                    type="email"
                    className={styles.emailinput}
                  />
                </div>
                <div className={styles.forgetcontain}>
                  <text className={styles.forgetheading}>{forgetheading}</text>
                  <text className={styles.forgetpassword}>
                    {forgetpassword}
                  </text>
                </div>
                <div className={styles.Signinbtn}>
                  <p className={styles.Signinbtntxt}>{signinbutton}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightColomn}>
          <Image fill property src={Images.siginbanner} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
