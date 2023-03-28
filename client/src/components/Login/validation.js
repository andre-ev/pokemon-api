const validate = (inputs) => {
  let errors = {};

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if(!inputs.username) {
    errors.username = "Se requiere un nombre";
  }

  if(!regexEmail.test(inputs.username)) {
    errors.username = "El nombre de usuario debe ser un correo.";
  }

  if(inputs.username.length > 35) {
    errors.username = "No puede tener mas de 35 caracteres";
  }

  if(!inputs.password.match(/\d/)) {
    errors.password = "La contraseña debe llevar 1 número.";
  }

  if(inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres.";
  }

  return errors;

}

export default validate;
