import { BG_URL } from "../utils/constants";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";
const GPTSearch = () => {
	return (
		<div>
			<div className="fixed -z-10 -my-20">
				<img src={BG_URL} />
			</div>
			<GPTSearchBar />
			<GPTMovieSuggestion />
		</div>
	);
};

export default GPTSearch;
