import _ from 'underscore';

/*
    2E = DOS DE ESPADAS
    2T = DOS DE TREBOL
    2C = DOS DE CORAZONES
    2D = DOS DE DIAMANTES
*/

/**
 * 
 * @param {Array<string>} tiposCartas  ['E','T','C','D',], // ESPADAS - TREBOL - CORAZONES - DIAMANTES
 * @param {Array<string>} especialesCartas ['A','J','Q','K'];
 * @returns {Array} retorna un nuevo deck
 */


// 1RA OPCION DE EXPORTAR
export const crearCartas = ( tiposCartas, especialesCartas) => {
    
    if( !tiposCartas || tiposCartas.length == 0 ) 
        throw new Error('Los tipos de carta son obligatorios');
    
    if( !especialesCartas || especialesCartas.length == 0 ) 
        throw new Error('Las cartas especiales son obligatorias');

    let cartas = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            cartas.push( i + tipo); // 2E, 2T, 2C, 2D..
        }
    }
    
    for (let especial of especialesCartas) {
        for (let tipo of tiposCartas) {
            cartas.push( especial + tipo );
        }
    }

    // console.log( typeof _.shuffle(cartas)); // OBJECT
    cartas = _.shuffle(cartas); // CARTAS BARAJEADAS - _ USO DEL UNDERSCORE
    return cartas;
};


// 2DA OPCION DE EXPORTAR
// export default crearCartas;