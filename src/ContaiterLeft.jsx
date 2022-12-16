import { useEffect, useState } from "react";

export const ContainerLeft = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const elem = document.querySelector(".banner");
      const position = elem.getBoundingClientRect();

      if (position.top < window.innerHeight) {
        setValue("Orange banner is visible!");
        elem.classList.add("active");
      }
    });
  }, []);
  return (
    <div className="container">
      <div className="section">
        <h2>Section</h2>
        <h5>React to an element appearing in the viewport when you scroll.</h5>
        <h5>We used {`window.addEventListener("scroll", () => {})`}</h5>
        <h5>Bad practice 😬</h5>
        <h3>{value}</h3>
      </div>

      <div className="section banner">
        <h2>Banner</h2>
      </div>

      <div className="section">
        <h2>Section</h2>
      </div>
    </div>
  );
};
