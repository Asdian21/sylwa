import {
  SideInfoBox,
  ModalOverlay,
  ModalContent,
} from "./SideInfoBoxComponent.style";
import { useState } from "react";

interface Props {
  h2: string;
  paragraph: string;
  paragraph2: string;
}

export const SideInfoBoxComponent = ({ h2, paragraph, paragraph2 }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <SideInfoBox onClick={handleToggleModal}>
        <div className="text">{h2}</div>
      </SideInfoBox>

      {isOpen && (
        <ModalOverlay onClick={handleClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleClose}
              aria-label="Закрыть"
              className="closeButton"
            >
              ✕
            </button>
            <h2>{h2}</h2>
            <p>{paragraph}</p>
            <p>{paragraph2}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
