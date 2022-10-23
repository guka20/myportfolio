import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

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
  return <>{routes}</>;
};
