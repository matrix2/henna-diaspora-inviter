import { useState } from "react";
import tatreezStrip from "@/assets/tatreez-strip.jpg";
import parchment from "@/assets/parchment-bg.jpg";
import medallion from "@/assets/tatreez-medallion.png";
import heritageBg from "@/assets/heritage-bg.png";
import hennaBg from "@/assets/henna-palestine-bg.jpg";
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
      {theme === "ivory" && <IvoryPoster />}
      {theme === "henna" && <HennaPoster />}
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
      showOliveLeaves
      showTopMedallion
    />
  </div>
);

/* =============== IVORY — heritage bg, no olive leaves, date under decorative line =============== */
const IvoryPoster = () => (
  <div
    key="ivory"
    className="relative rounded-2xl overflow-hidden shadow-deep border-2 animate-fade-up"
    style={{ borderColor: "hsl(80 35% 35%)" + "70" }}
  >
    <div className="absolute inset-0">
      <img src={heritageBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(42_60%_92%)]/20 via-[hsl(42_55%_90%)]/30 to-[hsl(42_60%_92%)]/25" />

    <PosterBody
      titleColor="hsl(80 40% 28%)"
      brideColor="hsl(80 35% 25%)"
      accentColor="hsl(80 35% 35%)"
      dateColor="hsl(80 40% 28%)"
      mutedColor="hsl(0 0% 25%)"
      bodyColor="hsl(0 0% 28%)"
      showOliveLeaves={false}
      showTopMedallion={false}
    />
  </div>
);

/* =============== HENNA — completely new Palestinian heritage design =============== */
const HennaPoster = () => {
  const burgundy = "hsl(345 70% 35%)";
  const gold = "hsl(42 75% 60%)";
  const goldDeep = "hsl(38 65% 45%)";
  const cream = "hsl(42 65% 88%)";
  const creamSoft = "hsl(42 50% 78%)";

  return (
    <div
      key="henna"
      className="relative rounded-2xl overflow-hidden shadow-deep border-2 animate-fade-up"
      style={{ borderColor: gold + "70" }}
    >
      {/* Henna Palestinian background */}
      <div className="absolute inset-0">
        <img src={hennaBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(345_60%_8%)]/40 via-[hsl(345_50%_10%)]/30 to-[hsl(345_60%_8%)]/50" />

      {/* Top gold ornamental frame */}
      <div className="relative px-10 sm:px-14 py-10 sm:py-12 text-center space-y-4">
        {/* Star of Palestine ornament */}
        <div className="flex justify-center animate-fade-up">
          <div className="relative">
            <div
              className="w-16 h-16 flex items-center justify-center text-4xl animate-shimmer"
              style={{ color: gold, filter: `drop-shadow(0 0 8px ${gold}80)` }}
            >
              ✦
            </div>
          </div>
        </div>

        {/* Decorative arabesque divider */}
        <div className="flex items-center justify-center gap-2 animate-fade-up delay-100">
          <span style={{ color: gold }}>۞</span>
          <div
            className="h-px w-20"
            style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }}
          />
          <span style={{ color: gold }}>۞</span>
        </div>

        <p
          className="font-amiri text-base animate-fade-up delay-100 italic"
          style={{ color: creamSoft }}
        >
          من القدس إلى آرهوس
        </p>
        <p className="font-body text-[11px] tracking-wide -mt-2" style={{ color: creamSoft, opacity: 0.8 }} dir="ltr">
          Fra Jerusalem til Aarhus
        </p>

        {/* Main title */}
        <div className="animate-fade-up delay-200">
          <h1
            className="font-display text-5xl sm:text-6xl leading-tight"
            style={{
              color: gold,
              textShadow: `0 0 20px ${gold}60, 0 2px 4px hsl(345 80% 10%)`,
            }}
          >
            ليلة الحنّاء
          </h1>
          <p className="font-body text-xs tracking-[0.3em] mt-1" style={{ color: creamSoft }} dir="ltr">
            HENNA-AFTENEN
          </p>
        </div>

        {/* Bride section in ornate gold frame */}
        <div
          className="relative mx-auto max-w-[80%] py-4 px-5 my-3 animate-fade-up delay-300"
          style={{
            border: `1px solid ${gold}80`,
            borderRadius: "0.75rem",
            background: `linear-gradient(180deg, hsl(345 60% 12% / 0.4), hsl(345 50% 18% / 0.3))`,
            boxShadow: `inset 0 0 20px ${gold}20`,
          }}
        >
          {/* corner ornaments */}
          <span className="absolute -top-2 -right-2 text-sm" style={{ color: gold }}>✦</span>
          <span className="absolute -top-2 -left-2 text-sm" style={{ color: gold }}>✦</span>
          <span className="absolute -bottom-2 -right-2 text-sm" style={{ color: gold }}>✦</span>
          <span className="absolute -bottom-2 -left-2 text-sm" style={{ color: gold }}>✦</span>

          <p
            className="font-body text-xs tracking-[0.4em] mb-2"
            style={{ color: gold }}
          >
            للعروس الفلسطينية
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl"
            style={{
              color: cream,
              textShadow: `0 0 15px ${gold}50`,
            }}
          >
            آية الأشوح
          </h2>
        </div>

        {/* Poetic line */}
        <p
          className="font-amiri text-sm leading-relaxed animate-fade-up delay-500"
          style={{ color: creamSoft }}
        >
          يا ليلة الحنّا يا ليلة العرس
          <br />
          فرحة وطن في غربة الناس
        </p>

        {/* Decorative divider with star */}
        <div className="flex items-center justify-center gap-3 py-1">
          <div
            className="h-px w-12"
            style={{ background: `linear-gradient(90deg, transparent, ${gold})` }}
          />
          <span className="text-lg" style={{ color: gold }}>✺</span>
          <div
            className="h-px w-12"
            style={{ background: `linear-gradient(90deg, ${gold}, transparent)` }}
          />
        </div>

        {/* Date */}
        <div className="space-y-1 animate-fade-up delay-700">
          <div className="flex justify-center" style={{ color: gold }}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 9v8h12V9H4z" />
            </svg>
          </div>
          <p className="font-body text-sm" style={{ color: creamSoft }}>السبت</p>
          <p
            className="font-display text-3xl"
            style={{ color: gold, textShadow: `0 0 12px ${gold}40` }}
          >
            ١٣ - ٦ - ٢٠٢٦
          </p>
        </div>

        {/* Location */}
        <div className="space-y-1 animate-fade-up delay-700">
          <div className="flex justify-center" style={{ color: gold }}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="font-display text-xl" style={{ color: cream }}>آرهوس</p>
          <p className="font-body text-sm" style={{ color: creamSoft }}>الدنمارك</p>
        </div>

        <div className="pt-3 animate-fade-up delay-700">
          <Countdown />
        </div>

        <div className="pt-3 flex items-center justify-center gap-2">
          <span style={{ color: gold }}>♥</span>
          <p className="font-amiri text-sm" style={{ color: creamSoft }}>
            بحضوركم تكتمل فرحتنا
          </p>
          <span style={{ color: gold }}>♥</span>
        </div>
      </div>
    </div>
  );
};

