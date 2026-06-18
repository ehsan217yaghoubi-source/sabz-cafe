import React from "react";
import Slider from "@/components/templates/Index/Slider";
import About from "@/components/templates/Index/About";
import Services from "@/components/templates/Index/Services";
import Offer from "@/components/templates/Index/Offer";

function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data} />
      <Offer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/services");
  const services = await res.json();

  return {
    props: {
      data: { services },
    },
    revalidate: 43200,
  };
}

export default Index;
