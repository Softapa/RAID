// _app.js
import "../styles/globals.css";
import en from "../i18n/en.json";
import fr from "../i18n/fr.json";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;
  const [selectedLocale, setSelectedLocale] = useState(locale);

  const toggleLanguage = () => {
    const newLocale = selectedLocale === "en" ? "fr" : "en";
    setSelectedLocale(newLocale);
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };
  const messages = {
    en,
    fr,
  };

  function getDirection(locale) {
    return "ltr";
  }
  return (
    <IntlProvider locale={selectedLocale} messages={messages[selectedLocale]}>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
      <link rel="icon" href="/favicon.ico" hrefLang="en" />
      <link rel="icon" href="/favicon.ico" hrefLang="fr" />
      <Component
        {...pageProps}
        dir={getDirection(selectedLocale)}
        toggleLanguage={toggleLanguage}
        selectedLocale={selectedLocale}
      />
    </IntlProvider>
  );
}

export default MyApp;

//

// function MyApp({ Component, pageProps }) {
//   const { locale } = useRouter();
//   return (
//     <IntlProvider locale={locale} messages={messages[locale]}>
//       <Component {...pageProps} dir={getDirection(locale)} />
//     </IntlProvider>
//   );
// }

// export default MyApp;
