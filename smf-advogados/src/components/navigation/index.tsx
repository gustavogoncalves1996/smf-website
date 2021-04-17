import React from "react";

import { Navigation, LanguagesContainer, LanguageOption } from "./styles";
import { getTranslation } from "../../helpers";

interface Props {
  language: string;
  setLanguage: (language: string) => void;
}

export const NavigationComponent: React.FunctionComponent<Props> = ({
  language,
  setLanguage,
}) => {
  const [withOpacity, setWithOpacity] = React.useState(true);
  const handleScroll = () => {
    const myNav = document.getElementById("navigation_bar");
    if (myNav) {
      if (window.scrollY > window.innerHeight - 40) {
        if (withOpacity) {
          setWithOpacity(false);
        }
      } else {
        if (!withOpacity) {
          setWithOpacity(true);
        }
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Navigation
      id="navigation_bar"
      style={{
        backgroundColor: withOpacity ? "transparent" : "rgba(0, 0, 0, 0.55)",
      }}
    >
      <nav>
        <ul>
          <li>
            <a href="#about_us">{getTranslation("about_us", language)}</a>
          </li>
          <li>
            <a href="#our_team">{getTranslation("our_team", language)}</a>
          </li>
          <li>
            <a href="#practice_areas">
              {getTranslation("practice_areas", language)}
            </a>
          </li>
          <li>
            <a href="#partnerships">
              {getTranslation("partnerships", language)}
            </a>
          </li>
          <li>
            <a href="#news">{getTranslation("news", language)}</a>
          </li>
          <li>
            <a href="#contact_us">{getTranslation("contacts", language)}</a>
          </li>
        </ul>
      </nav>
      <LanguagesContainer>
        <LanguageOption
          onClick={(): void => setLanguage("en")}
          style={{
            marginRight: 0,
            opacity: language === "en" ? 0.9 : 0.6,
            transition: "all .4s",
          }}
        >
          <img
            src="https://hatscripts.github.io/circle-flags/flags/gb.svg"
            alt="en"
          />
          <div>EN</div>
        </LanguageOption>
        <LanguageOption
          onClick={(): void => setLanguage("pt")}
          style={{
            marginLeft: 0,
            opacity: language === "pt" ? 0.9 : 0.6,
            transition: "all .4s",
          }}
        >
          <img
            src="https://hatscripts.github.io/circle-flags/flags/pt.svg"
            alt="pt"
          />
          <div>PT</div>
        </LanguageOption>
      </LanguagesContainer>
    </Navigation>
  );
};
