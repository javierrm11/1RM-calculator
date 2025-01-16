export default function ReptecionMaxima({ peso, repeticiones }) {
    if (peso === 0 || repeticiones === 0) {
        return (
            <article className="bg-gray-800 p-6 rounded-lg text-center mt-6 shadow-md">
                <h2 className="text-xl font-bold text-yellow-500">Ingresa tu peso y repeticiones</h2>
            </article>
        );
    }
    const rm = Math.round(peso / (1.0278 - 0.0278 * repeticiones));
    return (
        <article className="bg-gray-800 p-6 rounded-lg text-center mt-6 shadow-md">
            <h2 className="text-xl font-bold text-yellow-500">Tu repetición máxima es:</h2>
            <p className="text-4xl font-bold text-yellow-300">{rm} kg</p>
        </article>
    );
}