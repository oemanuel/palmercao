import { RECUPERAR } from "../actionTypes"



export function recuperar(email) {
    
    return {
        type: RECUPERAR.SOLICITUD,
        email
    }
}

export function recuperar_correcto() {
    
    return {
        type: RECUPERAR.CORRECTO,
        
    }
}
export function recuperar_fallido(error) {
    
    return {
        type: RECUPERAR.FALLIDO,
        error
    }
}
export function limpiar_error_recuperar() {
    
    return {
        type: RECUPERAR.LIMPIAR_ERROR,
    }
}