import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import TableViewIcon from "@mui/icons-material/TableView";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

function Services({ services }) {
  const iconMap = {
    LocalCafeIcon: LocalCafeIcon,
    FireTruckIcon: FireTruckIcon,
    TableViewIcon: TableViewIcon,
    MilitaryTechIcon: MilitaryTechIcon,
  };
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div className="row">
          {services.services.map((service) => {
             const IconComponent = iconMap[service.icon];
            return (
              <ServiceItem
                key={service.id}
                title={service.title}
                desc={service.desc}
                img={service.img}
                icon={IconComponent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
