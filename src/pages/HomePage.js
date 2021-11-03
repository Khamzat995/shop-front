import React from "react";
import { FeaturedProducts, Jumbotron, Services, Contact } from "../components";
const HomePage = () => {
  return (
    <main>
      <Jumbotron />
          <FeaturedProducts />
          <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
