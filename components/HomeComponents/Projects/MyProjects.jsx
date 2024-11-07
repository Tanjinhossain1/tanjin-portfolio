import { useState } from "react";
import { useQuery } from "react-query";
import PortfolioCard from "../../Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../../Common/ImageAndParagraphSkeleton";

const Projects = () => {
  const { isLoading, error, data } = useQuery("projects", () =>
    axios
      .get("api/projects")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );
  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-pink-600 mt-6">
        My Projects
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-2">
        {isLoading
          ? [1, 2, 3, 4].map((index) => (
              <ImageAndParagraphSkeleton
                key={index}
                className={"w-full object-cover"}
              />
            ))
          : data?.map((data, key) => <PortfolioCard key={key} data={data} />)}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Projects;
