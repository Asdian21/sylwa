import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/Main Page/MainPage";
import { LecturePage } from "./pages/Lecture Page/LecturePage";
import { PracticePage } from "./pages/Practice Page/PracticePage";
import { TestPage } from "./pages/Test Page/TestPage";
import { VideoPage } from "./pages/Video Page/VideoPage";

import {
  bjdLectureRoutes,
  energeticLectureRoutes,
  greenSmartLectureRoutes,
} from "./pages/Lecture Page/LectureRoutes";

import {
  bjdPracticeRoutes,
  energeticPracticeRoutes,
  greenSmartPracticeRoutes,
} from "./pages/Practice Page/PracticeRoutes";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage";
import { FirstPage } from "./pages/GalleryPage/FirstPage/FirstPage";
import { About } from "./pages/About/About";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "lecture-page",
    element: <LecturePage />,
  },
  ...energeticLectureRoutes,
  ...greenSmartLectureRoutes,
  ...bjdLectureRoutes,
  {
    path: "practice-page",
    element: <PracticePage />,
  },
  ...energeticPracticeRoutes,
  ...greenSmartPracticeRoutes,
  ...bjdPracticeRoutes,
  {
    path: "test-page",
    element: <TestPage />,
  },
  {
    path: "video-page",
    element: <VideoPage />,
  },
  {
    path: "gallery-page",
    element: <GalleryPage />,
  },
  {
    path: "first-page",
    element: <FirstPage />,
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
