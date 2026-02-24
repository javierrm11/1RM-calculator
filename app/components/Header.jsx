export default function Header() {
    return (
        <header className="relative overflow-hidden border-b border-white/10 bg-slate-950/80 px-6 py-8 text-white backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),transparent_55%)]" />
            <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/80">Fuerza inteligente</p>
                <h1 className="text-balance text-3xl font-black text-white sm:text-4xl">1RM Calculator</h1>
                <p className="max-w-2xl text-sm text-slate-300 sm:text-base">Calcula tu repetición máxima y visualiza tus cargas recomendadas con un diseño moderno y limpio.</p>
            </div>
        </header>
    );
}
