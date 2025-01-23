import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const LoginRegister = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true);
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = isLogin ? "/api/auth/login" : "/api/auth/register";
//       const response = await axios.post(url, { email, password });
//       setMessage(response.data.message);
//       if (isLogin) {
//         navigate("/home");
//       }
//     } catch (error) {
//       setMessage(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <h2>{isLogin ? "Login" : "Register"}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">{isLogin ? "Login" : "Register"}</button>
//       </form>
//       <button
//         onClick={() => {
//           setIsLogin(!isLogin);
//         }}
//       >
//         {isLogin ? "Go To Register" : "Go To Login"}
//       </button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default LoginRegister;

const LoginRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? "/api/auth/login" : "/api/auth/register";
      const response = await axios.post(url, { email, password });
      setMessage(response.data.message);
      if (isLogin) {
        navigate("/home");
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-submit-btn" type="submit">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <button
        className="switch-btn"
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Go To Register" : "Go To Login"}
      </button>
      {message && <p className="auth-message">{message}</p>}
    </div>
  );
};

export default LoginRegister;
