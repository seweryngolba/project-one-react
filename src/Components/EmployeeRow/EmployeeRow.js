import React from "react";

function EmployeeRow({ firstName, lastName, description, photoUrl }) {
  return (
    <div className="box">
      <div
        className="member-photo"
        style={{ backgroundImage: `url(${photoUrl})` }}
      ></div>
      <div className="member-about">
        <h1 className="team">
          {firstName} {lastName}
        </h1>
        <p className="text-about">{description}</p>
      </div>
    </div>
  );
}

export default EmployeeRow;
