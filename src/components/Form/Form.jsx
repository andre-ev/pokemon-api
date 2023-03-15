import { useState } from "react";
import style from "./Form.module.css";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassw = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

export const validate = (inputs) => {
  let errors = {};

  if(!inputs.name) {
    errors.name = "Se requiere un nombre";
  }

  if(!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }

  if(!regexPassw.test(inputs.password)) {
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
    // Para evitar recargar la pagina, agregar el preventDefault
    // esto únicamente debe ser asignado en el handleSubmit
    event.preventDefault();
    
    // Convierte el objeto errors en un array para medir su longitud
    if(!Object.values(errors).length) {
      alert("Datos completos");

      setForm({
        name: "",
        email: "",
        password: ""
      })

      setErrors({
        name: "",
        email: "",
        password: ""
      })
    } else {
      alert("Debe llenar todos los campos");
    }

  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Formulario</h1>
        
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={form.name} 
          onChange={handleFormChange}
          placeholder="Your name..." className={errors.name && style.warning}/>
        {errors.name && <p className={style.danger}>{errors.name}</p>}
        <br />
        
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" value={form.email} 
          onChange={handleFormChange}
          placeholder="Enter your email..." className={errors.email && style.warning}/>
        {errors.email && <p className={style.danger}>{errors.email}</p>}
        <br />

        <label htmlFor="password">Password: </label>
        <input type="text" name="password" value={form.password}
          onChange={handleFormChange}
          placeholder="Enter your password..." className={errors.password && style.warning}/>
        {errors.password && <p className={style.danger}>{errors.password}</p>}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

