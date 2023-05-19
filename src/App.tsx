import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Sorry, wrong page</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
