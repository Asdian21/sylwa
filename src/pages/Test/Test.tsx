import { useRef } from "react";

export const Test = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={scrollToSection}>Перейти к секции</button>
      <div style={{ height: "100vh" }} /> {/* Просто для отступа */}
      <div
        ref={sectionRef}
        style={{ height: "1000px", background: "lightblue" }}
      >
        Это нужная секция
      </div>
    </div>
  );
};
