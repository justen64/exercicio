import { useState } from 'react'

export default function Cronometro () {
    // Bloco lógico
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [mili, setMili] = useState('000');

    const [ligado, setLigado] = useState(false)

    function start(){
        setMili(parseInt(mili) + 1)
    }
    function pause(){

    }
    function reset (){

    }

    if(ligado){
        
    }

    // Bloco tela
    return(
        <div className="container">

            <div className="timer">
                <p>{`${minutes}:${seconds}:${mili}`}</p>
            </div>

            <div className="control">
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>

        </div>
    );
}