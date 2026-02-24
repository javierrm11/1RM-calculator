export default function PesoRepeticiones({ peso, repeticiones, handleChangePeso, handleChangeRepeticiones }) {
    return (
        <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_24px_80px_-40px_rgba(34,211,238,0.45)] backdrop-blur-xl sm:p-8">
            <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/90">Input</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Peso y repeticiones</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="peso" className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                    <span className="text-sm font-medium text-slate-300">Peso (kg)</span>
                    <input
                        type="number"
                        id="peso"
                        name="peso"
                        min="0"
                        value={peso}
                        onChange={handleChangePeso}
                        className="rounded-xl border border-transparent bg-slate-900/90 px-4 py-3 text-lg font-semibold text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/20"
                    />
                </label>
                <label htmlFor="repeticiones" className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                    <span className="text-sm font-medium text-slate-300">Repeticiones</span>
                    <input
                        type="number"
                        id="repeticiones"
                        name="repeticiones"
                        min="0"
                        value={repeticiones}
                        onChange={handleChangeRepeticiones}
                        className="rounded-xl border border-transparent bg-slate-900/90 px-4 py-3 text-lg font-semibold text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/20"
                    />
                </label>
            </div>
        </article>
    );
}
