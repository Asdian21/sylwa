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
  return (
    <>
      <SideInfoBox onClick={handleToggleModal}>
        <div className="text">{h2}</div>
      </SideInfoBox>

      {isOpen && (
        <ModalOverlay onClick={handleToggleModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>{h2}</h2>
            <p>{paragraph}</p>
            <p>{paragraph2}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
