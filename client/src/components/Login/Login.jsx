import { useState } from "react";
import validation from "./validation";
import style from "./Login.module.css";

const Login = ({login}) => {

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  })

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })

    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" 
        value={userData.username} onChange={handleInputChange}/>
      {errors.username && <p className={style.danger}>{errors.username}</p>}

      <br />

      <label htmlFor="password">Password:</label>
      <input type="text" name="password" 
        value={userData.password} onChange={handleInputChange}/>
      {errors.password && <p className={style.danger}>{errors.password}</p>}

      <br />

      <button>Login</button>
    </form>
  )
}

export default Login;
