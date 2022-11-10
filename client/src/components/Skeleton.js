import React from "react";
import { Link } from "react-router-dom";

export default function Skeleton() {
  return (
    <div>
      <form className="form">
        <h2>Add your first expense</h2>
        <div className="form-center">
          <Link to="/add-spending" className="btn">
            Start Now
          </Link>
        </div>
      </form>
    </div>
  );
}
