import React from "react";

const AboutUs = () => {
  return (
    <div className="maintain p-16 flex flex-col">
      <span className="text-2xl">Hakkımda</span>
      <p className="text-white">
        Teknolojiyi kendine hobi edinmiş, her anlamda kendini geliştirmeye
        çalışan junior bir developer'ım.
        <br />
        Farklı projeler geliştirip deneyim kazanıyorum. Aşağıdaki linklerden
        projelerimi takip edebilirsiniz.
      </p>
      <div className="mt-4 flex gap-2">
        <a href="https://www.linkedin.com/in/onur-uçar-024b421b4/">
          <img
            className="w-8 hover:opacity-30 duration-300"
            src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG14.png"
            alt="linkedin"
          />
        </a>
        <a href="https://www.facebook.com/onur.ucar61">
          <img
            className="w-8 hover:opacity-30 duration-300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
            alt="face"
          />
        </a>
        <a href="https://github.com/OnurUcarD4">
          <img
            className="w-8 bg-black rounded-md hover:opacity-30 duration-300"
            src="https://www.shareicon.net/data/2015/09/15/101512_logo_512x512.png"
            alt="github"
          />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
