import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-screen  ">
      {trailerVideo && ( // Check if trailerVideo exists
        <iframe
          className="w-screen  aspect-video  "
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1&loop=1"
          }
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
