import React from "react";
import stars from "../assets/Stars.png";
import avaone from "../assets/dianne.png";
import avatwo from "../assets/kristin.png";
import avathree from "../assets/murphy.png";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <div className="client">
        <h5 className="m-0">Clients Feedback</h5>
        <h3 className="m-0">Customer testimonials</h3>
      </div>
      <div className="testimonial-grid">
        <div className="test">
          <img src={stars} alt="" />
          <p className="m-0">
            "Iyiola's suberp skills modernized our online impact,
            resulting in increased customer inquiries. Highly recommend his
            services."
          </p>
          <div className="d-flex align-items-center avatar">
            <img src={avaone} alt="" />
            <div>
              <h5 className="m-0">Dianne Russell</h5>
              <p className="m-0">Starbucks</p>
            </div>
          </div>
        </div>

        <div className="test">
          <img src={stars} alt="" />
          <p className="m-0">
            "Iyiola transformed our website, increasing involvement
            substaintably. His specialization and attention to detail are unrivaled."
          </p>
          <div className="d-flex align-items-center avatar">
            <img src={avatwo} alt="" />
            <div>
              <h5 className="m-0">Kristin Watson</h5>
              <p className="m-0">Louis Vuitton</p>
            </div>
          </div>
        </div>

        <div className="test">
          <img src={stars} alt="" />
          <p className="m-0">
            "Iyiola designed our website beautifully, enhancing user
            experience and accelerating more people to my business."
          </p>
          <div className="d-flex align-items-cente avatar">
            <img src={avathree} alt="" />
            <div>
              <h5 className="m-0">Kathryn Murphy</h5>
              <p className="m-0">McDonald's</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
