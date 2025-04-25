import { StyleEnergeticPractice_1 } from "./EnergeticPractice_1.style";
import "@splidejs/splide/dist/css/splide.min.css";
import { Quiz } from "../../../../components/Quiz/Quiz";

export const EnergeticPractice_1 = () => {
  return (
    <StyleEnergeticPractice_1>
      <h1>Название практики</h1>

      <div className="text__container"></div>
      <Quiz />
    </StyleEnergeticPractice_1>
  );
};
