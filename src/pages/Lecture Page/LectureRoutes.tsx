import {
  // Energetic lectures
  Lectures,
  Lecture_1,
  Lecture_2,
  Lecture_3,
  Lecture_4,
  Lecture_5,
  Lecture_6,
  Lecture_7,
  Lecture_8,
  Lecture_9,
  Lecture_10,
  Lecture_11,
  Lecture_12,
  Lecture_13,
  Lecture_14,
  Lecture_15,

  // Green / Smart lectures
  GreenSmartLectures,
  GreenSmart_lecture_1,
  GreenSmart_lecture_2,
  GreenSmart_lecture_3,
  GreenSmart_lecture_4,
  GreenSmart_lecture_5,
  GreenSmart_lecture_6,
  GreenSmart_lecture_7,
  GreenSmart_lecture_8,
  GreenSmart_lecture_9,
  GreenSmart_lecture_10,
  GreenSmart_lecture_11,
  GreenSmart_lecture_12,
  GreenSmart_lecture_13,
  GreenSmart_lecture_14,
  GreenSmart_lecture_15,

  // BJD lectures
  BJDLectures,
  BJD_lecture_1,
  BJD_lecture_2,
  BJD_lecture_3,
  BJD_lecture_4,
  BJD_lecture_5,
  BJD_lecture_6,
  BJD_lecture_7,
  BJD_lecture_8,
  BJD_lecture_9,
  BJD_lecture_10,
  BJD_lecture_11,
  BJD_lecture_12,
  BJD_lecture_13,
  BJD_lecture_14,
} from "./";

const energeticLectureComponents: { [key: string]: React.FC } = {
  "1": Lecture_1,
  "2": Lecture_2,
  "3": Lecture_3,
  "4": Lecture_4,
  "5": Lecture_5,
  "6": Lecture_6,
  "7": Lecture_7,
  "8": Lecture_8,
  "9": Lecture_9,
  "10": Lecture_10,
  "11": Lecture_11,
  "12": Lecture_12,
  "13": Lecture_13,
  "14": Lecture_14,
  "15": Lecture_15,
};

export const energeticLectureRoutes = [
  {
    path: "energetika-lectures",
    element: <Lectures />,
  },
  ...Object.entries(energeticLectureComponents).map(([number, Component]) => ({
    path: `lecture_${number}`,
    element: <Component />,
  })),
];

const greenSmartLectureComponents: { [key: string]: React.FC } = {
  "1": GreenSmart_lecture_1,
  "2": GreenSmart_lecture_2,
  "3": GreenSmart_lecture_3,
  "4": GreenSmart_lecture_4,
  "5": GreenSmart_lecture_5,
  "6": GreenSmart_lecture_6,
  "7": GreenSmart_lecture_7,
  "8": GreenSmart_lecture_8,
  "9": GreenSmart_lecture_9,
  "10": GreenSmart_lecture_10,
  "11": GreenSmart_lecture_11,
  "12": GreenSmart_lecture_12,
  "13": GreenSmart_lecture_13,
  "14": GreenSmart_lecture_14,
  "15": GreenSmart_lecture_15,
};

export const greenSmartLectureRoutes = [
  {
    path: "green-smart-technologies-lectures",
    element: <GreenSmartLectures />,
  },
  ...Object.entries(greenSmartLectureComponents).map(([number, Component]) => ({
    path: `green-smart-lecture_${number}`,
    element: <Component />,
  })),
];

const bjdLectureComponents: { [key: string]: React.FC } = {
  "1": BJD_lecture_1,
  "2": BJD_lecture_2,
  "3": BJD_lecture_3,
  "4": BJD_lecture_4,
  //   "5": BJD_lecture_5,
  "6": BJD_lecture_6,
  "7": BJD_lecture_7,
  "8": BJD_lecture_8,
  "9": BJD_lecture_9,
  "10": BJD_lecture_10,
  "11": BJD_lecture_11,
  "12": BJD_lecture_12,
  "13": BJD_lecture_13,
  "14": BJD_lecture_14,
};

export const bjdLectureRoutes = [
  {
    path: "bjd-lecture_5",
    element: (
      <BJD_lecture_5
        slidesPath_1="./public/BJD Lectures/Presentations/presentation_5_slides"
        slidesPath_2="./public/BJD Lectures/Presentations/presentation_6_slides"
        docxPath="./public/BJD Lectures/Lectures/lecture_5-6.docx"
      />
    ),
  },
  {
    path: "BJD-lectures",
    element: <BJDLectures />,
  },
  ...Object.entries(bjdLectureComponents).map(([number, Component]) => ({
    path: `bjd-lecture_${number}`,
    element: <Component />,
  })),
];
