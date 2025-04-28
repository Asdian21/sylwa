import { StyleLecture_2 } from "./EnergeticLecture_2.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Quiz } from "../../../../components/Quiz/Quiz";
import { useLoadSlides } from "../../../../hooks/useLoadSlides";

export const Lecture_2 = () => {
  const slides = useLoadSlides("/lectures/lecture_2_slides_output");

  return (
    <StyleLecture_2>
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
    </StyleLecture_2>
  );
};
