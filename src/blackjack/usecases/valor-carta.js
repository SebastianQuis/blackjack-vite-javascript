
/**
 * 
 * @param {Array} carta 
 * @returns {Number} valor de la carta
 */

export const valorCarta = ( carta ) => {
    
    if( !carta ) throw new Error('La carta está vacía');

    // const valor = carta.substring(0, carta.length - 1); // 2 = 2 | 10 = 10
    const valor = carta.slice(0,-1);
    return ( isNaN( valor ) ) // no es un number?
        ? ( valor === 'A') ? 11 : 10 // A es 11, los demas son 10 - J Q K
        : valor * 1; // valor*1 para que sea un number 
}