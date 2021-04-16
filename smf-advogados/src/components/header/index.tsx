import React from "react";

import { Header, LogoWrapper, VideoWrapper } from "./styles";
import logo from "../../assets/img/logo.png";

export const HeaderComponent: React.FunctionComponent<{}> = () => {
  return (
    <Header>
      <LogoWrapper>
        <img src={logo} alt="Logo" />
      </LogoWrapper>

      <VideoWrapper>
        <video muted loop autoPlay preload="auto">
          <source
            src="http://www.smfadvogados.com/wp-content/uploads/2020/09/Video1.mp4"
            type="video/mp4"
          />
          <source
            src="http://www.smfadvogados.com/wp-content/uploads/2020/09/Video1.webm"
            type="video/webm"
          />
        </video>
      </VideoWrapper>
    </Header>
  );
};
