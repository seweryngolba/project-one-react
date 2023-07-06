import React from "react";

function EmployeeRow({ firstName, lastName, description, photoUrl }) {
  const photoClass =
    photoUrl === "./Assets/memberone.jpg"
      ? "member-one-photo"
      : "member-two-photo";

  return (
    <div className="box">
      <div className={photoClass}></div>
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
