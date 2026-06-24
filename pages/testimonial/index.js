import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Comments from "@/components/templates/Testimonial/Comments";
import React from "react";

function Testimonial({ comments }) {
  return (
    <>
      <PageHeader route="Testimonial" />
      <Comments comments={comments} />
    </>
  );
}

export async function getStaticProps() {
  const commentsResponse = await fetch("http://localhost:4000/comments");
  const commentsData = await commentsResponse.json();

  return {
    props: {
      comments: commentsData,
    },
    revalidate: 43200,
  };
}

export default Testimonial;
