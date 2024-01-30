
// import { crearCartas } from './usecases/crear-carta';
// import { pedirCarta } from './usecases/pedir-carta';
// import { valorCarta } from './usecases/valor-carta';

// import { crearCartas as createNewDeck } from './usecases/crear-carta'; // ALIAS
// import crearUnNuevoDeck from './usecases/crear-carta'; // 2DA OPCION DE EXPORTAR



import { crearCartas, crearElementHTML, pedirCarta, turnoComputadora, valorCarta } from './usecases'


const miModulo = ( () => {
    'use strict';
  
    let cartas     = [];
    var tipos      = ['E','T'], // ESPADAS - TREBOL - CORAZONES - DIAMANTES
    // var tipos      = ['E','T','C','D',], // ESPADAS - TREBOL - CORAZONES - DIAMANTES
        especiales = ['A','J','Q','K'];
  
    // let puntosJugadores = [];
    let puntosJugador = 0,
        puntosComputadora = 0;
        // puntosUltimo = 0;
  
    // REFERENCIA AL HTML
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');
  
    const puntosHTML = document.querySelectorAll('small');


    // const divCartasJugadores = document.querySelectorAll('.divCartas');
    const divCartasJugador     = document.querySelector('#jugador-cartas');
    const divCartasComputadora = document.querySelector('#computadora-cartas');
    // const divUltimoCartas = document.querySelector('#ultimo-cartas');


    const init = ( num = 2 ) => { // 2 CANTIDAD DE JUGADORES
        // cartas = crearCartas();
        cartas = crearCartas(tipos, especiales);
  
        puntosJugador = 0;
        puntosComputadora = 0;
        // puntosUltimo = 0;
  
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;
        // puntosHTML[2].innerText = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';
        // divUltimo.innerHTML = '';
  
        btnPedir.disabled   = false; // activando los botones
        btnDetener.disabled = false;
    }  
    
  
    btnPedir.addEventListener( 'click', () => {
        const carta = pedirCarta(cartas);

        puntosJugador = puntosJugador + valorCarta( carta );
        puntosHTML[0].innerText = puntosJugador;

        const imgCarta = crearElementHTML(carta);
        divCartasJugador.append(imgCarta);


        // const puntosJugador = acumularPuntos( 0, carta );
        // crearCartaImg( carta, 0);
  
        if ( puntosJugador > 21 ) {
            console.warn('Perdiste jugador!!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, cartas );
        } else if ( puntosJugador == 21 ) {
            console.warn('Llegaste a 21, genial!!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, cartas );
        } 
    });
    
    btnDetener.addEventListener( 'click', ( ) => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, cartas );
    });
  
    btnNuevo.addEventListener('click', () => {
        init();
    });
  
    return { // para acceder desde html
        nuevoJuego: init,
    }; 
  
  })();