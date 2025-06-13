import { useEffect } from "react";
import { StylePracticeViewer } from "./PracticeViewer.style";
import { useLocation } from "react-router-dom";
import { HeaderForPages } from "../Header/HeaderForPages/HeaderForPages";

interface PracticeViewerProps {
  pdfPath: string;
}

export const PracticeViewer = ({ pdfPath }: PracticeViewerProps) => {
  const { pathname } = useLocation();
  const SCROLL_KEY = `scroll-position-${pathname}`;

  // 👉 Восстановление scroll
  useEffect(() => {
    const savedScroll = localStorage.getItem(SCROLL_KEY);
    if (savedScroll) {
      window.scrollTo({
        top: parseInt(savedScroll, 10),
        behavior: "auto",
      });
    }
  }, [pathname]);

  // 👉 Сохранение scroll
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

  return (
    <StylePracticeViewer>
      <HeaderForPages />
      <div className="pdf-container">
        <embed
          src={pdfPath}
          type="application/pdf"
          width="100%"
          height="1000px"
        />
      </div>
    </StylePracticeViewer>
  );
};
