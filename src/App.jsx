import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Detailspage from "./pages/DetailsPage/DetailsPage";
import Layout from "./shared/Layout";
import Error from "./shared/Error";
function App() {
  const childrenRoutes = [
    {
      index: true,
      element: <Homepage />,
    },
    {
      path: "search",
      element: <SearchPage />,
    },
    {
      path: "package/:name",
      element: <Detailspage />,
    },
  ];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: childrenRoutes,
      errorElement: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
