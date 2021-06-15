import React from "react";

import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductElements";

const Pizzas = ({ heading, productData }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>
        {heading}
        <ProductWrapper>
          {productData.map((data, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={data.img} alt={data.alt} />
                <ProductInfo>
                  <ProductTitle>{data.title}</ProductTitle>
                  <ProductDesc>{data.desc}</ProductDesc>
                  <ProductPrice>{data.price}</ProductPrice>
                  <ProductButton>{data.button}</ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsHeading>
    </ProductsContainer>
  );
};

export default Pizzas;
