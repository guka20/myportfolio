import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Loading } from "../components/Loading";

const Home = lazy(() =>
  import("../pages/Home").then(({ Home }) => ({ default: Home }))
);
const Projects = lazy(() =>
  import("../pages/Projects").then(({ Projects }) => ({ default: Projects }))
);
const Contact = lazy(() =>
  import("../pages/Contact").then(({ Contact }) => ({ default: Contact }))
);
export const Routers = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Projects", element: <Projects /> },
    { path: "/Contact", element: <Contact /> },
  ]);
  return <Suspense fallback={<Loading />}>{routes}</Suspense>;
};
