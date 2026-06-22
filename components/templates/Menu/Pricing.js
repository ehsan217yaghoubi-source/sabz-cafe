import Card from "@/components/modules/Card/Card";
import React from "react";

function Pricing({ menu }) {
  const categories = [
    { title: "Hot Coffee", type: "hot" },
    { title: "Cold Coffee", type: "cold" },
  ];
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Menu & Pricing
          </h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>
        <div className="row">
          {categories.map((category) => (
            <div key={category.type} className="col-lg-6">
              <h1 className="mb-5">{category.title}</h1>
              {menu
                .filter((menu) => menu.type === category.type)
                .slice(0, 3)
                .map((item) => (
                  <Card key={item.id} {...item} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
