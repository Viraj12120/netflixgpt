import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {
	return (
		<div className="px-6">
			<h1 className="md:pt-0 pt-80 text-lg md:text-3xl py-4 text-white">
				{title}
			</h1>
			<div className="flex no-scrollbar overflow-x-auto ">
				<div className="flex">
					{movies?.map((movie) => (
						<MovieCard key={movie.id} posterPath={movie.poster_path} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Movielist;
