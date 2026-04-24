import { useState } from "react";
import tatreezStrip from "@/assets/tatreez-strip.jpg";
import parchment from "@/assets/parchment-bg.jpg";
import medallion from "@/assets/tatreez-medallion.png";
import ornament from "@/assets/gold-ornament.png";
import olive from "@/assets/olive-branches.jpg";
import henna from "@/assets/henna-pattern.jpg";
import Countdown from "./Countdown";
import { cn } from "@/lib/utils";

type Theme = "tatreez" | "ivory" | "henna";

const THEMES: { id: Theme; label: string; dot: string }[] = [
  { id: "tatreez", label: "تطريز", dot: "bg-primary" },
  { id: "ivory", label: "زيتون", dot: "bg-[hsl(42_60%_70%)]" },
  { id: "henna", label: "حنّاء", dot: "bg-[hsl(340_50%_35%)]" },
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

/* =============== TATREEZ — Heritage Parchment with embroidery strips =============== */
const TatreezPoster = () => (
  <div
    key="tatreez"
    className="relative rounded-2xl overflow-hidden shadow-deep border-2 border-[hsl(0_70%_35%)]/40 animate-fade-up"
  >
    {/* Parchment base */}
    <div className="absolute inset-0">
      <img src={parchment} alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(42_60%_92%)]/30 via-transparent to-[hsl(42_55%_88%)]/40" />

    {/* Vertical Tatreez Strips - Left & Right */}
    <div className="absolute top-0 bottom-0 left-2 w-7 sm:w-9 overflow-hidden opacity-95">
      <img
        src={tatreezStrip}
        alt=""
        className="h-full w-full object-cover"
        style={{ objectPosition: "center" }}
        aria-hidden="true"
      />
    </div>
    <div className="absolute top-0 bottom-0 right-2 w-7 sm:w-9 overflow-hidden opacity-95">
      <img
        src={tatreezStrip}
        alt=""
        className="h-full w-full object-cover"
        style={{ objectPosition: "center", transform: "scaleX(-1)" }}
        aria-hidden="true"
      />
    </div>

    {/* Content */}
    <div className="relative px-12 sm:px-16 py-10 sm:py-12 text-center space-y-5">
      {/* Top medallion */}
      <div className="flex justify-center animate-fade-up">
        <img
          src={medallion}
          alt=""
          className="w-20 h-20 animate-shimmer"
          style={{ filter: "drop-shadow(0 2px 6px hsl(0 70% 30% / 0.3))" }}
        />
      </div>

      {/* Welcome */}
      <p className="font-amiri text-[hsl(0_0%_25%)] text-base animate-fade-up delay-100">
        أهلاً وسهلاً بكم في
      </p>

      {/* Main Title */}
      <div className="relative animate-fade-up delay-200">
        <h1 className="font-display text-5xl sm:text-6xl text-[hsl(0_75%_32%)] leading-tight"
            style={{ textShadow: "0 1px 2px hsl(0 60% 20% / 0.15)" }}>
          حفلة الحنّة
        </h1>
        {/* Olive branches flanking the title */}
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-2xl text-[hsl(80_30%_40%)] opacity-80">
          🌿
        </span>
        <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-2xl text-[hsl(80_30%_40%)] opacity-80 scale-x-[-1] inline-block">
          🌿
        </span>
      </div>

      {/* Bride */}
      <div className="space-y-2 animate-fade-up delay-300">
        <p className="font-body text-sm text-[hsl(0_60%_30%)] tracking-widest">للعروس</p>
        <h2 className="font-display text-4xl sm:text-5xl text-[hsl(80_35%_28%)]"
            style={{ textShadow: "0 1px 2px hsl(80 30% 20% / 0.2)" }}>
          آية الأشوح
        </h2>
      </div>

      {/* Mini medallion divider */}
      <div className="flex justify-center py-1">
        <img src={medallion} alt="" className="w-10 h-10 opacity-90" loading="lazy" />
      </div>

      {/* Description */}
      <p className="font-amiri text-[hsl(0_0%_30%)] text-sm leading-relaxed animate-fade-up delay-500">
        نتشارك معكم أجمل اللحظات
        <br />
        في ليلة من تراثنا الفلسطيني الأصيل
      </p>

      {/* Ornamental separator */}
      <div className="flex items-center justify-center gap-2">
        <span className="text-[hsl(38_70%_45%)] text-lg">۞</span>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-[hsl(38_70%_45%)] to-transparent" />
        <span className="text-[hsl(38_70%_45%)] text-lg">۞</span>
      </div>

      {/* Date */}
      <div className="space-y-2 animate-fade-up delay-700">
        <div className="flex justify-center text-[hsl(0_70%_35%)]">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 9v8h12V9H4z" />
          </svg>
        </div>
        <p className="font-body text-sm text-[hsl(0_0%_25%)]">السبت</p>
        <p className="font-display text-3xl text-[hsl(0_75%_35%)]">١٣ - ٦ - ٢٠٢٦</p>
      </div>

      {/* Place */}
      <div className="space-y-1 animate-fade-up delay-700">
        <div className="flex justify-center text-[hsl(0_70%_35%)]">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="font-display text-xl text-[hsl(80_35%_28%)]">آرهوس</p>
        <p className="font-body text-sm text-[hsl(0_0%_30%)]">الدنمارك</p>
      </div>

      {/* Countdown */}
      <div className="pt-3 animate-fade-up delay-700">
        <Countdown />
      </div>

      {/* Footer line */}
      <div className="pt-2">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[hsl(0_75%_35%)] text-sm">♥</span>
          <p className="font-amiri text-sm text-[hsl(0_0%_25%)]">برفقتكم تكتمل فرحتنا</p>
        </div>
      </div>
    </div>
  </div>
);

