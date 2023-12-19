import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });

  const userlogined = useSelector((state) => state.userlogined);
  const setValueForUser = (key, value) => {
    const newValue = { ...user, [key]: value };
    setUser(newValue);
  };
  const login = () => {
    dispacth({type: "LOGIN", payload: "user"});
  };
  useEffect(() => {
    if (userlogined.username) {
        navigate("/user");
    }
  }, [userlogined, navigate]);
  return (
    <form>
      <label>User name</label>
      <input
        id="username"
        onChange={(e) => setValueForUser("username", e.target.value)}
        type="text"
      />
      <label>Password</label>
      <input
        id="password"
        onChange={(e) => setValueForUser("password", e.target.value)}
        type="password"
      />
      <button
        type="button"
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
