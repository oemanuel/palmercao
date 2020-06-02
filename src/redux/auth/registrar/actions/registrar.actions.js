
import { REGISTRO } from "../actionTypes";


export function registrar(payload) { 
    return {
        type: REGISTRO.SOLICITUD,
        payload
    }
} 

export function registrar_correcto() { 
    return {
        type: REGISTRO.CORRECTO,
    }
}

export function registrar_fallido(error) { 
    return {
        type: REGISTRO.FALLIDO,
        error
    }
}
export function limpiar_error(error) { 
    return {
        type: REGISTRO.LIMPIAR_ERROR,
    }
}
