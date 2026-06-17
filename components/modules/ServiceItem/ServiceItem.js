import React from "react";

function ServiceItem({ title, desc, img, icon: Icon }) {
  return (
    <div class="col-lg-6 mb-5">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <img class="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div
          class="col-sm-7"
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
              <Icon
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  margin: "0 auto",
                }}
              />
            </div>
            <h4>{title}</h4>
          </div>

          <p class="m-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
