import React, { useEffect, useState } from "react";
import "./winner.scss";
import { connect } from "react-redux";
import { setSelectedLucky, setDrawTitle } from "../../redux/actions/draw";
import { Link } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const Winner = (props) => {
  const { selectedLucky, setDrawTitle, setSelectedLucky, drawTitle } = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  const againDraw = () => {
    setSelectedLucky("");
    setDrawTitle("");
  };

  return (
    <>
      {loading === false ? (
        <div className="maintain p-16 flex flex-col gap-4">
          <span className="text-4xl">{drawTitle} çekilişi</span>
          <span className="text-lg">Kazanan Katılımcı:</span>
          <span className="rainbow-text">{selectedLucky}</span>
          <Link to="/home">
            <button onClick={againDraw} className="again-button">
              Tekrar Çekiliş Yap
            </button>
          </Link>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Winner);
