import { SET_SELECTED_LUCKY } from "../../constants/draw";
import { SET_DRAW_TITLE } from "../../constants/draw";

export const setSelectedLucky = (selectedLucky) => ({
  type: SET_SELECTED_LUCKY,
  selectedLucky,
});
export const setDrawTitle = (drawTitle) => ({
  type: SET_DRAW_TITLE,
  drawTitle,
});
