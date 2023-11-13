import React from "react";
import { IMG_PATH_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 pb-6 pl-2 hover:ease-in-out">
      <img alt="Movie Card" src={IMG_PATH_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
