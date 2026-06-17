import React from "react";

function ServiceItem({ title, desc, img, icon: Icon }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div
          className="col-sm-7"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
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
              {Icon && (
                <Icon
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    margin: "0 auto",
                  }}
                />
              )}
            </div>
            <h4>{title}</h4>
          </div>

          <p className="m-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
