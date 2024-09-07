import React from "react";

const Page = ({ params }: { params: { projectId: string } }) => {
  return <div>page {params.projectId}</div>;
};

export default Page;