/* =============== Shared body — used by tatreez & ivory =============== */
interface BodyProps {
  titleColor: string;
  brideColor: string;
  accentColor: string;
  dateColor: string;
  mutedColor: string;
  bodyColor: string;
  showOliveLeaves?: boolean;
  showTopMedallion?: boolean;
}
const PosterBody = ({
  titleColor,
  brideColor,
  accentColor,
  dateColor,
  mutedColor,
  bodyColor,
  showOliveLeaves = true,
  showTopMedallion = true,
}: BodyProps) => (
  <div className="relative px-12 sm:px-16 py-10 sm:py-12 text-center space-y-5">
    {/* Top medallion (hidden for ivory — already on the heritage bg) */}
    {showTopMedallion && (
      <div className="flex justify-center animate-fade-up">
        <img
          src={medallion}
          alt=""
          className="w-20 h-20 animate-shimmer"
          style={{ filter: `drop-shadow(0 2px 6px ${accentColor}40)` }}
        />
      </div>
    )}

    {/* For ivory: spacer to align under the embroidered medallion in the bg */}
    {!showTopMedallion && <div className="h-16 sm:h-20" />}

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
      {showOliveLeaves && (
        <>
          <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-2xl opacity-80">🌿</span>
          <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-2xl opacity-80 scale-x-[-1] inline-block">
            🌿
          </span>
        </>
      )}
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

    {/* Decorative divider */}
    <div className="flex items-center justify-center gap-2">
      <span className="text-lg" style={{ color: "hsl(38 70% 45%)" }}>۞</span>
      <div
        className="h-px w-16"
        style={{ background: "linear-gradient(90deg, transparent, hsl(38 70% 45%), transparent)" }}
      />
      <span className="text-lg" style={{ color: "hsl(38 70% 45%)" }}>۞</span>
    </div>

    {/* Date — under the decorative line */}
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
