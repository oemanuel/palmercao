import { REGISTRO } from "../actionTypes";

const inicial = {

    cargando: false,
    error: null,
    registrado: null,
}

export default (estado = inicial, accion) => {
    switch (accion.type) {
        case REGISTRO.SOLICITUD:
            return {
                ...estado,
                cargando: true,
            }
        case REGISTRO.CORRECTO:
            return {
                ...estado,
                cargando: false,
                error: null,
                registrado: true,
            }
        case REGISTRO.FALLIDO:
            return {
                ...estado,
                error: accion.error,
                cargando: false,
                registrado: false

            }
        case REGISTRO.LIMPIAR_ERROR:
            return {
                ...estado,
                error: null,
                registrado: null,
            }

        default:
            return { ...estado }

    }
}