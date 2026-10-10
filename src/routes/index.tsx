import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import portrait from "@/assets/portrait.jpg";
import balloondog from "@/assets/balloondog.png";
import disco from "@/assets/disco.png";
import mermaid from "@/assets/mermaid.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Camila Arias · 18 · Sábado 31/10/2026" },
      { name: "description", content: "Estás invitad@ a los 18 de Camila Arias. Sábado 31 de octubre de 2026." },
      { property: "og:title", content: "It's my birthday · Camila Arias 18" },
      { property: "og:description", content: "Ceremonia y fiesta el sábado 31/10/2026. ¡Confirma tu asistencia!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAME = "CAMILA ARIAS";
const letterStyles = [
  "bg-paper text-ink font-serif",
  "bg-ink text-paper font-bold",
  "bg-cream text-forest font-type",
  "bg-mint text-ink font-serif",
  "bg-paper text-mint-deep font-bold",
  "bg-ink text-mint font-type",
  "bg-cream text-ink font-bold",
];
const rots = [-6, 4, -3, 7, -5, 3, -8, 5, -2, 6, -4, 2];

const MAP_IGLESIA = "https://www.google.com/maps/search/?api=1&query=Iglesia+de+Amagasi+del+Inca+Quito";
const MAP_NOGAL = "https://www.google.com/maps/search/?api=1&query=Propiedad+del+Nogal+Perucho";
const WA = `https://wa.me/?text=${encodeURIComponent("¡Hola Camila! Confirmo mi asistencia a tus 18 🎉")}`;

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`sticker ${className}`} aria-hidden>
      <path d="M12 1l2.9 7.1L22 9l-5.5 4.8L18.2 21 12 17.3 5.8 21l1.7-7.2L2 9l7.1-.9z" fill="var(--mint-deep)" stroke="var(--forest)" strokeWidth=".8" />
    </svg>
  );
}

function Hibiscus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`sticker ${className}`} aria-hidden>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="50" cy="28" rx="18" ry="24" fill="var(--mint-deep)" transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="9" fill="var(--forest)" />
      <circle cx="50" cy="50" r="3" fill="var(--cream)" />
    </svg>
  );
}

function Kiss({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={`sticker ${className}`} aria-hidden>
      <path d="M5 30 Q25 2 50 20 Q75 2 95 30 Q75 30 50 32 Q25 30 5 30Z" fill="oklch(0.55 0 0)" />
      <path d="M5 32 Q50 34 95 32 Q75 58 50 56 Q25 58 5 32Z" fill="oklch(0.45 0 0)" />
    </svg>
  );
}

function Cake({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`sticker ${className}`} aria-hidden fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round">
      <rect x="15" y="50" width="70" height="38" rx="4" fill="var(--cream)" />
      <path d="M15 62 q9 8 17 0 q9 8 18 0 q9 8 17 0 q9 8 18 0" />
      <rect x="25" y="34" width="50" height="16" rx="3" fill="var(--paper)" />
      <path d="M50 34 v-12" /><path d="M50 22 q-4 -6 0 -10 q4 4 0 10" fill="var(--mint)" />
      <path d="M50 70 l-14 -8 v16z M50 70 l14 -8 v16z" fill="var(--mint-deep)" stroke="var(--forest)" />
    </svg>
  );
}

function Cocktail({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`sticker ${className}`} aria-hidden stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round">
      <path d="M15 15 h70 l-35 40z" fill="var(--silver)" />
      <path d="M50 55 v30 M32 88 h36" fill="none" />
      <circle cx="68" cy="22" r="6" fill="var(--mint)" />
      <path d="M50 60 l-14 -8 v16z M50 60 l14 -8 v16z" fill="var(--forest)" />
    </svg>
  );
}

function PartyHat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={`sticker ${className}`} aria-hidden>
      <defs>
        <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="3" fill="var(--paper)" />
        </pattern>
      </defs>
      <path d="M50 8 L90 108 Q50 120 10 108Z" fill="var(--mint)" />
      <path d="M50 8 L90 108 Q50 120 10 108Z" fill="url(#dots)" />
      <circle cx="50" cy="8" r="9" fill="var(--mint-deep)" />
    </svg>
  );
}

