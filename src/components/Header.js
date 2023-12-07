import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

	const HandleGptSearchClick = () => {
		dispatch(toggleGptSearchView());
	};
	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				// eslint-disable-next-line
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<div className="relative md:flex bg-gradient-to-b w-screen flex-col md:flex-row justify-between from-black px-8 py-2 z-50 flex flex-col md:flex-row justify-center">
			<img className="w-44 mx-auto md:mx-0 " src={LOGO} alt="logo" />

			{user && (
				<div className="flex p-2">
					{showGptSearch && (
						<select
							className=" py-2 bg-gray-900 text-white"
							onChange={handleLanguageChange}>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option key={lang.identifier} value={lang.identifier}>
									{lang.name}
								</option>
							))}
						</select>
					)}
					<button
						className="bg-purple-400 py-1 px-2 mx-4 my-2  rounded-lg"
						onClick={HandleGptSearchClick}>
						{showGptSearch ? "Homepage" : "GPTSearch"}
					</button>
					<img className="w-12 h-12 rounded-lg" alt="logos" src={AVATAR} />
					<button
						onClick={handleSignOut}
						className="font-bold text-white p-3 text-center ">
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
