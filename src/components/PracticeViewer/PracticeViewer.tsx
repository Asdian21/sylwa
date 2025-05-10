import { useEffect, useState } from "react";
import mammoth from "mammoth";
import { Quiz } from "../../components/Quiz/Quiz";
import { StylePracticeViewer } from "./PracticeViewer.style";

interface PracticeViewerProps {
  docxPath: string;
}

export const PracticeViewer = ({ docxPath }: PracticeViewerProps) => {
  const [practiceText, setPracticeText] = useState<string>("");

  useEffect(() => {
    const loadDocxFile = async () => {
      try {
        const response = await fetch(docxPath);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        setPracticeText(result.value);
      } catch (error) {
        console.error("Ошибка при загрузке .docx:", error);
      }
    };

    loadDocxFile();
  }, [docxPath]);

  return (
    <StylePracticeViewer>
      <div
        className="text__container"
        dangerouslySetInnerHTML={{ __html: practiceText }}
      />
      <Quiz />
    </StylePracticeViewer>
  );
};
