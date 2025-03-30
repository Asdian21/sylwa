import { StyleLecture_1 } from "./Lecture_1.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export const Lecture_1 = () => {
  return (
    <StyleLecture_1>
      <h1>Название лекции</h1>

      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          type: "loop", // Зацикленный слайдер
          perPage: 1, // Один слайд за раз
          autoplay: false, // Автовоспроизведение
          //   interval: 3000, // Интервал в мс
          pagination: true, // Точки навигации
          arrows: true, // Кнопки вперед/назад
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img src="./image_1.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./image_2.jpeg" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./image_1.png" alt="" />
        </SplideSlide>
      </Splide>

      <div className="text__container"></div>
      <h2>Проверка себя</h2>
    </StyleLecture_1>
  );
};
