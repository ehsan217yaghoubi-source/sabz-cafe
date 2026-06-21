import React from "react";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import TableViewIcon from "@mui/icons-material/TableView";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

function ServicesDetails({ data }) {
  const iconMap = {
    LocalCafeIcon,
    FireTruckIcon,
    TableViewIcon,
    MilitaryTechIcon,
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
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          {data.slice(0, 4).map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="col-lg-6 mb-5">
                <div className="row align-items-center">
                  <div className="col-sm-5">
                    <img
                      className="img-fluid mb-3 mb-sm-0"
                      src={service.img}
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          height: "35px",
                          width: "40px",
                          backgroundColor: "#da9f7b",
                          borderRadius: "100%",
                          textAlign: "center",
                          alignContent: "center",
                        }}
                      >
                        <IconComponent
                          style={{
                            color: "black",
                            fontSize: "1.5rem",
                            margin: "0 auto",
                          }}
                        />
                      </div>
                      {service.title}
                    </h4>
                    <p className="m-0">{service.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
