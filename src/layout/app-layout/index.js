import React from "react";
import AppViews from "../../views/app-views";
import Header from "../../views/app-views/Home-Components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <AppViews />
    </>
  );
};

export default AppLayout;
