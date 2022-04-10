import { SET_SELECTED_LUCKY } from "../../constants/draw";
import { SET_DRAW_TITLE } from "../../constants/draw";

const initState = {
  selectedLucky: "",
  drawTitle: "",
};

const drawLucky = (state = initState, action) => {
  switch (action.type) {
    case SET_SELECTED_LUCKY:
      return {
        ...state,
        selectedLucky: action.selectedLucky,
      };
    case SET_DRAW_TITLE:
      return {
        ...state,
        drawTitle: action.drawTitle,
      };

    default:
      return state;
  }
};

export default drawLucky;