function Calendar({ className = "" }: { className?: string }) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  // Oct 1 2026 is a Thursday -> 3 blanks with Monday start
  return (
    <div className={`w-36 bg-paper p-2 shadow-xl torn ${className}`}>
      <div className="bg-ink text-paper font-bold text-[10px] text-center py-1 tracking-widest">OCTUBRE 2026</div>
      <div className="grid grid-cols-7 gap-[2px] mt-1 text-[8px] text-center font-type">
        {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => <span key={i} className="font-bold">{d}</span>)}
        {[0, 1, 2].map((b) => <span key={`b${b}`} />)}
        {days.map((d) => (
          <span key={d} className="relative">
            {d}
            {d === 31 && (
              <svg viewBox="0 0 30 24" className="absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)]" aria-hidden>
                <path d="M4 12 C4 3, 26 2, 27 11 C28 21, 5 23, 3 13 C2 7, 12 3, 20 4" fill="none" stroke="var(--mint-deep)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function MapBtn({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-block mt-2 rounded-full bg-silver px-4 py-1 font-bold text-xs text-ink shadow-md active:scale-95 transition-transform">
      Ver mapa ↗
    </a>
  );
}

function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);
  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (on) a.pause(); else a.play().catch(() => {});
    setOn(!on);
  };
  return (
    <button onClick={toggle} aria-label={on ? "Pausar música" : "Reproducir música"} className="fixed top-4 right-4 z-40 h-16 w-16 rounded-full shadow-2xl active:scale-95 transition-transform" style={{ background: "conic-gradient(from 0deg, oklch(0.95 0 0), oklch(0.85 0.05 155), oklch(0.75 0.005 260), oklch(0.95 0.04 300), oklch(0.95 0 0))" }}>
      <span className={`absolute inset-0 rounded-full border-4 border-paper ${on ? "spin-slow" : ""}`} />
      <span className="absolute inset-[38%] rounded-full bg-paper border border-silver grid place-items-center text-[10px] text-ink">{on ? "❚❚" : "▶"}</span>
      <audio ref={ref} loop src="https://cdn.pixabay.com/audio/2022/10/25/audio_946bc8e8a9.mp3" />
    </button>
  );
}

