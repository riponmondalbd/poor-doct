import React from "react";
import { Parallax } from "react-parallax";

import bgImage from "../../assets/about/banner.jpg";

const PageTopSection = ({ title }) => {
  return (
    <Parallax
      blur={8}
      bgImage={bgImage}
      disabled={true}
      bgImageAlt="top section doctor"
      strength={200}
    >
      <div className="hero h-[400px]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-semibold">{title}</h1>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default PageTopSection;
