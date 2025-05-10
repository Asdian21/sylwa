import mammoth from "mammoth";

export const extractPracticeSection = async (
  docxPath: string,
  practiceNumber: number
): Promise<string> => {
  const response = await fetch(docxPath);
  const arrayBuffer = await response.arrayBuffer();
  const result = await mammoth.convertToHtml({ arrayBuffer });

  const content = result.value;

  const startRegex = new RegExp(
    `<p[^>]*>\\s*Практическая работа №\\s*${practiceNumber}\\s*\\.?\\s*</p>`,
    "i"
  );
  const endRegex = new RegExp(
    `<p[^>]*>\\s*Практическая работа №\\s*${
      practiceNumber + 1
    }\\s*\\.?\\s*</p>`,
    "i"
  );

  const startIndex = content.search(startRegex);
  const endIndex = content.search(endRegex);

  if (startIndex !== -1) {
    const section = content.slice(
      startIndex,
      endIndex !== -1 ? endIndex : undefined
    );
    return section;
  }

  return `<p>Практическая работа №${practiceNumber} не найдена.</p>`;
};
