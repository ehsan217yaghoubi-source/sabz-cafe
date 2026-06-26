import styles from "@/styles/Product.module.css";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const ProductsDetails = ({ data }) => {
  return (
    <div
      className={`${styles.product_main} align-items-center mb-5 text-decoration-none justify-content-center`}
    >
      <img
        className={`${styles.product_img}  mb-3 mb-sm-0`}
        src={data.img}
        alt=""
      />
      <div style={{ width: "500px" }}>
        <h4 className="text-white mb-3">{data.title}</h4>
        <hr style={{ borderColor: "white" }} />
        <div className={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={
                index < Math.round(data.score || 0) ? styles.fill_star : ""
              }
            />
          ))}
        </div>
        <div className={styles.price_details}>
          {data.off ? (
            <>
              <p>${data.price - (data.price * data.off) / 100}</p>
              <p>${data.price}</p>
            </>
          ) : (
            <p>${data.price}</p>
          )}
        </div>
        <p style={{ color: "#fff" }} className="m-0 pr-5">
          {data.desc}
        </p>
        <button className={styles.shopping_btn}>
          buy
          <ShoppingBagIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;