/* =============== IVORY (Olive) =============== */
const IvoryPoster = () => (
  <div
    key="ivory"
    className="relative rounded-2xl overflow-hidden shadow-deep border-2 border-[hsl(38_60%_50%)]/70 animate-fade-up"
  >
    <div className="absolute inset-0 opacity-90">
      <img src={olive} alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(42_50%_94%)]/95 via-[hsl(42_45%_90%)]/85 to-[hsl(42_50%_94%)]/95" />

    <PosterContent
      titleClass="text-[hsl(38_70%_35%)]"
      brideClass="text-[hsl(0_0%_15%)]"
      labelClass="text-[hsl(38_60%_40%)]"
      mutedClass="text-[hsl(0_0%_30%)]"
      dateClass="text-[hsl(38_70%_35%)]"
      bismillahClass="text-[hsl(38_70%_40%)]"
      subBorder="bg-[hsl(38_60%_50%)]/60"
      cornerClass="border-[hsl(38_70%_45%)]/70"
    />
  </div>
);

/* =============== HENNA =============== */
const HennaPoster = () => (
  <div
    key="henna"
    className="relative rounded-2xl overflow-hidden shadow-deep border-2 border-[hsl(42_70%_55%)]/60 animate-fade-up"
  >
    <div className="absolute inset-0 opacity-90">
      <img src={henna} alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(340_40%_10%)]/85 via-[hsl(340_35%_8%)]/70 to-[hsl(340_40%_10%)]/90" />

    <PosterContent
      titleClass="gradient-gold-text"
      brideClass="text-[hsl(42_75%_85%)]"
      labelClass="text-[hsl(42_70%_70%)]"
      mutedClass="text-[hsl(42_30%_75%)]"
      dateClass="text-[hsl(42_75%_70%)]"
      bismillahClass="text-[hsl(42_75%_75%)]"
      subBorder="bg-[hsl(42_70%_55%)]/60"
      cornerClass="border-[hsl(42_70%_55%)]/70"
    />
  </div>
);

