import React from "react";
import "../Styles/PagesStyle/products.css";
import Hero from "../components/ProductPages/Hero";
import SolarPhotovoltaic from "../components/ProductPages/SolarPhotovoltaic";
import SolarThermotechnology from "../components/ProductPages/SolarThermotechnology";
import PumpingSolutions from "../components/ProductPages/PumpingSolutions";
import STPAndETP from "../components/ProductPages/STPAndETP";
const Products = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <SolarPhotovoltaic/>
      </section>
      <section>
        <SolarThermotechnology />
      </section>
      <section>
      <PumpingSolutions/>
      </section>
      <section>
        <STPAndETP/>
      </section>
    </div>
  );
};

export default Products;
