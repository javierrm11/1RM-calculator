import { calculatorRm } from "@/app/utils";

export default function Estadisticas({ peso, repeticiones }) {
    if (peso === 0 || repeticiones === 0) {
        return null;
    }

    const rm = calculatorRm(peso, repeticiones);
    return (
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_70px_-35px_rgba(34,211,238,0.6)] backdrop-blur-xl sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-white">Proyección de carga por repeticiones</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 16 }, (_, i) => (
                    <article key={i} className="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-center transition hover:border-cyan-300/40 hover:bg-slate-800">
                        <h4 className="text-sm font-semibold text-cyan-300">{i + 1}RM</h4>
                        <p className="mt-1 text-xl font-bold text-white">{Math.round(rm * (1 - 0.025 * i))} kg</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
