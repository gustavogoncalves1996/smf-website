import React from "react";

import { AppContainer, GlobalStyle } from "./App.styles";
import {
  HeaderComponent,
  BodyComponent,
  NavigationComponent,
  FooterComponent,
  ModalComponent,
} from "./components";

const DEFAULT_LANGUAGE = "en";

export interface ModalType {
  open: boolean;
  title: string;
  text: string;
}

const App: React.FunctionComponent<{}> = () => {
  const [language, setLanguage] = React.useState(DEFAULT_LANGUAGE);
  const [modal, setModal] = React.useState({
    open: false,
    title: "",
    text: "",
  });

  return (
    <AppContainer>
      <GlobalStyle />
      <ModalComponent language={language} modal={modal} setModal={setModal} />
      <NavigationComponent language={language} setLanguage={setLanguage} />
      <HeaderComponent />
      <BodyComponent language={language} setModal={setModal} />
      <FooterComponent language={language} />
    </AppContainer>
  );
};

export default App;
