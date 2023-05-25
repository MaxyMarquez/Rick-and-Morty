const validation = (userData) => {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexPassword = /.*\d+.*/g;

    const errors = {};

    if (!regexEmail.test(userData.email)) {
        errors.email = 'El Email ingresado no es válido'
    }
    if (!userData.email) {
        errors.email = 'Debe rellenar este campo'
    }
    if (userData.email.length > 35) {
        errors.email = 'No puede superar los 35 caracteress'
    }

    if (!regexPassword.test(userData.password)) {
        errors.password = 'La contraseña debe contener al menos un Número'
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
    }

    return errors
}

export default validation;