import { RECUPERAR } from "../actionTypes";

const inicial = {

    cargando: false,
    error: null,
    enviado: null,
}

export default (estado = inicial, accion) => {
    switch (accion.type) {
        case RECUPERAR.SOLICITUD:
            console.log("recuperar solicitud");
            
            return {
                ...estado,
                cargando: true,
            }
        case RECUPERAR.CORRECTO:
            console.log("recuperar correcto");
            

            return {
                ...estado,
                cargando: false,
                error: null,
                enviado: true,
            }
        case RECUPERAR.FALLIDO:

            console.log("recuperar fallido");
            
            return {
                ...estado,
                error: accion.error,
                cargando: false,
                enviado: false

            }
        case RECUPERAR.LIMPIAR_ERROR:

            console.log("recuperar limpiar error");
            
            
            return {
                ...estado,
                error: null,
                enviado: null,
            }

        default:
            return { ...estado }

    }
}