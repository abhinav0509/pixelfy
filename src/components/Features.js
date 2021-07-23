import React from "react";
import { FaSearch, FaHireAHelper, FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section classNameName="features">
      <h2 className="text-center">Top Features</h2>
      <div className="features-info">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              <span>
                <FaSearch />
              </span>
              Fast Search
            </h4>
            <p className="card-text">
              Get the picture you need just search from large collection of high
              quality pictures
            </p>
            <Link to="/search" className="btn btn-primary">
              Search
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              <span>
                <FaHireAHelper />
              </span>
              Hire
            </h4>
            <p className="card-text">
              Hire awesome photographers around your locality, communicate with
              directly
            </p>
            <Link to="/hire" className="btn btn-primary">
              Start Hiring
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              <span>
                <FaMoneyCheckAlt />
              </span>
              Sell Pictures
            </h4>
            <p className="card-text">
              Sell your pictures to large number of audience around the
              world.Get paid instantly
            </p>
            <Link to="#" className="btn btn-primary">
              Start Selling
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
