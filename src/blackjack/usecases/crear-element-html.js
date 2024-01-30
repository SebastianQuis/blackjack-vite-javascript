
/**
 * 
 * @param {String} carta del elemento HTML 
 * @returns {HTMLImageElement} la imagen del html
 */

export const crearElementHTML = ( carta ) => {
    if ( !carta ) throw new Error('La carta es obligatoria');

    const imgCarta = document.createElement('img');
    imgCarta.src   = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add( 'carta' );
    return imgCarta;
}