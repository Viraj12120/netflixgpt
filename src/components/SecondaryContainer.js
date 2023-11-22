import React from "react";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);
	return (
		movies.nowPlayingMovies && (
			<div className="bg-black">
				<div className="   -mt-52 pl-13 relative z-20">
					<Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
					<Movielist title={"Popular "} movies={movies.PopularMovies} />
					<Movielist title={"IMDB Rated"} movies={movies.topRatedMovies} />

					<Movielist title={"Upcoming"} movies={movies.upcomingMovies} />
				</div>
			</div>
		)
	);
};

export default SecondaryContainer;
