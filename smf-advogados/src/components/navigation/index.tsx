import React from "react";

import { Navigation, LanguagesContainer, LanguageOption } from "./styles";
import { getTranslation } from "../../helpers";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

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
        backgroundColor: withOpacity
          ? "transparent"
          : "var(--dark-surface-color-800, rgba(0, 0, 0, 0.8))",
      }}
    >
      <nav>
        <ul>
          <li>
            <a href="#root">
              <HomeIcon />
              <div>{getTranslation("home", language)}</div>
            </a>
          </li>
          <li>
            <a href="#about_us">
              <InfoIcon />
              <div>{getTranslation("about_us", language)}</div>
            </a>
          </li>
          <li>
            <a href="#our_team">
              <PeopleIcon />
              <div>{getTranslation("our_team", language)}</div>
            </a>
          </li>
          <li>
            <a href="#practice_areas">
              <WorkIcon />
              <div>{getTranslation("practice_areas", language)}</div>
            </a>
          </li>
          <li>
            <a href="#partnerships">
              <GroupWorkIcon />
              <div>{getTranslation("partnerships", language)}</div>
            </a>
          </li>
          <li>
            <a href="#news">
              <FiberNewIcon />
              <div>{getTranslation("news", language)}</div>
            </a>
          </li>
          <li>
            <a href="#contact_us">
              <ContactPhoneIcon />
              <div>{getTranslation("contacts", language)}</div>
            </a>
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
