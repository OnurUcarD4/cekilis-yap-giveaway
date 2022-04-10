import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const Winner = React.lazy(() => import("./Winner"));
const About = React.lazy(() => import("./AboutUs"));

const AppViews = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
