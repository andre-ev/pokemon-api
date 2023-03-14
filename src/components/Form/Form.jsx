import { useState } from "react";
import "./Form.module.css";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassw = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

export function validate(inputs) {
  let errors = {};

  if(!inputs.name) {
    errors.name = "Se requiere un nombre";
  }

  if(!regexEmail.text(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }

  if(!regexPassw.text(inputs.password)) {
    errors.password = "La contraseña debe tener 1 numero como mínimo, 1 letra mayúscula y mínimo 8 caracteres.";
  }

  return errors;

}

export default function Form() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleFormChange = (event) => {
    /* const name = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [name]: value
    }) */
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })

    setErrors(validate({
      ...form,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Info enviada correctamente");
    setForm({
      email: "",
      password: ""
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Formulario</h1>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={form.name} 
          autoComplete="off" onChange={handleFormChange}
          placeholder="Your name..." className={errors.name && 'warning'}/>
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" value={form.email} 
          autoComplete="off" onChange={handleFormChange}
          placeholder="Enter your email..." className={errors.email && 'warning'}/>
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" value={form.password}
          autoComplete="off" onChange={handleFormChange}
          placeholder="Enter your password..." className={errors.password && 'warning'}/>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

