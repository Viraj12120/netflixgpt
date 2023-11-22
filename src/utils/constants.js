export const BG_URL =
	"https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const LOGO =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const AVATAR =
	"https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWI2MWU4ZmI2YzQ1NjMwMzZlOGM1YzM1ZmZjYmY4MCIsInN1YiI6IjY1NGI1MjdlMjg2NmZhMDEzOGE5MWVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-iT2HJ2W52q7hXHwblMTuj90pNL9zOWFuRdNRhprnss",
	},
};

export const IMG_PATH_URL = "https://image.tmdb.org/t/p/w780/";

export const SUPPORTED_LANGUAGES = [
	{ identifier: "en", name: "English" },
	{ identifier: "hindi", name: "Hindi" },
	{ identifier: "Spanish", name: "Spanish" },
	{ identifier: "Chinese", name: "Chinese" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
