const crownRays = Array.from({ length: 9 }, (_, index) => ({
  id: `ray-${index}`,
  rotation: -40 + index * 10
}));

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,95,162,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(143,247,232,0.14),_transparent_45%)]" />

      <section className="noise-overlay relative z-10 flex w-full max-w-6xl flex-col gap-12 overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#28143b]/95 via-[#180e27]/95 to-[#0f0820]/95 p-10 shadow-[0_30px_80px_rgba(20,9,45,0.65)] backdrop-blur-xl lg:flex-row lg:items-center lg:gap-16 lg:p-16">
        <div className="relative mx-auto flex h-[28rem] w-full max-w-[20rem] items-end justify-center rounded-[3rem] bg-gradient-to-b from-[#35205d] via-[#241637] to-[#0d071b] p-6 shadow-[0_25px_60px_rgba(193,255,0,0.25)]">
          <div className="absolute -top-24 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[5.5rem] border-r-[5.5rem] border-b-[4rem] border-l-transparent border-r-transparent border-b-[#C1FF00]/80 blur-[1px]" />

          <div className="absolute -top-4 left-1/2 flex h-28 w-56 -translate-x-1/2 -translate-y-16 items-center justify-center rounded-full bg-gradient-to-r from-[#C1FF00] via-[#8FF7E8] to-[#FF5FA2] shadow-[0_20px_60px_rgba(255,95,162,0.4)]">
            <div className="relative h-20 w-48 rounded-full border border-white/40 bg-[#1a1127] shadow-inner">
              <div className="absolute inset-0 rounded-full border border-[#C1FF00]/40 bg-gradient-to-r from-[#2d1849] via-[#1b0f2d] to-[#2d1849]" />
              <div className="absolute inset-0 overflow-visible">
                {crownRays.map((ray) => (
                  <span
                    key={ray.id}
                    className="absolute left-1/2 top-2 h-20 w-[0.45rem] origin-bottom rounded-full bg-gradient-to-b from-[#C1FF00] via-[#8FF7E8] to-transparent opacity-90"
                    style={{ transform: `translateX(-50%) rotate(${ray.rotation}deg)` }}
                  />
                ))}
              </div>
              <div className="absolute inset-x-12 bottom-2 rounded-full bg-gradient-to-r from-[#FF5FA2]/40 via-transparent to-[#8FF7E8]/40 blur-lg" />
            </div>
          </div>

          <div className="relative flex h-full w-full flex-col items-center justify-end gap-4 pb-4">
            <div className="flex w-full items-center justify-center">
              <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-[#8FF7E8] via-[#C1FF00] to-[#FF5FA2] shadow-[0_20px_50px_rgba(143,247,232,0.45)]">
                <div className="absolute inset-1 rounded-full border border-white/30 bg-[#1a1127]" />
                <div className="absolute inset-x-5 bottom-6 h-10 rounded-full bg-gradient-to-b from-[#C1FF00]/70 to-transparent blur-md" />
                <div className="absolute inset-x-9 bottom-10 h-3 rounded-full bg-white/70 blur-sm" />
              </div>
            </div>

            <div className="relative w-full">
              <div className="mx-auto h-8 w-48 rounded-full bg-gradient-to-r from-[#8FF7E8]/30 via-transparent to-[#FF5FA2]/30 blur-lg" />
              <div className="relative mx-auto flex h-44 w-48 flex-col items-center rounded-[2.4rem] bg-gradient-to-b from-[#231441] via-[#1a0f30] to-[#0d061b] p-6 shadow-[0_15px_50px_rgba(255,95,162,0.35)]">
                <div className="absolute left-1/2 top-0 h-[4.5rem] w-[6.5rem] -translate-x-1/2 -translate-y-2 rounded-b-[2.5rem] bg-[#2d174b]" />
                <div className="absolute inset-x-6 top-10 h-1 rounded-full bg-[#8FF7E8]/50 blur-[1px]" />
                <div className="absolute inset-x-10 top-16 h-1 rounded-full bg-[#C1FF00]/45 blur-[1px]" />
                <div className="relative mt-10 flex w-full justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                  <span>liberty</span>
                  <span>neo</span>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center">
              <div className="h-36 w-24 rounded-t-[45%] bg-gradient-to-b from-[#21133c] via-[#1b0f31] to-[#0a0416] shadow-[0_8px_35px_rgba(193,255,0,0.25)]">
                <div className="absolute bottom-4 left-1/2 h-4 w-32 -translate-x-1/2 rounded-full bg-[#8FF7E8]/25 blur-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 space-y-8" style={{ textWrap: "balance" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#C1FF00] to-[#FF5FA2]" />
            Gen Z Liberty Drop
          </span>
          <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl">
            Neon Liberty vibes with a crown that absolutely eats.
          </h1>
          <p className="max-w-xl text-lg text-white/70">
            A reimagined Statue of Liberty draped in iridescent gradients, crowned with neon spikes,
            and glowing with the energy of a midnight rooftop rave. This is homage meets hyperpop.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_15px_45px_rgba(255,95,162,0.15)]">
              <h2 className="font-display text-2xl text-neon-lime">Crown Glow</h2>
              <p className="mt-2 text-sm text-white/70">
                Nine ultraviolet beams pulse in sync, channeling the collective FOMO of a city that never sleeps.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_15px_45px_rgba(143,247,232,0.18)]">
              <h2 className="font-display text-2xl text-bubblegum-pink">Aura Blend</h2>
              <p className="mt-2 text-sm text-white/70">
                Layered gradients wrap the figure in synthwave shimmer, bridging heritage and hype.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FF5FA2] via-[#C1FF00] to-[#8FF7E8] px-6 py-3 font-display text-base text-[#12081f] shadow-[0_18px_45px_rgba(255,95,162,0.45)] transition-transform duration-300 hover:scale-[1.03]">
              Beam Me Up
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button className="rounded-full border border-white/20 bg-transparent px-6 py-3 font-display text-base text-white transition-colors duration-300 hover:border-neon-lime hover:text-neon-lime">
              Crown Specs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
