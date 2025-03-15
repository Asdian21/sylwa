import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { WelcomePage } from "./pages/Welcome Page/WelcomePage";
import { MainPage } from "./pages/Main Page/MainPage";
import { Test } from "./pages/Test/Test";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "main-page",
    element: <MainPage />,
  },
  {
    path: "test-page",
    element: <Test />,
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
