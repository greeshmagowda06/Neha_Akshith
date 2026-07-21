import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "@/lib/motion";
import { sendRsvpEmail } from "@/lib/rsvp-email";
import { createFileRoute } from "@tanstack/react-router";
import { FiCalendar, FiMapPin, FiHeart } from "react-icons/fi";
import { GiBigDiamondRing, GiLotus, GiIndianPalace } from "react-icons/gi";
import kalash from "@/assets/kalash.png";
import divider from "@/assets/divider.png";
import diya from "@/assets/diya.png";


export const Route = createFileRoute("/")({ component: Invitation });

const WEDDING_DATE = new Date("2026-08-30T09:30:00+05:30").getTime();

/* ------------ Cursor ------------ */
function GoldenCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  useEffect(() => {
    let id = 0;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTrail((t) => [...t.slice(-8), { x: e.clientX, y: e.clientY, id: id++ }]);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {trail.map((t, i) => (
        <div
          key={t.id}
          className="absolute h-1 w-1 rounded-full bg-gold"
          style={{
            left: t.x, top: t.y,
            opacity: (i + 1) / trail.length * 0.6,
            transform: `translate(-50%,-50%) scale(${(i+1)/trail.length})`,
            boxShadow: "0 0 8px rgba(200,155,60,0.9)",
          }}
        />
      ))}
      <div
        className="absolute h-6 w-6 rounded-full"
        style={{
          left: pos.x, top: pos.y, transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(255,220,120,0.9) 0%, rgba(200,155,60,0.4) 40%, transparent 70%)",
          boxShadow: "0 0 20px rgba(200,155,60,0.8)",
        }}
      />
    </div>
  );
}

/* ------------ Ambient background ------------ */
function GoldenDust() {
  const particles = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold-soft"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            opacity: Math.random() * 0.5 + 0.2,
            boxShadow: "0 0 8px rgba(230,201,134,0.9)",
            animation: `float-up ${Math.random() * 15 + 12}s linear ${Math.random() * 10}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Petals() {
  const petals = Array.from({ length: 12 });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((_, i) => (
        <span
          key={i}
          className="absolute text-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`,
            color: i % 2 === 0 ? "#c89b3c" : "#e6a5b0",
            animation: `petal-fall ${Math.random() * 12 + 10}s linear ${Math.random() * 10}s infinite`,
          }}
        >❁</span>
      ))}
    </div>
  );
}

/* ------------ Landing intro ------------ */
function IntroOverlay({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => setPhase(4), 3800),
      setTimeout(() => onDone(), 4800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0203]"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* golden dust */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="absolute rounded-full bg-gold-soft"
            style={{
              left: `${Math.random()*100}%`, width: 3, height: 3,
              boxShadow: "0 0 10px rgba(230,201,134,0.9)",
              animation: `float-up ${Math.random()*10+8}s linear ${Math.random()*3}s infinite`,
            }} />
        ))}
      </div>


      {/* frame */}
      <div className="relative h-[70vh] w-[90vw] max-w-2xl">



        {/* diyas */}
        <motion.img
          src={diya}
          alt=""
          className="absolute left-4 top-1/2 h-24 -translate-y-1/2 animate-flicker"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={diya}
          alt=""
          className="absolute right-4 top-1/2 h-24 -translate-y-1/2 animate-flicker"
          style={{ animationDelay: "0.5s" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 ? 1 : 0 }}
          transition={{ duration: 1 }}
        />

        {/* kalash */}
        <motion.img
          src={kalash}
          alt="Kalash"
          className="absolute left-1/2 top-1/2 h-48 -translate-x-1/2 -translate-y-1/2 md:h-64"
          initial={{ opacity: 0, y: 40, scale: 0.7 }}
          animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 40, scale: phase >= 3 ? 1 : 0.7 }}
          transition={{ duration: 1.2 }}
          style={{ filter: "drop-shadow(0 0 30px rgba(200,155,60,0.6))" }}
        />

        {/* names */}
        <motion.div
          className="absolute inset-x-0 bottom-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: phase >= 4 ? 1 : 0, y: phase >= 4 ? 0 : 20 }}
          transition={{ duration: 1 }}
        >
          <div className="font-script text-4xl text-gold-gradient md:text-5xl">Neha &amp; Akshith</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ------------ Sections ------------ */
