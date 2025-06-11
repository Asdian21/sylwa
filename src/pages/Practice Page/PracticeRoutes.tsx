import {
  // Energetic practice
  EnergeticPractices,
  EnergeticPractice_1,
  EnergeticPractice_2,
  EnergeticPractice_3,
  EnergeticPractice_4,
  EnergeticPractice_5,
  EnergeticPractice_6,
  EnergeticPractice_7,
  EnergeticPractice_8,
  EnergeticPractice_9,
  EnergeticPractice_10,
  EnergeticPractice_11,
  EnergeticPractice_12,
  EnergeticPractice_13,
  EnergeticPractice_14,
  EnergeticPractice_15,

  // Green / Smart practice
  GreenSmartPractices,
  GreenSmartPractice_1,
  GreenSmartPractice_2,
  GreenSmartPractice_3,
  GreenSmartPractice_4,
  GreenSmartPractice_5,
  GreenSmartPractice_6,
  GreenSmartPractice_7,
  GreenSmartPractice_8,
  GreenSmartPractice_9,
  GreenSmartPractice_10,
  GreenSmartPractice_11,
  GreenSmartPractice_12,
  GreenSmartPractice_13,
  GreenSmartPractice_14,
  GreenSmartPractice_15,

  // BJD practice
  BJDPractices,
  BJDPractice_1,
  BJDPractice_2,
  BJDPractice_3,
  BJDPractice_4,
  BJDPractice_5,
  BJDPractice_6,
  BJDPractice_7,
  BJDPractice_8,
  BJDPractice_9,
  BJDPractice_10,
  BJDPractice_11,
  BJDPractice_12,
  BJDPractice_13,
  BJDPractice_14,
  BJDPractice_15,
} from "./";

const energeticPracticeComponents: { [key: string]: React.FC } = {
  "1": EnergeticPractice_1,
  "2": EnergeticPractice_2,
  "3": EnergeticPractice_3,
  "4": EnergeticPractice_4,
  "5": EnergeticPractice_5,
  "6": EnergeticPractice_6,
  "7": EnergeticPractice_7,
  "8": EnergeticPractice_8,
  "9": EnergeticPractice_9,
  "10": EnergeticPractice_10,
  "11": EnergeticPractice_11,
  "12": EnergeticPractice_12,
  "13": EnergeticPractice_13,
  "14": EnergeticPractice_14,
  "15": EnergeticPractice_15,
};

export const energeticPracticeRoutes = [
  {
    path: "energetic-practices",
    element: <EnergeticPractices />,
  },
  ...Object.entries(energeticPracticeComponents).map(([number, Component]) => ({
    path: `energetic-practice_${number}`,
    element: <Component />,
  })),
];

const greenSmartPracticeComponents: { [key: string]: React.FC } = {
  "1": GreenSmartPractice_1,
  "2": GreenSmartPractice_2,
  "3": GreenSmartPractice_3,
  "4": GreenSmartPractice_4,
  "5": GreenSmartPractice_5,
  "6": GreenSmartPractice_6,
  "7": GreenSmartPractice_7,
  "8": GreenSmartPractice_8,
  "9": GreenSmartPractice_9,
  "10": GreenSmartPractice_10,
  "11": GreenSmartPractice_11,
  "12": GreenSmartPractice_12,
  "13": GreenSmartPractice_13,
  "14": GreenSmartPractice_14,
  "15": GreenSmartPractice_15,
};

export const greenSmartPracticeRoutes = [
  {
    path: "green-smart-practices",
    element: <GreenSmartPractices />,
  },
  ...Object.entries(greenSmartPracticeComponents).map(
    ([number, Component]) => ({
      path: `green-smart-practice_${number}`,
      element: <Component />,
    })
  ),
];

const bjdLectureComponents: { [key: string]: React.FC } = {
  "1": BJDPractice_1,
  "2": BJDPractice_2,
  "3": BJDPractice_3,
  "4": BJDPractice_4,
  "5": BJDPractice_5,
  "6": BJDPractice_6,
  "7": BJDPractice_7,
  "8": BJDPractice_8,
  "9": BJDPractice_9,
  "10": BJDPractice_10,
  "11": BJDPractice_11,
  "12": BJDPractice_12,
  "13": BJDPractice_13,
  "14": BJDPractice_14,
  "15": BJDPractice_15,
};

export const bjdPracticeRoutes = [
  {
    path: "BJD",
    element: <BJDPractices />,
  },
  ...Object.entries(bjdLectureComponents).map(([number, Component]) => ({
    path: `bjd-practice_${number}`,
    element: <Component />,
  })),
];
