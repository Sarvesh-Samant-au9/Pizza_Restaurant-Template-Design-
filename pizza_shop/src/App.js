import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./Components/Hero";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
