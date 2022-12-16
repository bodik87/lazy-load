import { useInView } from "react-intersection-observer";

export const ContaiterRight = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    // triggerOnce: true,
  });

  return (
    <div className="container">
      <div className="section">
        <h2>Section</h2>
        <h5>We used React Intersection Observer</h5>
        <h5>👍</h5>
        <h3>{`${inView ? "Orange banner is visible!" : ""}`}</h3>
      </div>

      <div ref={ref} className={`section banner ${inView ? "active" : ""}`}>
        <h2>Banner</h2>
      </div>

      <div className="section">
        <h2>Section</h2>
      </div>
    </div>
  );
};
