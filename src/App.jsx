import Lottie from "lottie-react";
import travel from "../public/Annimation/Animation - 1719979231871.json";
import "./App.css";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useState } from "react";

function App() {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  // ====== state part====
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // ========== Function part ======
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // ========= Submit part ======
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
    } else {
      console.log("kera beta");
    }
    console.log(emailError);
  };
  return (
    <>
      <div className="body w-full h-[100vh] flex  flex-col items-center justify-center ">
        <div className="w-[700px] h-[400px] bg flex justify-center items-center rounded-3xl">
          <div className=" w-[400px] h-[400px]">
            <Lottie animationData={travel} loop={true} />
          </div>
          <form
            onSubmit={handleSubmit}
            className=" items-center flex flex-col justify-center relative"
          >
            <input
              type="text"
              onChange={handleEmail}
              placeholder="username"
              className="p-3 rounded-full flex justify-center items-center"
            />
            <p className="text-sm font-bold text-red-600">{emailError}</p>
            <div>
              {showPass ? (
                <IoIosEyeOff
                  onClick={handleShowPass}
                  className="absolute top-[69px] right-[12px]"
                />
              ) : (
                <IoIosEye
                  onClick={handleShowPass}
                  className="absolute top-[69px] right-[12px]"
                />
              )}
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="p-3 rounded-full flex justify-center items-center mt-1 mb-1 "
              />
            </div>

            <button
              type="button"
              className="  p-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
