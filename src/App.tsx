import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/Main Page/MainPage";
import { LecturePage } from "./pages/Lecture Page/LecturePage";
import { Lectures } from "./pages/Lecture Page/Lectures/Lectures";
import { Lecture_1 } from "./pages/Lecture Page/Lectures/Lecture_1/Lecture_1";

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
