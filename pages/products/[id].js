import Comments from "@/components/templates/Product/Comments";
import ProductDetails from "@/components/templates/Product/ProductDetails";
import React from "react";

function Product({ productData, productComment }) {
  return (
    <>
      <ProductDetails data={productData} />
      <Comments data={productComment} />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();
  const paths = data.map((product) => ({ params: { id: String(product.id) } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const productResponse = await fetch(
    `http://localhost:4000/menu/${params.id}`,
  );
  const productData = await productResponse.json();

  const commentsResponse = await fetch(`http://localhost:4000/comments`);
  const commentsData = await commentsResponse.json();

  const productComment = commentsData.filter(
    (comment) => comment.productID === +params.id,
  );

  console.log(productComment);
  console.log(productData);

  return {
    props: {
      productData,
      productComment,
    },
    revalidate: 43200,
  };
}

export default Product;
