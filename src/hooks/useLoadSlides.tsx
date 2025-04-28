import { useEffect, useState } from "react";

export const useLoadSlides = (
  path: string,
  prefix = "slide_",
  extension = "jpg"
) => {
  const [slides, setSlides] = useState<string[]>([]);

  useEffect(() => {
    let index = 1;
    const maxAttempts = 50;
    const loaded: string[] = [];

    const loadNext = () => {
      if (index > maxAttempts) {
        setSlides(loaded);
        return;
      }

      const img = new Image();
      const src = `${path}/${prefix}${index}.${extension}`;

      img.onload = () => {
        loaded.push(src);
        index++;
        loadNext();
      };

      img.onerror = () => {
        setSlides(loaded); // Остановить, если следующего изображения нет
      };

      img.src = src;
    };

    loadNext();
  }, [path, prefix, extension]);

  return slides;
};
