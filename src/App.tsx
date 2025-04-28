import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/Main Page/MainPage";
import { LecturePage } from "./pages/Lecture Page/LecturePage";
import { Lectures } from "./pages/Lecture Page/Lectures/EnergeticLectures";
import { Lecture_1 } from "./pages/Lecture Page/Lectures/Energetic_lecture_1/EnergeticLecture_1";
import { PracticePage } from "./pages/Practice Page/PracticePage";
import { EnergeticPractices } from "./pages/Practice Page/Practices/EnergeticPractices";
import { EnergeticPractice_1 } from "./pages/Practice Page/Practices/Energetic_practice_1/EnergeticPractice_1";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "lecture-page",
    element: <LecturePage />,
  },
  {
    path: "energetika-lectures",
    element: <Lectures />,
  },
  {
    path: "lecture_1",
    element: <Lecture_1 />,
  },
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
