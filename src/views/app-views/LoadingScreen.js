import React from "react";

const LoadingScreen = () => {
  return (
    <div className="maintain flex flex-col justify-center p-16 items-center">
      <span className="text-4xl">SEÇİLİYOR...</span>
      <img
        className="w-24 mt-4 items-center"
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        alt="loading"
      />
    </div>
  );
};

export default LoadingScreen;