function Divider() {
  return (
    <motion.div
      className="my-12 flex justify-center"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <img src={divider} alt="" className="h-12 w-auto max-w-[80%] opacity-90" />
    </motion.div>
  );
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

function EventCard({
  title, date, day, time, subtitle,
}: { title: string; date: string; day: string; time: string; subtitle?: string }) {
  return (
    <motion.div
      className="glass-card group relative mx-auto max-w-md overflow-hidden rounded-3xl px-8 py-12 text-center"
      initial={{ opacity: 0, rotateY: -12, y: 40 }}
      whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* shine */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-gold-soft/50 to-transparent"
          style={{ animation: "shine 4s ease-in-out infinite" }}
        />
      </div>

      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-ivory text-gold shadow-[0_0_20px_rgba(200,155,60,0.4)]">
        <FiCalendar className="h-6 w-6" />
      </div>
      {subtitle && <div className="mb-2 font-serif text-sm uppercase tracking-[0.3em] text-gold">{subtitle}</div>}
      <h3 className="mb-4 font-display text-3xl text-maroon">{title}</h3>
      <div className="mx-auto mb-4 h-px w-16 bg-gold/60" />
      <div className="font-script text-4xl text-gold-gradient">{date}</div>
      <div className="mt-2 font-serif text-lg text-maroon/80">{day}</div>
      <div className="mt-1 font-serif text-base text-maroon/60">{time}</div>
    </motion.div>
  );
}

function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, WEDDING_DATE - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);
  const items = [
    { label: "Days", val: t.d },
    { label: "Hours", val: t.h },
    { label: "Minutes", val: t.m },
    { label: "Seconds", val: t.s },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {items.map((it) => (
        <div key={it.label} className="flex flex-col items-center">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full md:h-32 md:w-32">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(200,155,60,0.2)" strokeWidth="2" />
              <circle cx="50" cy="50" r="46" fill="none" stroke="#c89b3c" strokeWidth="2"
                strokeDasharray="289" strokeDashoffset={289 - (289 * (it.val / (it.label==="Days"?365:it.label==="Hours"?24:60)))}
                strokeLinecap="round" style={{ filter: "drop-shadow(0 0 6px rgba(200,155,60,0.6))" }} />
            </svg>
            <span className="font-display text-3xl text-gold-gradient md:text-4xl">
              {String(it.val).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-3 font-serif text-xs uppercase tracking-[0.3em] text-maroon/70">{it.label}</span>
        </div>
      ))}
    </div>
  );
}


function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      guests: Number(formData.get("guests") ?? 1),
      reception: formData.get("reception") === "on",
      wedding: formData.get("wedding") === "on",
    };

    try {
      await sendRsvpEmail({ data: payload });
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to send RSVP right now.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      className="glass-card mx-auto max-w-xl space-y-5 rounded-3xl p-8 md:p-10"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="mb-1 block font-serif text-sm uppercase tracking-[0.2em] text-gold">Name</label>
        <input name="name" required className="w-full rounded-lg border border-gold/40 bg-ivory/70 px-4 py-3 font-serif text-maroon outline-none transition focus:border-gold focus:shadow-[0_0_20px_rgba(200,155,60,0.3)]" />
      </div>
      <div>
        <label className="mb-1 block font-serif text-sm uppercase tracking-[0.2em] text-gold">Phone</label>
        <input name="phone" required type="tel" className="w-full rounded-lg border border-gold/40 bg-ivory/70 px-4 py-3 font-serif text-maroon outline-none transition focus:border-gold focus:shadow-[0_0_20px_rgba(200,155,60,0.3)]" />
      </div>
      <div>
        <label className="mb-1 block font-serif text-sm uppercase tracking-[0.2em] text-gold">Guests</label>
        <input name="guests" required type="number" min={1} defaultValue={1} className="w-full rounded-lg border border-gold/40 bg-ivory/70 px-4 py-3 font-serif text-maroon outline-none transition focus:border-gold focus:shadow-[0_0_20px_rgba(200,155,60,0.3)]" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <label className="flex items-center gap-3 rounded-lg border border-gold/40 bg-ivory/70 px-4 py-3 font-serif text-maroon">
          <input name="reception" type="checkbox" defaultChecked className="h-4 w-4 accent-[#c89b3c]" />
          Reception
        </label>
        <label className="flex items-center gap-3 rounded-lg border border-gold/40 bg-ivory/70 px-4 py-3 font-serif text-maroon">
          <input name="wedding" type="checkbox" defaultChecked className="h-4 w-4 accent-[#c89b3c]" />
          Wedding
        </label>
      </div>
      <button
        type="submit"
        disabled={sending}
        onClick={(e) => {
          const r = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
          setRipple({ x: e.clientX - r.left, y: e.clientY - r.top });
          setTimeout(() => setRipple(null), 700);
        }}
        className="relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#8a6a24] via-[#c89b3c] to-[#f4d98a] px-8 py-4 font-display text-lg text-ivory shadow-[0_10px_30px_-10px_rgba(200,155,60,0.7)] transition hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(200,155,60,0.9)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitted ? "Blessing sent" : sending ? "Sending..." : "Send Blessing"}
        {ripple && (
          <span
            className="pointer-events-none absolute rounded-full bg-white/60"
            style={{
              left: ripple.x, top: ripple.y,
              width: 20, height: 20, transform: "translate(-50%,-50%)",
              animation: "glow-pulse 0.7s ease-out forwards",
            }}
          />
        )}
      </button>
      {error && <p className="text-center font-serif text-sm text-red-700">{error}</p>}
    </form>
  );
}

function Fireworks({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full"
          initial={{
            left: `${Math.random()*100}%`, top: `${Math.random()*60+10}%`,
            scale: 0, opacity: 1,
          }}
          animate={{ scale: [0, 8, 0], opacity: [1, 1, 0] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatDelay: 3 }}
          style={{
            background: i % 2 ? "#c89b3c" : "#f4d98a",
            boxShadow: "0 0 40px 20px rgba(200,155,60,0.6)",
          }}
        />
      ))}
      {/* confetti */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={`c${i}`}
          className="absolute h-2 w-2"
          style={{
            left: `${Math.random()*100}%`, top: "-5%",
            background: ["#c89b3c","#f4d98a","#5a0e1a","#fff9f0"][i%4],
          }}
          initial={{ y: 0, rotate: 0, opacity: 1 }}
          animate={{ y: "110vh", rotate: 720, opacity: 0 }}
          transition={{ duration: 5, delay: Math.random()*3, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

/* ------------ Main ------------ */
function Invitation() {
  const [intro, setIntro] = useState(true);
  
  const [reachedEnd, setReachedEnd] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const progressWidth = useTransform(progress, (v) => `${v * 100}%`);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      setReachedEnd(nearBottom);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence>{intro && <IntroOverlay onDone={() => setIntro(false)} />}</AnimatePresence>

      <GoldenCursor />
      <GoldenDust />
      <Petals />
      <Fireworks show={reachedEnd} />

      {/* Progress vine */}
      <motion.div
        className="fixed left-0 top-0 z-40 h-1 bg-gradient-to-r from-[#8a6a24] via-[#f4d98a] to-[#c89b3c]"
        style={{ width: progressWidth, boxShadow: "0 0 15px rgba(200,155,60,0.8)" }}
      />


      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-4 py-16">

        {/* swinging bells */}

        <div className="relative mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="mb-8 font-serif text-base italic text-maroon/70 md:text-lg">
              With the blessings of elders and the grace of the Almighty
            </p>
          </FadeUp>

          <motion.img
            src={kalash}
            alt="Kalash"
            className="mx-auto mb-6 h-32 md:h-44"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ filter: "drop-shadow(0 0 30px rgba(200,155,60,0.5))" }}
          />

          <motion.h1
            className="font-script text-6xl leading-tight text-gold-gradient md:text-8xl"
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.02em" }}
            transition={{ duration: 2.5, delay: 1 }}
          >
            Neha M Devaraj
          </motion.h1>

          <motion.div
            className="my-6 flex items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <span className="h-px w-16 bg-gold/60 md:w-24" />
            <FiHeart className="h-6 w-6 text-maroon animate-glow-pulse" />
            <span className="h-px w-16 bg-gold/60 md:w-24" />
          </motion.div>

          <motion.h1
            className="font-script text-6xl leading-tight text-gold-gradient md:text-8xl"
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.02em" }}
            transition={{ duration: 2.5, delay: 2.2 }}
          >
            Akshith Chandra
          </motion.h1>

          <FadeUp delay={2.5}>
            <p className="mt-10 font-serif text-lg italic text-maroon/80 md:text-xl">
              Together with their families invite you to celebrate their wedding.
            </p>
          </FadeUp>

          {/* diyas */}
          <div className="mt-10 flex justify-center gap-16">
            <img src={diya} alt="" className="h-20 animate-flicker md:h-28" loading="lazy" />
            <img src={diya} alt="" className="h-20 animate-flicker md:h-28" style={{ animationDelay: "0.4s" }} loading="lazy" />
          </div>
        </div>
      </section>

      <Divider />

      {/* Events */}
      <section className="px-4 py-16">
        <FadeUp>
          <h2 className="mb-2 text-center font-display text-4xl text-maroon md:text-5xl">Celebrations</h2>
          <p className="mb-12 text-center font-serif italic text-maroon/60">Two evenings of joy</p>
        </FadeUp>

        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          <EventCard
            subtitle="Reception"
            title="An Evening of Joy"
            date="29 August 2026"
            day="Saturday"
            time="7:00 PM onwards"
          />

          {/* Muhurtham with mandala */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-[110%] w-[110%] rounded-full border border-gold/20 animate-spin-slow"
                style={{
                  background: "radial-gradient(circle, rgba(200,155,60,0.15), transparent 70%)",
                }}
              />
            </div>
            <EventCard
              subtitle="Muhurtham"
              title="Wedding Ceremony"
              date="30 August 2026"
              day="Sunday"
              time="9:30 AM onwards"
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* Venue */}
      <section className="px-4 py-16">
        <FadeUp>
          <div className="glass-card mx-auto max-w-3xl rounded-3xl p-8 text-center md:p-14">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-maroon text-gold shadow-[0_0_30px_rgba(200,155,60,0.5)]"
            >
              <FiMapPin className="h-7 w-7" />
            </motion.div>
            <h2 className="mb-2 font-display text-4xl text-maroon">Venue</h2>
            <div className="mx-auto my-4 h-px w-20 bg-gold/60" />
            <div className="font-script text-4xl text-gold-gradient md:text-5xl">NS Palace</div>
            <p className="mt-6 font-serif text-base leading-relaxed text-maroon/80 md:text-lg">
              Magadi Main Rd, Near Indian Oil Petrol Bunk,<br />
              Tavarekere, Channadasipalya,<br />
              Bengaluru, Karnataka 562130
            </p>
            <a
              href="https://maps.google.com/?q=NS+Palace+Magadi+Main+Rd+Tavarekere+Bengaluru"
              target="_blank" rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gradient-to-r from-[#c89b3c] to-[#f4d98a] px-8 py-3 font-serif text-maroon shadow-[0_10px_30px_-10px_rgba(200,155,60,0.7)] transition hover:scale-105 hover:shadow-[0_0_40px_rgba(200,155,60,0.7)]"
            >
              <FiMapPin /> Open in Google Maps
            </a>
          </div>
        </FadeUp>
      </section>

      <Divider />

      {/* Countdown */}
      <section className="px-4 py-16">
        <FadeUp>
          <h2 className="mb-2 text-center font-display text-4xl text-maroon md:text-5xl">Counting the Moments</h2>
          <p className="mb-12 text-center font-serif italic text-maroon/60">Until we say "yes"</p>
        </FadeUp>
        <FadeUp delay={0.2}><Countdown /></FadeUp>
      </section>

      <Divider />


      {/* Blessings */}
      <section className="px-4 py-16">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              className="mx-auto mb-6 text-6xl text-gold"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <GiLotus />
            </motion.div>
            <p className="font-serif text-xl italic leading-relaxed text-maroon md:text-2xl">
              "Your gracious presence and blessings will make this auspicious occasion complete and memorable."
            </p>
          </div>
        </FadeUp>
      </section>

      <Divider />

      {/* RSVP */}
      <section className="px-4 py-16">
        <FadeUp>
          <h2 className="mb-2 text-center font-display text-4xl text-maroon md:text-5xl">RSVP</h2>
          <p className="mb-12 text-center font-serif italic text-maroon/60">Kindly let us know</p>
        </FadeUp>
        <FadeUp delay={0.2}><RSVP /></FadeUp>
      </section>

      <Divider />

      {/* Final */}
      <section className="relative px-4 py-24 text-center">
        <FadeUp>
          <div className="text-6xl text-gold mb-6"><GiIndianPalace className="mx-auto" /></div>
          <h2 className="font-script text-7xl text-gold-gradient md:text-8xl">Thank You</h2>
          <p className="mt-6 font-serif text-lg italic text-maroon/80 md:text-xl">
            We look forward to celebrating with you.
          </p>
          <div className="mt-8 font-script text-3xl text-gold-gradient">Neha &amp; Akshith</div>
        </FadeUp>
      </section>

      <footer className="pb-12 text-center font-serif text-xs uppercase tracking-[0.3em] text-maroon/40">
        With love · Bengaluru · 2026
      </footer>

    </div>
  );
}
