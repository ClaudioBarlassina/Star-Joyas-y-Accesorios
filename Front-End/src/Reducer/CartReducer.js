export const CartInicialState = [];

export const CartReducer = (state, action) => {
 
    switch (action.type) {
        case "Hola": {
            return {
               Respuesta: "en que puedo ayudarte?"
            };
        }
        case "Adios": {
            return {
                Respuesta: "Adios usuario, vuelve pronto"
            }
        }    
    }




    return state;
}