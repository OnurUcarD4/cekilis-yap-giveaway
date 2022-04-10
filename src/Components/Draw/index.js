import React from "react";

const CekilisHandle = () => {
  const str = document.getElementById("cekilis").value;
  const arr = str.split(",").filter((element) => element !== "");
  const random = Math.floor(Math.random() * arr.length);
  console.log(arr[random]);
};

const Draw = () => {
  return (
    <div>
      <input id="cekilis" type="text" />
      <button onClick={() => CekilisHandle()}>Çek arasından</button>
    </div>
  );
};

export default Draw;
