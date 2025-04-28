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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
