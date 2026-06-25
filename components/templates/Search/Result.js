import Card from "@/components/modules/Card/Card";
import React from "react";

function Result({ data }) {
  const categories = [
    { title: "Hot Coffee", type: "hot" },
    { title: "Cold Coffee", type: "cold" },
  ];
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          {categories.map((category) => (
            <div key={category.type} className="col-lg-6">
              <h1 className="mb-5">{category.title}</h1>
              {data
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

export default Result;
