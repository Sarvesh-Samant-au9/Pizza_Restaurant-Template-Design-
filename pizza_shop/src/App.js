import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./Components/Hero";
import Products from "./Components/Pizzas";
import { productData, desertData } from "./Components/Pizzas/data";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favourite" productData={productData} />
      <Feature />
      <Products heading="Desert Options for You" productData={desertData} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
