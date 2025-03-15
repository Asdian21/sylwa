import { StyleSearch } from "./Search.style";
import { useState, useRef } from "react";

export const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => inputRef.current?.focus(), 0); // Фокус после ререндера
  };

  return (
    <StyleSearch>
      <input
        ref={inputRef}
        type="text"
        className={`input ${isActive ? "expanded" : ""}`} // Добавляем класс
        placeholder="Search..."
        onBlur={() => setIsActive(false)} // Убираем фокус — уменьшаем поле
        onClick={handleClick}
      />
    </StyleSearch>
  );
};
