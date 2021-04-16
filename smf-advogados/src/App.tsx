import React from "react";

import { AppContainer, GlobalStyle } from "./App.styles";
import {
  HeaderComponent,
  BodyComponent,
  NavigationComponent,
  FooterComponent,
} from "./components";

const DEFAULT_LANGUAGE = "en";

const App: React.FunctionComponent<{}> = () => {
  const [language, setLanguage] = React.useState(DEFAULT_LANGUAGE);

  return (
    <AppContainer>
      <GlobalStyle />
      <NavigationComponent language={language} setLanguage={setLanguage} />
      <HeaderComponent />
      <BodyComponent language={language} />
      <FooterComponent language={language} />
    </AppContainer>
  );
};

export default App;
