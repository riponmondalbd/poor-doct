import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";
import useScroll from "../../../hooks/useScroll";

const Services = ({ category }) => {
  const scrollToTop = useScroll();
  const { _id, category_images, category_name, category_shortDetails } =
    category;
  return (
    <div className="card bg-base-100 rounded-[2px] shadow-sm">
      <figure>
        <img src={category_images[0]} alt={category_name} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category_name}</h2>
        <p>{category_shortDetails}</p>
        <div className="card-actions">
          <Link to={`/department-details/${_id}`} onClick={scrollToTop}>
            <button className="btn btn-ghost">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
