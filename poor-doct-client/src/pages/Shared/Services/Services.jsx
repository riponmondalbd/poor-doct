import React from "react";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import allergicImg from "../../../assets/health/service1.png";
import DentalImg from "../../../assets/health/service2.png";
import eyeImage from "../../../assets/health/service3.png";
import bodyImg from "../../../assets/health/service4.png";
import bloodImg from "../../../assets/health/service5.png";
import neurologyImg from "../../../assets/health/service6.png";

const Services = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pb-24">
      {/* eye */}
      <div className="card bg-base-100 rounded-[2px] shadow-sm">
        <figure className="px-10 pt-10">
          <img src={eyeImage} alt="Eye" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Eye Care</h2>
          <p>
            Eye care involves regular check-ups, protecting eyes from strain,
            using proper lighting, wearing sunglasses, and maintaining a healthy
            diet.
          </p>
          <div className="card-actions">
            <button className="btn btn-ghost">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* Blood Cancer */}
      <div className="card bg-base-100 rounded-[2px] shadow-sm">
        <figure className="px-10 pt-10">
          <img src={bloodImg} alt="Eye" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Blood Cancer</h2>
          <p>
            Blood cancer, or hematologic cancer, affects blood, bone marrow, or
            lymphatic system, including leukemia, lymphoma, and myeloma.
          </p>
          <div className="card-actions">
            <button className="btn btn-ghost">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* Neurology Sargery */}
      <div className="card bg-base-100 rounded-[2px] shadow-sm">
        <figure className="px-10 pt-10">
          <img src={neurologyImg} alt="Eye" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Neurology Sargery</h2>
          <p>
            Neurology surgery, or neurosurgery, involves treating disorders of
            the nervous system, including brain, spine, and peripheral nerve
            surgeries.
          </p>
          <div className="card-actions">
            <button className="btn btn-ghost">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* Allergic Issue */}
      <div className="card bg-base-100 rounded-[2px] shadow-sm">
        <figure className="px-10 pt-10">
          <img src={allergicImg} alt="Eye" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Allergic Issue</h2>
          <p>
            Allergic issues occur when the immune system overreacts to harmless
            substances, causing symptoms like itching, swelling, or breathing
            difficulties.
          </p>
          <div className="card-actions">
            <button className="btn btn-ghost">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* Body Surgery */}
      <div className="card bg-base-100 rounded-[2px] shadow-sm">
        <figure className="px-10 pt-10">
          <img src={bodyImg} alt="Eye" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Body Surgery</h2>
          <p>
            Body surgery refers to medical procedures that involve the removal,
            repair, or alteration of body parts to treat injuries, diseases, or
            disorders.
          </p>
          <div className="card-actions">
            <button className="btn btn-ghost">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* Dental Care */}
      <div className="card bg-base-100 rounded-[2px] shadow-sm">
        <figure className="px-10 pt-10">
          <img src={DentalImg} alt="Eye" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Dental Care</h2>
          <p>
            Dental care involves maintaining oral health through regular
            brushing, flossing, professional cleanings, and check-ups to prevent
            tooth decay and gum disease.
          </p>
          <div className="card-actions">
            <button className="btn btn-ghost">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