/* Shared content for ivory + henna themes */
interface ContentProps {
  titleClass: string;
  brideClass: string;
  labelClass: string;
  mutedClass: string;
  dateClass: string;
  bismillahClass: string;
  subBorder: string;
  cornerClass: string;
}
const PosterContent = ({
  titleClass,
  brideClass,
  labelClass,
  mutedClass,
  dateClass,
  bismillahClass,
  subBorder,
  cornerClass,
}: ContentProps) => (
  <>
    <div className="relative px-6 sm:px-10 py-10 sm:py-12 text-center space-y-6">
      <div className="flex justify-center animate-fade-up">
        <img
          src={ornament}
          alt=""
          className="w-24 h-24 opacity-90 animate-shimmer"
          style={{ filter: "drop-shadow(0 2px 8px hsl(42 80% 50% / 0.4))" }}
        />
      </div>

      <p className={cn("font-amiri text-lg animate-fade-up delay-100", bismillahClass)}>﷽</p>

      <div className="space-y-1 animate-fade-up delay-200">
        <p className={cn("font-body text-xs tracking-[0.4em] uppercase", labelClass)}>
          Palestinian Henna
        </p>
        <div className={cn("h-px w-32 mx-auto", subBorder)} />
        <p className={cn("font-body text-sm tracking-widest", mutedClass)}>يسعدنا دعوتكم إلى</p>
      </div>

      <h1 className={cn("font-display text-5xl sm:text-6xl leading-tight animate-fade-up delay-300", titleClass)}>
        حفلة حنّاء
      </h1>

      <div className="space-y-2 animate-fade-up delay-500">
        <div className="flex items-center justify-center gap-3">
          <span className={cn("h-px w-8", subBorder)} />
          <span className={cn("font-body text-xs tracking-[0.3em]", labelClass)}>العروس</span>
          <span className={cn("h-px w-8", subBorder)} />
        </div>
        <h2 className={cn("font-display text-4xl sm:text-5xl", brideClass)}>آية الأشوح</h2>
      </div>

      <div className="flex items-center justify-center gap-2 py-2">
        <span className={cn("text-2xl", dateClass)}>۞</span>
        <div className={cn("h-px w-16", subBorder)} />
        <span className="text-xl animate-float">🌿</span>
        <div className={cn("h-px w-16", subBorder)} />
        <span className={cn("text-2xl", dateClass)}>۞</span>
      </div>

      <div className="space-y-4 animate-fade-up delay-700">
        <div>
          <p className={cn("font-body text-xs tracking-widest mb-1", mutedClass)}>التاريخ</p>
          <p className={cn("font-display text-2xl", dateClass)}>١٣ يونيو ٢٠٢٦</p>
          <p className={cn("font-body text-sm mt-1 opacity-80", brideClass)}>
            Saturday · 13 / 06 / 2026
          </p>
        </div>
        <div className={cn("h-px w-24 mx-auto", subBorder)} />
        <div>
          <p className={cn("font-body text-xs tracking-widest mb-1", mutedClass)}>المكان</p>
          <p className={cn("font-display text-xl", dateClass)}>آرهوس · الدنمارك</p>
          <p className={cn("font-body text-sm mt-1 opacity-80", brideClass)}>Aarhus, Denmark</p>
        </div>
      </div>

      <div className="pt-4 animate-fade-up delay-700">
        <p className={cn("font-body text-xs tracking-widest mb-3", mutedClass)}>يفصلنا عن الفرح</p>
        <Countdown />
      </div>

      <div className="flex justify-center pt-2">
        <img src={ornament} alt="" className="w-20 h-20 opacity-80 rotate-180" loading="lazy" />
      </div>
    </div>

    <div className={cn("absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg", cornerClass)} />
    <div className={cn("absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg", cornerClass)} />
    <div className={cn("absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 rounded-br-lg", cornerClass)} />
    <div className={cn("absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg", cornerClass)} />
  </>
);

export default Poster;
