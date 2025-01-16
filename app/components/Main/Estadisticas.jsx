export default function Estadisticas({ peso, repeticiones }) {
    if (peso === 0 || repeticiones === 0) {
        return null;
    }

    const rm = Math.round(peso / (1.0278 - 0.0278 * repeticiones));
    return (
        <section className="bg-gray-800 p-6 rounded-lg mt-6 flex flex-wrap justify-center w-full shadow-md">
            <h3 className="text-xl font-bold w-full text-left mb-4 text-yellow-500">Estadísticas por repeticiones</h3>
            {Array.from({ length: 16 }, (_, i) => (
                <article key={i} className="w-1/2 sm:w-1/2 md:w-1/4 mt-2 flex justify-center">
                    <div className="text-center p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-yellow-500">{i + 1}RM</h4>
                        <p className="text-2xl font-bold text-yellow-300">{Math.round(rm * (1 - 0.025 * i))} kg</p>
                    </div>
                </article>
            ))}
        </section>
    );
}