import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSLice";
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  //below is initializing
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const Provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, Provider);

      // console.log(result); use this when cheking  if it's woring

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();
      dispatch(signInSuccess(data));
      //after everything is succefully you can just navigate to home page or dashboard
      navigate('/');
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white 
    p-3 rounded-lg uppercase hover:opacity-95"
    >
      CONTINUE WITH GOOGLE
    </button>
  );
}
// it's submit by default so change it to type='button'
