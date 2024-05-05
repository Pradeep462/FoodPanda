import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import BodyContent from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contactus from "./component/Contactus";
import Error from "./component/Error";
import RestrorentDetails from "./component/RestrorentDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./component/Card";
// import Instamart from "./src/component/Instamrat";

const Instamart = lazy(() => import("./component/Instamrat"));

const FoodPandaApp = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodPandaApp />,

    children: [
      {
        path: "/",
        element: <BodyContent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restrorent/:resId",
        element: <RestrorentDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("food-panda"));

root.render(<RouterProvider router={appRouter} />);
