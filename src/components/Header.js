import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { AVATAR, LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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
    <div className="relative md:flex bg-gradient-to-b w-screen flex-col md:flex-row justify-between from-black px-8 py-2 z-50">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12 rounded-lg" alt="logos" src={AVATAR} />
          <button
            onClick={handleSignOut}
            className="font-bold text-white p-3 text-center"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
