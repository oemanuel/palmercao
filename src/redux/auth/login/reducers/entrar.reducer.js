import {ENTRAR, SALIDA} from "../actionTypes";

const inicial = {

    usuario: null,
    cargando: false,
    error: null,

}

export default (estado = inicial, accion) => {
    switch (accion.type) {
        case ENTRAR.SOLICITUD:
            return {
                ...estado,
                cargando: true,
            }
        case ENTRAR.CORRECTO:
            return {
                ...estado,
                usuario: accion.data,
                cargando: false,
                error:null
            }
        case ENTRAR.FALLIDO:
            return {
                ...estado,
                error: accion.error,
                cargando:false
            }
        case ENTRAR.LIMPIAR_ERROR:
            return {
                ...estado,
                error:null
            }
        case SALIDA.SOLICITUD:
            return {
                ...estado,
                cargando: true,
            }
        case SALIDA.CORRECTO:
            return {
                ...estado,
                usuario: null,
                cargando: false,
                error:null
            }
        case SALIDA.FALLIDO:
            return {
                ...estado,
                error: accion.error,
                cargando:false
            }

        default:
            return { ...estado }

    }
}