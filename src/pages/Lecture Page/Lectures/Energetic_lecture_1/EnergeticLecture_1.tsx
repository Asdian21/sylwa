import { StyleLecture_1 } from "./EnergeticLecture_1.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Quiz } from "../../../../components/Quiz/Quiz";
import { useLoadSlides } from "../../../../hooks/useLoadSlides";

export const Lecture_1 = () => {
  const slides = useLoadSlides("/lectures/lecture_1_slides_output");

  return (
    <StyleLecture_1>
      <h1>Название лекции</h1>
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          type: "loop",
          perPage: 1,
          autoplay: false,
          pagination: false,
          arrows: true,
        }}
        aria-label="Lecture Slides"
      >
        {slides.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} alt={`Слайд ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>

      <div className="text__container"></div>
      <Quiz />
    </StyleLecture_1>
  );
};
