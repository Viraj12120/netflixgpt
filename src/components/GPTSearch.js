import { BG_URL } from "../utils/constants";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";
const GPTSearch = () => {
	return (
		<>
			<div className=" fixed  -z-10 md:-my-20 -my-36 ">
				<img className="h-screen w-screen object-cover" src={BG_URL} />
			</div>

			<div className="">
				<GPTSearchBar />
				<GPTMovieSuggestion />
			</div>
		</>
	);
};

export default GPTSearch;
