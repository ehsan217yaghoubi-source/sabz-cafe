import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Pricing from "@/components/templates/Menu/Pricing";
import React from "react";

function Menu({ menu }) {
  return (
    <>
      <PageHeader route="Menu" />
      <Pricing menu={menu} />
    </>
  );
}

export async function getStaticProps() {
  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData = await menuResponse.json();
  return {
    props: {
      menu: menuData,
    },
    revalidate: 43200,
  };
}

export default Menu;
