import React from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import memberone from "../../Assets/memberone.jpg";
import membertwo from "../../Assets/membertwo.jpg";

function AboutSection() {
  const employees = [
    {
      firstName: "Anna",
      lastName: "Kowalska",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolores esse neque laboriosam consectetur quis inventore fugit blanditiis porro earum repudiandae, labore quae natus aspernatur, culpa nesciunt sequi nemo enim magni eligendi tempore delectus quidem? Culpa, quam eligendi! Unde optio expedita deserunt voluptatibus, totam minima saepe quae quia temporibus earum.",
      photoUrl: memberone,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolores esse neque laboriosam consectetur quis inventore fugit blanditiis porro earum repudiandae, labore quae natus aspernatur, culpa nesciunt sequi nemo enim magni eligendi tempore delectus quidem? Culpa, quam eligendi! Unde optio expedita deserunt voluptatibus, totam minima saepe quae quia temporibus earum.",
      photoUrl: membertwo,
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="headline-about">Nasi specjaliści</h2>
        {employees.map((employee, index) => (
          <EmployeeRow
            key={index}
            firstName={employee.firstName}
            lastName={employee.lastName}
            description={employee.description}
            photoUrl={employee.photoUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
