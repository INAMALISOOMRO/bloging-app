import { useState } from "react";
import { supabase } from '../config/supbase/configSupbase'
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name , setName] = useState("")

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
     name,
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login Successful");
      navigate("/Dashboard");
    }
  };






  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleLogin}>

<input type="text"
placeholder="Enter you name" value={name} onChange={(e) => setName(e.target.value)}
/> <br /> <br />




        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>

      <br />

      <Link to="/register">Create New Account</Link>
    </div>
  );
}

export default Login;