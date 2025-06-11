import { useEffect, useRef, useState } from "react";
import { renderAsync } from "docx-preview";
// import { Quiz } from "../../components/Quiz/Quiz";
import { StylePracticeViewer } from "./PracticeViewer.style";
import { useLocation } from "react-router-dom";
import { HeaderForPages } from "../Header/HeaderForPages/HeaderForPages";

interface PracticeViewerProps {
  docxPath: string;
}

export const PracticeViewer = ({ docxPath }: PracticeViewerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();
  const SCROLL_KEY = `scroll-position-${pathname}`;
  const [isDocxLoaded, setIsDocxLoaded] = useState(false);

  // 👉 Сохраняем scroll при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      localStorage.setItem(SCROLL_KEY, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      localStorage.setItem(SCROLL_KEY, window.scrollY.toString());
    };
  }, [pathname]);

  // 👉 Загружаем docx и после — восстанавливаем scroll
  useEffect(() => {
    const loadDocxFile = async () => {
      try {
        const response = await fetch(docxPath);
        const arrayBuffer = await response.arrayBuffer();

        if (containerRef.current) {
          containerRef.current.innerHTML = "";

          await renderAsync(arrayBuffer, containerRef.current, undefined, {
            inWrapper: true,
            ignoreWidth: false,
            ignoreHeight: false,
            ignoreFonts: false,
            breakPages: true,
            ignoreLastRenderedPageBreak: true,
            experimental: false,
            className: "docx",
          });

          setIsDocxLoaded(true); // ✅ Помечаем, что docx загружен
        }
      } catch (error) {
        console.error("Ошибка при загрузке .docx:", error);
      }
    };

    loadDocxFile();
  }, [docxPath]);

  // 👉 После загрузки docx восстанавливаем scroll
  useEffect(() => {
    if (isDocxLoaded) {
      const savedScroll = localStorage.getItem(SCROLL_KEY);
      if (savedScroll) {
        window.scrollTo({
          top: parseInt(savedScroll, 10),
          behavior: "auto",
        });
      }
    }
  }, [isDocxLoaded]);

  return (
    <StylePracticeViewer>
      <HeaderForPages />

      <div className="text__container" ref={containerRef} />
      {/* <Quiz /> */}
    </StylePracticeViewer>
  );
};
