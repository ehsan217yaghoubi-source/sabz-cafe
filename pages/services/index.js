import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ServicesDetails from "@/components/templates/Services/ServicesDetails";
import React from "react";

function Service({ data }) {
  return (
    <>
      <PageHeader route="Services" />
      <ServicesDetails data={data} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json();

  return {
    props: {
      data: servicesData,
    },
  };
}

export default Service;
