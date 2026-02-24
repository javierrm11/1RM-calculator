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
        <main className="relative flex-1 px-6 py-8 sm:py-12">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_50%_95%,rgba(56,189,248,0.12),transparent_30%)]" />
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                <PesoRepeticiones
                    peso={peso}
                    repeticiones={repeticiones}
                    handleChangePeso={handleChangePeso}
                    handleChangeRepeticiones={handleChangeRepeticiones}
                />
                <ReptecionMaxima peso={peso} repeticiones={repeticiones} />
                <Estadisticas peso={peso} repeticiones={repeticiones} />
            </div>
        </main>
    );
}
