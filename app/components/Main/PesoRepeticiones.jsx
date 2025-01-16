export default function PesoRepeticiones({ peso, repeticiones, handleChangePeso, handleChangeRepeticiones }) {
    return (
        <article className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-yellow-500">Peso y Repeticiones</h2>
            <div className="flex flex-col gap-4 mb-4">
                <label htmlFor="peso" className="font-semibold text-yellow-500">Peso</label>
                <input 
                    type="number" 
                    id="peso" 
                    name="peso" 
                    value={peso} 
                    onChange={handleChangePeso}
                    className="border border-gray-600 p-2 rounded-md text-black"
                />
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="repeticiones" className="font-semibold text-yellow-500">Repeticiones</label>
                <input 
                    type="number" 
                    id="repeticiones" 
                    name="repeticiones" 
                    value={repeticiones} 
                    onChange={handleChangeRepeticiones}
                    className="border border-gray-600 p-2 rounded-md text-black"
                />
            </div>
        </article>
    );
}