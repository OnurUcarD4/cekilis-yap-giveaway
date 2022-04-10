import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import { setSelectedLucky, setDrawTitle } from "../../redux/actions/draw";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";

const Homesayfa = (props) => {
  const notify = () => toast.error("Boş alan bırakmayınız.");
  let navigate = useNavigate();
  const { setSelectedLucky, drawTitle, setDrawTitle } = props;
  const CekilisHandle = () => {
    const str = document.getElementById("lucky-list").value;
    const arr = str.split("\n").filter((element) => element !== "");
    const random = Math.floor(Math.random() * arr.length);
    setSelectedLucky(arr[random]);
    const title = document.getElementById("giveaway-name").value;
    setDrawTitle(title);
    if (title === "" || arr.length === 0) {
      notify();
      return;
    }
    navigate("/winner");
  };
  return (
    <div>
      <Toaster />
      <div className="maintain flex flex-col p-4 md:p-16">
        <span className="text-4xl tracking-wide">Katılımcı Listesi</span>
        <span className="font-thin text-2xl mt-4 mb-6">
          Her satıra 1 katılımcı gelecek şekilde ekleyin.
        </span>
        <div className="maintain-wrapper">
          <textarea id="lucky-list" cols="63" rows="5" />
          <div className="flex flex-col mt-3 gap-2">
            <span className="text-black text-lg">Çekiliş İsmi:</span>
            <input id="giveaway-name" type="text" />
          </div>
          <button onClick={() => CekilisHandle()} className="giveaway-button">
            Kazananları Belirle
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ draw }) => {
  const { selectedLucky, drawTitle } = draw;
  return { selectedLucky, drawTitle };
};

const mapDispatchToProps = {
  setSelectedLucky,
  setDrawTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homesayfa);