function Guestbook() {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState<{ name: string; msg: string }[]>([]);
  return (
    <section className="relative mx-auto mt-16 w-[92%] rotate-[1.5deg] cork p-5 pt-8 shadow-2xl">
      <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]" />
      <h2 className="font-script text-5xl text-forest -rotate-2">Déjame un mensaje</h2>
      <form
        className="mt-4 bg-paper lined p-4 shadow-lg rotate-[-1deg]"
        onSubmit={(e) => {
          e.preventDefault();
          if (!msg.trim()) return;
          setNotes([{ name: name.trim() || "Anónim@", msg: msg.trim() }, ...notes]);
          setMsg(""); setName("");
        }}
      >
        <input value={name} onChange={(e) => setName(e.target.value)} maxLength={40} placeholder="Tu nombre" className="w-full bg-transparent font-script text-2xl outline-none placeholder:text-silver" />
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} maxLength={300} rows={4} placeholder="Escribe algo bonito..." className="w-full bg-transparent font-script text-2xl leading-7 outline-none resize-none placeholder:text-silver" />
        <div className="flex justify-end">
          <button type="submit" className="stamp bg-forest text-paper font-type text-xs px-4 py-3 rotate-[4deg] active:scale-95 transition-transform">
            ✉ ENVIAR<br /><span className="text-[9px]">CORREO 18</span>
          </button>
        </div>
      </form>
      <div className="mt-4 flex flex-wrap gap-3">
        {notes.map((n, i) => (
          <div key={i} className="bg-cream p-3 shadow-md font-script text-xl max-w-[48%]" style={{ transform: `rotate(${(rots[i % rots.length] ?? 0) / 2}deg)` }}>
            "{n.msg}" <span className="block text-right text-base text-forest">— {n.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="grain relative min-h-screen overflow-hidden bg-paper pb-32">
      <MusicPlayer />

      {/* Decorations */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img src={balloondog} alt="" width={816} height={816} className="sticker absolute top-6 -left-6 w-32 animate-float" style={{ ["--r" as string]: "-12deg" }} />
        <Star className="absolute top-40 left-4 w-8 animate-pulse" />
        <Star className="absolute top-52 left-14 w-5 animate-pulse" />
        <img src={disco} alt="" width={816} height={816} className="sticker absolute top-24 -right-4 w-28 animate-float" style={{ ["--r" as string]: "8deg" }} />
        <Hibiscus className="absolute top-52 right-2 w-20 rotate-12" />
        <Kiss className="absolute top-[900px] -left-2 w-24 -rotate-[20deg]" />
        <img src={mermaid} alt="" width={816} height={816} loading="lazy" className="sticker absolute top-[1150px] -right-6 w-28 animate-float" style={{ ["--r" as string]: "15deg" }} />
        <Cake className="absolute bottom-[620px] -left-2 w-24 rotate-[-8deg]" />
        <Cocktail className="absolute bottom-[560px] right-0 w-24 rotate-[10deg] animate-float" />
        <Star className="absolute bottom-[480px] right-20 w-6 animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-4 pt-14">
        {/* Hero */}
        <h1 className="metallic font-bold text-5xl leading-none text-center rotate-[-4deg]">IT'S MY<br />BIRTHDAY</h1>

        <div className="relative mx-auto mt-10 w-[78%] rotate-[3deg]">
          <PartyHat className="absolute -top-20 left-[30%] w-24 z-20 rotate-[-18deg]" />
          <div className="bg-paper p-3 pb-14 shadow-2xl">
            <img src={portrait} alt="Camila Arias" width={768} height={960} className="w-full grayscale contrast-125" />
          </div>
          <span className="tape tape-grey -top-2 -right-6 rotate-[35deg]" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[120%] flex flex-wrap justify-center gap-1 rotate-[-3deg] z-20">
            {NAME.split("").map((ch, i) =>
              ch === " " ? <span key={i} className="w-3" /> : (
                <span key={i} className={`${letterStyles[i % letterStyles.length]} px-1.5 py-0.5 text-2xl shadow-md`} style={{ transform: `rotate(${rots[i]}deg)` }}>
                  {ch}
                </span>
              ),
            )}
          </div>
        </div>

        <p className="balloon font-bold text-[9rem] leading-none text-center mt-8 tracking-tighter rotate-[-5deg]">18</p>

        {/* Details */}
        <div className="relative mt-10">
          <Calendar className="absolute -top-10 -right-2 rotate-[8deg] z-20" />
          <div className="relative w-[80%] bg-cream p-6 shadow-xl rotate-[-3deg] torn">
            <span className="tape -top-1 -left-4 rotate-[-30deg]" />
            <p className="font-type text-xs tracking-widest">SAVE THE DATE</p>
            <p className="font-script text-5xl text-forest leading-tight">Sábado<br />31/10/2026</p>
          </div>
        </div>

        <div className="relative mt-12 ml-auto w-[88%] bg-paper p-5 shadow-xl rotate-[2deg] border border-silver">
          <span className="tape tape-grey -top-3 left-6 rotate-[-6deg]" />
          <span className="tape -bottom-3 -right-4 rotate-[25deg]" />
          <p className="font-groovy text-xl text-mint-deep">CEREMONIA</p>
          <p className="font-bold text-lg mt-1">9:00 a.m. – 11:00 a.m.</p>
          <p className="font-type text-sm">Iglesia de Amagasí del Inca</p>
          <MapBtn href={MAP_IGLESIA} />
        </div>

        <div className="relative mt-12 w-[90%] bg-ink text-paper p-5 shadow-2xl rotate-[-2deg] torn">
          <span className="tape -top-1 right-8 rotate-[8deg]" />
          <p className="font-groovy text-xl text-mint">RECEPCIÓN</p>
          <p className="font-bold text-lg mt-1">12:00 p.m. – 6:00 p.m.</p>
          <p className="font-type text-sm">Perucho · Propiedad del Nogal</p>
          <MapBtn href={MAP_NOGAL} />
        </div>

        <div className="relative mt-10 flex justify-start pl-6">
          <Calendar className="rotate-[-7deg]" />
          <p className="font-script text-3xl text-forest rotate-[6deg] ml-4 mt-8">¡no faltes! ♡</p>
        </div>
      </div>

      <div className="relative z-10 max-w-md mx-auto">
        <Guestbook />
      </div>

      <a href={WA} target="_blank" rel="noreferrer" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-bold text-ink shadow-2xl active:scale-95 transition-transform whitespace-nowrap">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.2c-.2.2-.3.2-.6.1-1.6-.8-2.8-1.7-3.9-3.5-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.3-.3-.4-.6-.5zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" /></svg>
        Confirmar por WhatsApp
      </a>
    </main>
  );
}
