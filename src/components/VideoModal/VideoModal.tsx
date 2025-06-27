import { useEffect, useRef, useState } from "react";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  ResizeHandle,
} from "./VideoModal.style";
// import { useSwipeable } from "react-swipeable";

export function VideoModal({
  videoUrl,
  onClose,
  onNext,
  onPrev,
}: {
  videoUrl: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(800);
  const [isResizing, setIsResizing] = useState(false);

  const embedUrl = videoUrl
    .replace("watch?v=", "embed/")
    .replace("youtu.be/", "www.youtube.com/embed/");

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing || !modalRef.current) return;
    const newWidth = e.clientX - modalRef.current.getBoundingClientRect().left;
    setWidth(Math.max(320, newWidth));
  };

  const handleMouseUp = () => setIsResizing(false);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  //   const swipeHandlers = useSwipeable({
  //     onSwipedLeft: onNext,
  //     onSwipedRight: onPrev,
  //   });

  return (
    <ModalOverlay>
      <ModalContent ref={modalRef} style={{ width }}>
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <ResizeHandle onMouseDown={handleMouseDown} />
        <CloseButton onClick={onClose}>✕</CloseButton>
      </ModalContent>
      <button className="arrow left" onClick={onPrev}>
        ◀
      </button>
      <button className="arrow right" onClick={onNext}>
        ▶
      </button>
    </ModalOverlay>
  );
}
