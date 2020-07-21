import { RECUPERAR } from "../actionTypes";

const inicial = {

    cargando: false,
    error: null,
    enviado: null,
}

export default (estado = inicial, accion) => {
    switch (accion.type) {
        case RECUPERAR.SOLICITUD:
            
            return {
                ...estado,
                cargando: true,
            }
        case RECUPERAR.CORRECTO:
            

            return {
                ...estado,
                cargando: false,
                error: null,
                enviado: true,
            }
        case RECUPERAR.FALLIDO:

            
            return {
                ...estado,
                error: accion.error,
                cargando: false,
                enviado: false

            }
        case RECUPERAR.LIMPIAR_ERROR:

            
            
            return {
                ...estado,
                error: null,
                enviado: null,
            }

        default:
            return { ...estado }

    }
}