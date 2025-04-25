import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/Main Page/MainPage";
import { LecturePage } from "./pages/Lecture Page/LecturePage";
import { Lectures } from "./pages/Lecture Page/Lectures/Lectures";
import { Lecture_1 } from "./pages/Lecture Page/Lectures/Energetic_lectures/EnergeticLectures";
import { PracticePage } from "./pages/Practice Page/Practices/PracticePage";

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
