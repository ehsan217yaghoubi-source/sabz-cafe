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
          {categories.map((category) => {
            const filteredData = data.filter(
              (item) => item.type === category.type,
            );
            return (
              <div key={category.type} className="col-lg-6">
                <h1 className="mb-5">{category.title}</h1>
                {filteredData.length > 0 ? (
                  filteredData.map((item) => <Card key={item.id} {...item} />)
                ) : (
                  <h4>No results found for {category.title}</h4>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Result;
