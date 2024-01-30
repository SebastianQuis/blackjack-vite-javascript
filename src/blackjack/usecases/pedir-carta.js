
/**
 * 
 * @param {Array<String>} cartas   arreglo de cartas
 * @returns {String} retorna la carta de cartas
 */

export const pedirCarta = ( cartas ) => {
    if( !cartas || cartas.length == 0 ) throw new Error('Las cartas son obligatorias');
    
    return (cartas.length === 0) ? 'No hay carta en la baraja' : cartas.pop(); // retornando carta escogida
}
