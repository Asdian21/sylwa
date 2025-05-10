import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/Main Page/MainPage";
import { LecturePage } from "./pages/Lecture Page/LecturePage";
import { Lectures } from "./pages/Lecture Page/Lectures/EnergeticLectures";
import { Lecture_1 } from "./pages/Lecture Page/Lectures/Energetic_lecture_1/EnergeticLecture_1";
import { PracticePage } from "./pages/Practice Page/PracticePage";
import { EnergeticPractices } from "./pages/Practice Page/Practices/EnergeticPractices";
import { EnergeticPractice_1 } from "./pages/Practice Page/Practices/Energetic_practice_1/EnergeticPractice_1";
import { Lecture_2 } from "./pages/Lecture Page/Lectures/Energetic_lecture_2/EnergeticLecture_2";
import { Lecture_3 } from "./pages/Lecture Page/Lectures/Energetic_lecture_3/EnergeticLecture_3";
import { Lecture_4 } from "./pages/Lecture Page/Lectures/Energetic_lecture_4/EnergeticLecture_4";
import { Lecture_5 } from "./pages/Lecture Page/Lectures/Energetic_lecture_5/EnergeticLecture_5";
import { Lecture_6 } from "./pages/Lecture Page/Lectures/Energetic_lecture_6/EnergeticLecture_6";
import { Lecture_7 } from "./pages/Lecture Page/Lectures/Energetic_lecture_7/EnergeticLecture_7";
import { Lecture_8 } from "./pages/Lecture Page/Lectures/Energetic_lecture_8/EnergeticLecture_8";
import { Lecture_9 } from "./pages/Lecture Page/Lectures/Energetic_lecture_9/EnergeticLecture_9";
import { Lecture_10 } from "./pages/Lecture Page/Lectures/Energetic_lecture_10/EnergeticLecture_10";
import { Lecture_11 } from "./pages/Lecture Page/Lectures/Energetic_lecture_11/EnergeticLecture_11";
import { Lecture_12 } from "./pages/Lecture Page/Lectures/Energetic_lecture_12/EnergeticLecture_12";
import { Lecture_13 } from "./pages/Lecture Page/Lectures/Energetic_lecture_13/EnergeticLecture_13";
import { Lecture_14 } from "./pages/Lecture Page/Lectures/Energetic_lecture_14/EnergeticLecture_14";
import { Lecture_15 } from "./pages/Lecture Page/Lectures/Energetic_lecture_15/EnergeticLecture_15";
import { GreenSmartLectures } from "./pages/Lecture Page/GreenSmartLectures/GreenSmartLectures";
import { GreenSmart_lecture_1 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_1/GreenSmart_lecture_1";
import { GreenSmart_lecture_2 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_2/GreenSmart_lecture_2";
import { GreenSmart_lecture_3 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_3/GreenSmart_lecture_3";
import { GreenSmart_lecture_4 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_4/GreenSmart_lecture_4";
import { GreenSmart_lecture_5 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_5/GreenSmart_lecture_5";
import { GreenSmart_lecture_6 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_6/GreenSmart_lecture_6";
import { GreenSmart_lecture_7 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_7/GreenSmart_lecture_7";
import { GreenSmart_lecture_8 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_8/GreenSmart_lecture_8";
import { GreenSmart_lecture_9 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_9/GreenSmart_lecture_9";
import { GreenSmart_lecture_10 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_10/GreenSmart_lecture_10";
import { GreenSmart_lecture_11 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_11/GreenSmart_lecture_11";
import { GreenSmart_lecture_12 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_12/GreenSmart_lecture_12";
import { GreenSmart_lecture_13 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_13/GreenSmart_lecture_13";
import { GreenSmart_lecture_14 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_14/GreenSmart_lecture_14";
import { GreenSmart_lecture_15 } from "./pages/Lecture Page/GreenSmartLectures/GreenSmart_lecture_15/GreenSmart_lecture_15";
import { EnergeticPractice_2 } from "./pages/Practice Page/Practices/Energetic_practice_2/Energetic_practice_2";
import { EnergeticPractice_3 } from "./pages/Practice Page/Practices/Energetic_practice_3/Energetic_practice_3";
import { EnergeticPractice_4 } from "./pages/Practice Page/Practices/Energetic_practice_4/Energetic_practice_4";
import { EnergeticPractice_5 } from "./pages/Practice Page/Practices/Energetic_practice_5/Energetic_practice_5";
import { EnergeticPractice_6 } from "./pages/Practice Page/Practices/Energetic_practice_6/Energetic_practice_6";
import { EnergeticPractice_7 } from "./pages/Practice Page/Practices/Energetic_practice_7/Energetic_practice_7";
import { EnergeticPractice_8 } from "./pages/Practice Page/Practices/Energetic_practice_8/Energetic_practice_8";
import { EnergeticPractice_9 } from "./pages/Practice Page/Practices/Energetic_practice_9/Energetic_practice_9";
import { EnergeticPractice_10 } from "./pages/Practice Page/Practices/Energetic_practice_10/Energetic_practice_10";
import { EnergeticPractice_11 } from "./pages/Practice Page/Practices/Energetic_practice_11/Energetic_practice_11";
import { EnergeticPractice_12 } from "./pages/Practice Page/Practices/Energetic_practice_12/Energetic_practice_12";
import { EnergeticPractice_13 } from "./pages/Practice Page/Practices/Energetic_practice_13/Energetic_practice_13";
import { EnergeticPractice_14 } from "./pages/Practice Page/Practices/Energetic_practice_14/Energetic_practice_14";
import { EnergeticPractice_15 } from "./pages/Practice Page/Practices/Energetic_practice_15/Energetic_practice_15";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "lecture-page",
    element: <LecturePage />,
  },
  //---------------------------------------------
  /* Energetic lectures begin */
  //
  //
  {
    path: "energetika-lectures",
    element: <Lectures />,
  },
  {
    path: "lecture_1",
    element: <Lecture_1 />,
  },
  {
    path: "lecture_2",
    element: <Lecture_2 />,
  },
  {
    path: "lecture_3",
    element: <Lecture_3 />,
  },
  {
    path: "lecture_4",
    element: <Lecture_4 />,
  },
  {
    path: "lecture_5",
    element: <Lecture_5 />,
  },
  {
    path: "lecture_6",
    element: <Lecture_6 />,
  },
  {
    path: "lecture_7",
    element: <Lecture_7 />,
  },
  {
    path: "lecture_8",
    element: <Lecture_8 />,
  },
  {
    path: "lecture_9",
    element: <Lecture_9 />,
  },
  {
    path: "lecture_10",
    element: <Lecture_10 />,
  },
  {
    path: "lecture_11",
    element: <Lecture_11 />,
  },
  {
    path: "lecture_12",
    element: <Lecture_12 />,
  },
  {
    path: "lecture_13",
    element: <Lecture_13 />,
  },
  {
    path: "lecture_14",
    element: <Lecture_14 />,
  },
  {
    path: "lecture_15",
    element: <Lecture_15 />,
  },
  //
  //
  /* Energetic lectures end */
  //---------------------------------------------

  //
  /* Green / Smart lectures start*/
  //
  {
    path: "green-smart-technologies-lectures",
    element: <GreenSmartLectures />,
  },
  {
    path: "green-smart-lecture_1",
    element: <GreenSmart_lecture_1 />,
  },
  {
    path: "green-smart-lecture_2",
    element: <GreenSmart_lecture_2 />,
  },
  {
    path: "green-smart-lecture_3",
    element: <GreenSmart_lecture_3 />,
  },
  {
    path: "green-smart-lecture_4",
    element: <GreenSmart_lecture_4 />,
  },
  {
    path: "green-smart-lecture_5",
    element: <GreenSmart_lecture_5 />,
  },
  {
    path: "green-smart-lecture_6",
    element: <GreenSmart_lecture_6 />,
  },
  {
    path: "green-smart-lecture_7",
    element: <GreenSmart_lecture_7 />,
  },
  {
    path: "green-smart-lecture_8",
    element: <GreenSmart_lecture_8 />,
  },
  {
    path: "green-smart-lecture_9",
    element: <GreenSmart_lecture_9 />,
  },
  {
    path: "green-smart-lecture_10",
    element: <GreenSmart_lecture_10 />,
  },
  {
    path: "green-smart-lecture_11",
    element: <GreenSmart_lecture_11 />,
  },
  {
    path: "green-smart-lecture_12",
    element: <GreenSmart_lecture_12 />,
  },
  {
    path: "green-smart-lecture_13",
    element: <GreenSmart_lecture_13 />,
  },
  {
    path: "green-smart-lecture_14",
    element: <GreenSmart_lecture_14 />,
  },
  {
    path: "green-smart-lecture_15",
    element: <GreenSmart_lecture_15 />,
  },
  //
  /* Green / Smart lectures end*/
  //

  {
    path: "practice-page",
    element: <PracticePage />,
  },
  {
    path: "energetic-practices",
    element: <EnergeticPractices />,
  },
  {
    path: "energetic-practice_1",
    element: <EnergeticPractice_1 />,
  },
  {
    path: "energetic-practice_2",
    element: <EnergeticPractice_2 />,
  },
  {
    path: "energetic-practice_3",
    element: <EnergeticPractice_3 />,
  },
  {
    path: "energetic-practice_4",
    element: <EnergeticPractice_4 />,
  },
  {
    path: "energetic-practice_5",
    element: <EnergeticPractice_5 />,
  },
  {
    path: "energetic-practice_6",
    element: <EnergeticPractice_6 />,
  },
  {
    path: "energetic-practice_7",
    element: <EnergeticPractice_7 />,
  },
  {
    path: "energetic-practice_8",
    element: <EnergeticPractice_8 />,
  },
  {
    path: "energetic-practice_9",
    element: <EnergeticPractice_9 />,
  },
  {
    path: "energetic-practice_10",
    element: <EnergeticPractice_10 />,
  },
  {
    path: "energetic-practice_11",
    element: <EnergeticPractice_11 />,
  },
  {
    path: "energetic-practice_12",
    element: <EnergeticPractice_12 />,
  },
  {
    path: "energetic-practice_13",
    element: <EnergeticPractice_13 />,
  },
  {
    path: "energetic-practice_14",
    element: <EnergeticPractice_14 />,
  },
  {
    path: "energetic-practice_15",
    element: <EnergeticPractice_15 />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
