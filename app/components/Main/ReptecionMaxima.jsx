import { calculatorRm } from "@/app/utils";

export default function ReptecionMaxima({ peso, repeticiones }) {
    if (peso === 0 || repeticiones === 0) {
        return (
            <article className="rounded-3xl border border-dashed border-white/20 bg-slate-900/60 p-8 text-center text-slate-200 shadow-[0_20px_50px_-35px_rgba(56,189,248,0.8)] backdrop-blur-xl">
                <h2 className="text-xl font-semibold">Ingresa tu peso y repeticiones para generar el cálculo</h2>
            </article>
        );
    }

    return (
        <article className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/50 p-8 text-center shadow-[0_24px_80px_-35px_rgba(34,211,238,0.6)]">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/90">Resultado principal</p>
            <h2 className="mt-3 text-lg font-medium text-slate-200">Tu repetición máxima estimada es:</h2>
            <p className="mt-4 text-5xl font-black text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.3)]">
                {calculatorRm(peso, repeticiones)} kg
            </p>
        </article>
    );
}
