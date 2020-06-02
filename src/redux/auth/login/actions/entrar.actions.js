
import { ENTRAR, SALIDA } from "../actionTypes";


export function entrar(payload) { 
    return {
        type: ENTRAR.SOLICITUD,
        payload
    }
} 

export function entrar_correcto(data) { 
    return {
        type: ENTRAR.CORRECTO,
        data
    }
}

export function entrar_fallido(error) { 
    return {
        type: ENTRAR.FALLIDO,
        error
    }
}
export function salir() { 
    return {
        type: SALIDA.SOLICITUD,
    }
} 

export function salir_correcto() { 
    return {
        type: SALIDA.CORRECTO,
    }
}

export function salir_fallido(error) { 
    return {
        type: SALIDA.FALLIDO,
        error
    }
}
export function limpiar_error(error) { 
    return {
        type: ENTRAR.LIMPIAR_ERROR,
    }
}