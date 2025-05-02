import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const SingleDoctor = ({ doctor }) => {
  const { image, name, designation, social_links } = doctor;
  return (
    <div>
      <Link>
        <img className="rounded-md" src={image} alt={name} />
        <h2 className="text-center text-2xl font-semibold mt-6">{name}</h2>
        <h3 className="text-center font-medium text-[#65768a] py-2">
          {designation}
        </h3>
      </Link>
      <div className="flex justify-center gap-4">
        <Link
          className="hover:text-[#e12454]"
          to={social_links.facebook}
          target="_blank"
        >
          <FaFacebookF className="text-[15px]" />
        </Link>
        <Link
          className="hover:text-[#e12454]"
          to={social_links.twitter}
          target="_blank"
        >
          <FaXTwitter />
        </Link>
        <Link
          className="hover:text-[#e12454]"
          to={social_links.linkedin}
          target="_blank"
        >
          <FaLinkedinIn className="text-[17px]" />
        </Link>
      </div>
    </div>
  );
};

export default SingleDoctor;
