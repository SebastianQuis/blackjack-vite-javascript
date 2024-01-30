
import { pedirCarta, valorCarta, crearElementHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML 
 * @param {HTMLElement} divCartasComputadora 
 * @param {Array<String>} deck 
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, cartas = [] ) => { // puntosMinimos = puntosJugador
    
    if(!puntosMinimos) throw new Error('Los puntos mínimos son necesarios');
    if(!puntosHTML) throw new Error('Los puntosHTML es necesario');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(cartas);            
        
        // puntosComputadora = acumularPuntos( puntosJugadores.length - 1, carta);
        // crearCartaImg( carta, puntosJugadores.length - 1);
        
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        // const imgCarta = document.createElement('img');
        // imgCarta.src   = `assets/cartas/${ carta }.png`;
        // imgCarta.classList.add( 'carta' );
        const imgCarta = crearElementHTML(carta);
        divCartasComputadora.append(imgCarta);
        // console.log('puntos minimos' + puntosMinimos);
        if( puntosMinimos > 21 ) break;

    } while ( puntosComputadora < puntosMinimos && puntosMinimos <= 21 );        

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana');
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 20);
}
