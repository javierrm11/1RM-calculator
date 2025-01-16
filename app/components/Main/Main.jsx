import React, { useState } from 'react';
import PesoRepeticiones from "./PesoRepeticiones";
import ReptecionMaxima from "./ReptecionMaxima";
import Estadisticas from './Estadisticas';

export default function Main() {
    const [peso, setPeso] = useState(0);
    const [repeticiones, setRepeticiones] = useState(0);

    const handleChangePeso = (e) => {
        setPeso(e.target.value);
    };

    const handleChangeRepeticiones = (e) => {
        setRepeticiones(e.target.value);
    };

    return (
        <main className="bg-gray-900 px-10 py-8">
            <PesoRepeticiones 
                peso={peso} 
                repeticiones={repeticiones} 
                handleChangePeso={handleChangePeso} 
                handleChangeRepeticiones={handleChangeRepeticiones} 
            />
            <ReptecionMaxima peso={peso} repeticiones={repeticiones}/>
            <Estadisticas peso={peso} repeticiones={repeticiones}/>
        </main>
    );
}