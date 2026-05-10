import { use, useState } from "react";
import { supabase } from '../config/supbase/configSupbase'
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name , setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      name,
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Registration Successful");
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>SignUp</h1>

      

     

      <form onSubmit={handleRegister}>

<input type="text"
placeholder="Enter you name" value={name} onChange={(e) => setName(e.target.value)}
/>


<br /> <br />

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

        <button type="submit">Register</button>
      </form>

      <br />

      <Link to="/login">Already have a account sir G!</Link>
    </div>
  );
}

export default Register;