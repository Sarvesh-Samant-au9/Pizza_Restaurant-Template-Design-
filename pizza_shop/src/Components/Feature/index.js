import React from "react";
import { FeatureContainer, FeatureButton } from "./Feature";
const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Tangy Twisty Saucey and cheesy flavoured pizza</p>
      <FeatureButton>Order Now!!</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
