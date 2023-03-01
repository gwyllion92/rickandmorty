const validation = (userData) => {
    let errors = {}

    //Username
    if(!/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(userData.username)){
        errors.username = "El email es inválido"
    }
    if(!userData.username){
        errors.username = "Este campo no puede estar vacío"
    }   
    if(userData.username.length > 35){
        errors.username = "El email no puede tener más de 35 caracteres"
    }

    //Password
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener al menos un número"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation