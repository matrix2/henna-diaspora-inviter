import { useState } from "react";
import tatreezStrip from "@/assets/tatreez-strip.jpg";
import parchment from "@/assets/parchment-bg.jpg";
import medallion from "@/assets/tatreez-medallion.png";
import heritageBg from "@/assets/heritage-bg.png";
import Countdown from "./Countdown";
import { cn } from "@/lib/utils";

type Theme = "tatreez" | "ivory" | "henna";

const THEMES: { id: Theme; label: string; dot: string }[] = [
  { id: "tatreez", label: "تطريز", dot: "bg-primary" },
  { id: "ivory", label: "زيتون", dot: "bg-[hsl(80_35%_35%)]" },
  { id: "henna", label: "حنّاء", dot: "bg-[hsl(0_70%_35%)]" },
];

const Poster = () => {
  const [theme, setTheme] = useState<Theme>("tatreez");

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Theme Switcher */}
      <div className="mb-6 flex justify-center">
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-card/80 border border-gold/40 backdrop-blur-sm shadow-deep">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={cn(
                "relative px-4 py-2 rounded-full font-body text-xs sm:text-sm transition-all flex items-center gap-2",
                theme === t.id
                  ? "bg-gold text-background shadow-gold"
                  : "text-foreground/70 hover:text-gold"
              )}
              aria-pressed={theme === t.id}
            >
              <span className={cn("w-2 h-2 rounded-full", t.dot)} />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Outer glow */}
      <div className="absolute -inset-4 top-16 bg-gradient-to-br from-gold/20 via-primary/10 to-gold/20 blur-2xl rounded-[2rem]" />

      {theme === "tatreez" && <TatreezPoster />}
      {theme === "ivory" && (
        <HeritagePoster
          variant="ivory"
          titleColor="hsl(80 40% 28%)"
          brideColor="hsl(80 35% 25%)"
          accentColor="hsl(80 35% 35%)"
          dateColor="hsl(80 40% 28%)"
        />
      )}
      {theme === "henna" && (
        <HeritagePoster
          variant="henna"
          titleColor="hsl(345 70% 30%)"
          brideColor="hsl(345 75% 28%)"
          accentColor="hsl(345 65% 35%)"
          dateColor="hsl(345 70% 30%)"
        />
      )}
    </div>
  );
};

/* =============== TATREEZ — original parchment with embroidery strips =============== */
const TatreezPoster = () => (
  <div
    key="tatreez"
    className="relative rounded-2xl overflow-hidden shadow-deep border-2 border-[hsl(0_70%_35%)]/40 animate-fade-up"
  >
    <div className="absolute inset-0">
      <img src={parchment} alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(42_60%_92%)]/30 via-transparent to-[hsl(42_55%_88%)]/40" />

    <div className="absolute top-0 bottom-0 left-2 w-7 sm:w-9 overflow-hidden opacity-95">
      <img src={tatreezStrip} alt="" className="h-full w-full object-cover" aria-hidden="true" />
    </div>
    <div className="absolute top-0 bottom-0 right-2 w-7 sm:w-9 overflow-hidden opacity-95">
      <img
        src={tatreezStrip}
        alt=""
        className="h-full w-full object-cover"
        style={{ transform: "scaleX(-1)" }}
        aria-hidden="true"
      />
    </div>

    <PosterBody
      titleColor="hsl(0 75% 32%)"
      brideColor="hsl(80 35% 28%)"
      accentColor="hsl(0 70% 35%)"
      dateColor="hsl(0 75% 35%)"
      mutedColor="hsl(0 0% 25%)"
      bodyColor="hsl(0 0% 30%)"
    />
  </div>
);

/* =============== HERITAGE BG — for ivory & henna using uploaded background =============== */
interface HeritagePosterProps {
  variant: "ivory" | "henna";
  titleColor: string;
  brideColor: string;
  accentColor: string;
  dateColor: string;
}
const HeritagePoster = ({ variant, titleColor, brideColor, accentColor, dateColor }: HeritagePosterProps) => (
  <div
    key={variant}
    className="relative rounded-2xl overflow-hidden shadow-deep border-2 animate-fade-up"
    style={{ borderColor: accentColor + "70" }}
  >
    {/* Heritage background (uploaded image) */}
    <div className="absolute inset-0">
      <img src={heritageBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </div>
    {/* Soft tinted overlay to push the parchment center forward */}
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(42_60%_92%)]/25 via-[hsl(42_55%_90%)]/35 to-[hsl(42_60%_92%)]/30" />

    <PosterBody
      titleColor={titleColor}
      brideColor={brideColor}
      accentColor={accentColor}
      dateColor={dateColor}
      mutedColor="hsl(0 0% 25%)"
      bodyColor="hsl(0 0% 28%)"
    />

    {/* Text on the tambourine (bottom-right of the heritage image) */}
    <div
      className="absolute pointer-events-none z-30"
      style={{
        right: "6%",
        bottom: "7%",
        width: "26%",
        transform: "rotate(-12deg)",
        textAlign: "center",
      }}
      aria-hidden="true"
    >
      <p
        className="font-display leading-tight"
        style={{
          color: "hsl(0 75% 28%)",
          fontSize: "clamp(10px, 2.6vw, 15px)",
          textShadow: "0 1px 1px hsl(42 60% 90% / 0.6)",
          letterSpacing: "0.02em",
        }}
      >
        حنّة العروس
      </p>
    </div>
  </div>
);
      titleColor={titleColor}
      brideColor={brideColor}
      accentColor={accentColor}
      dateColor={dateColor}
      mutedColor="hsl(0 0% 25%)"
      bodyColor="hsl(0 0% 28%)"
    />
  </div>
);

/* =============== Shared body — same layout & fonts for all themes =============== */
interface BodyProps {
  titleColor: string;
  brideColor: string;
  accentColor: string;
  dateColor: string;
  mutedColor: string;
  bodyColor: string;
}
const PosterBody = ({ titleColor, brideColor, accentColor, dateColor, mutedColor, bodyColor }: BodyProps) => (
  <div className="relative px-12 sm:px-16 py-10 sm:py-12 text-center space-y-5">
    {/* Top medallion */}
    <div className="flex justify-center animate-fade-up">
      <img
        src={medallion}
        alt=""
        className="w-20 h-20 animate-shimmer"
        style={{ filter: `drop-shadow(0 2px 6px ${accentColor}40)` }}
      />
    </div>

    <p className="font-amiri text-base animate-fade-up delay-100" style={{ color: mutedColor }}>
      أهلاً وسهلاً بكم في
    </p>

    <div className="relative animate-fade-up delay-200">
      <h1
        className="font-display text-5xl sm:text-6xl leading-tight"
        style={{ color: titleColor, textShadow: `0 1px 2px ${titleColor}30` }}
      >
        حفلة الحنّة
      </h1>
      <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-2xl opacity-80">🌿</span>
      <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-2xl opacity-80 scale-x-[-1] inline-block">
        🌿
      </span>
    </div>

    <div className="space-y-2 animate-fade-up delay-300">
      <p className="font-body text-sm tracking-widest" style={{ color: accentColor }}>
        للعروس
      </p>
      <h2
        className="font-display text-4xl sm:text-5xl"
        style={{ color: brideColor, textShadow: `0 1px 2px ${brideColor}30` }}
      >
        آية الأشوح
      </h2>
    </div>

    <div className="flex justify-center py-1">
      <img src={medallion} alt="" className="w-10 h-10 opacity-90" loading="lazy" />
    </div>

    <p className="font-amiri text-sm leading-relaxed animate-fade-up delay-500" style={{ color: bodyColor }}>
      نتشارك معكم أجمل اللحظات
      <br />
      في ليلة من تراثنا الفلسطيني الأصيل
    </p>

    <div className="flex items-center justify-center gap-2">
      <span className="text-lg" style={{ color: "hsl(38 70% 45%)" }}>۞</span>
      <div
        className="h-px w-16"
        style={{ background: "linear-gradient(90deg, transparent, hsl(38 70% 45%), transparent)" }}
      />
      <span className="text-lg" style={{ color: "hsl(38 70% 45%)" }}>۞</span>
    </div>

    <div className="space-y-2 animate-fade-up delay-700">
      <div className="flex justify-center" style={{ color: accentColor }}>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 9v8h12V9H4z" />
        </svg>
      </div>
      <p className="font-body text-sm" style={{ color: mutedColor }}>السبت</p>
      <p className="font-display text-3xl" style={{ color: dateColor }}>١٣ - ٦ - ٢٠٢٦</p>
    </div>

    <div className="space-y-1 animate-fade-up delay-700">
      <div className="flex justify-center" style={{ color: accentColor }}>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="font-display text-xl" style={{ color: brideColor }}>آرهوس</p>
      <p className="font-body text-sm" style={{ color: bodyColor }}>الدنمارك</p>
    </div>

    <div className="pt-3 animate-fade-up delay-700">
      <Countdown />
    </div>

    <div className="pt-2">
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm" style={{ color: accentColor }}>♥</span>
        <p className="font-amiri text-sm" style={{ color: mutedColor }}>برفقتكم تكتمل فرحتنا</p>
      </div>
    </div>
  </div>
);

export default Poster;
