import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./Components/Hero";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
