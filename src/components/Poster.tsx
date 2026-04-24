import { useState } from "react";
import tatreez from "@/assets/tatreez-pattern.jpg";
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

  const config = {
    tatreez: {
      bg: tatreez,
      overlay: "bg-gradient-to-b from-background/95 via-background/80 to-background/95",
      bgOpacity: "opacity-25",
      titleClass: "gradient-gold-text",
      brideClass: "text-foreground",
      labelClass: "text-gold/80",
      mutedClass: "text-muted-foreground",
      dateClass: "text-gold",
      borderClass: "border-gold/60",
      cornerClass: "border-gold/60",
      bismillahClass: "text-gold/90",
      subBorder: "bg-gold/60",
    },
    ivory: {
      bg: olive,
      overlay: "bg-gradient-to-b from-[hsl(42_50%_94%)]/95 via-[hsl(42_45%_90%)]/85 to-[hsl(42_50%_94%)]/95",
      bgOpacity: "opacity-90",
      titleClass: "text-[hsl(38_70%_35%)]",
      brideClass: "text-[hsl(0_0%_15%)]",
      labelClass: "text-[hsl(38_60%_40%)]",
      mutedClass: "text-[hsl(0_0%_30%)]",
      dateClass: "text-[hsl(38_70%_35%)]",
      borderClass: "border-[hsl(38_60%_50%)]/70",
      cornerClass: "border-[hsl(38_70%_45%)]/70",
      bismillahClass: "text-[hsl(38_70%_40%)]",
      subBorder: "bg-[hsl(38_60%_50%)]/60",
    },
    henna: {
      bg: henna,
      overlay: "bg-gradient-to-b from-[hsl(340_40%_10%)]/85 via-[hsl(340_35%_8%)]/70 to-[hsl(340_40%_10%)]/90",
      bgOpacity: "opacity-90",
      titleClass: "gradient-gold-text",
      brideClass: "text-[hsl(42_75%_85%)]",
      labelClass: "text-[hsl(42_70%_70%)]",
      mutedClass: "text-[hsl(42_30%_75%)]",
      dateClass: "text-[hsl(42_75%_70%)]",
      borderClass: "border-[hsl(42_70%_55%)]/60",
      cornerClass: "border-[hsl(42_70%_55%)]/70",
      bismillahClass: "text-[hsl(42_75%_75%)]",
      subBorder: "bg-[hsl(42_70%_55%)]/60",
    },
  }[theme];

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

      {/* Outer gold glow */}
      <div className="absolute -inset-4 top-16 bg-gradient-to-br from-gold/20 via-primary/10 to-gold/20 blur-2xl rounded-[2rem]" />

      {/* Poster Card */}
      <div
        key={theme}
        className={cn(
          "relative rounded-2xl overflow-hidden shadow-deep border-2 bg-background animate-fade-up",
          config.borderClass
        )}
      >
        {/* Background pattern */}
        <div className={cn("absolute inset-0", config.bgOpacity)}>
          <img src={config.bg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        {/* Overlay */}
        <div className={cn("absolute inset-0", config.overlay)} />

        {/* Content */}
        <div className="relative px-6 sm:px-10 py-10 sm:py-12 text-center space-y-6">
          {/* Top ornament */}
          <div className="flex justify-center animate-fade-up">
            <img
              src={ornament}
              alt=""
              className="w-24 h-24 opacity-90 animate-shimmer"
              style={{ filter: "drop-shadow(0 2px 8px hsl(42 80% 50% / 0.4))" }}
            />
          </div>

          {/* Bismillah */}
          <p className={cn("font-amiri text-lg animate-fade-up delay-100", config.bismillahClass)}>
            ﷽
          </p>

          {/* Subtitle */}
          <div className="space-y-1 animate-fade-up delay-200">
            <p className={cn("font-body text-xs tracking-[0.4em] uppercase", config.labelClass)}>
              Palestinian Henna
            </p>
            <div className={cn("h-px w-32 mx-auto", config.subBorder)} />
            <p className={cn("font-body text-sm tracking-widest", config.mutedClass)}>
              يسعدنا دعوتكم إلى
            </p>
          </div>

          {/* Main Title */}
          <h1 className={cn("font-display text-5xl sm:text-6xl leading-tight animate-fade-up delay-300", config.titleClass)}>
            حفلة حنّاء
          </h1>

          {/* Bride name */}
          <div className="space-y-2 animate-fade-up delay-500">
            <div className="flex items-center justify-center gap-3">
              <span className={cn("h-px w-8", config.subBorder)} />
              <span className={cn("font-body text-xs tracking-[0.3em]", config.labelClass)}>
                العروس
              </span>
              <span className={cn("h-px w-8", config.subBorder)} />
            </div>
            <h2 className={cn("font-display text-4xl sm:text-5xl", config.brideClass)}>
              آية الأشوح
            </h2>
          </div>

          {/* Decorative middle */}
          <div className="flex items-center justify-center gap-2 py-2">
            <span className={cn("text-2xl", config.dateClass)}>۞</span>
            <div className={cn("h-px w-16", config.subBorder)} />
            <span className="text-xl animate-float">🌿</span>
            <div className={cn("h-px w-16", config.subBorder)} />
            <span className={cn("text-2xl", config.dateClass)}>۞</span>
          </div>

          {/* Date & Place */}
          <div className="space-y-4 animate-fade-up delay-700">
            <div>
              <p className={cn("font-body text-xs tracking-widest mb-1", config.mutedClass)}>التاريخ</p>
              <p className={cn("font-display text-2xl", config.dateClass)}>١٣ يونيو ٢٠٢٦</p>
              <p className={cn("font-body text-sm mt-1", config.brideClass, "opacity-80")}>
                Saturday · 13 / 06 / 2026
              </p>
            </div>

            <div className={cn("h-px w-24 mx-auto", config.subBorder)} />

            <div>
              <p className={cn("font-body text-xs tracking-widest mb-1", config.mutedClass)}>المكان</p>
              <p className={cn("font-display text-xl", config.dateClass)}>آرهوس · الدنمارك</p>
              <p className={cn("font-body text-sm mt-1", config.brideClass, "opacity-80")}>
                Aarhus, Denmark
              </p>
            </div>
          </div>

          {/* Countdown */}
          <div className="pt-4 animate-fade-up delay-700">
            <p className={cn("font-body text-xs tracking-widest mb-3", config.mutedClass)}>
              يفصلنا عن الفرح
            </p>
            <Countdown />
          </div>

          {/* Bottom ornament */}
          <div className="flex justify-center pt-2">
            <img src={ornament} alt="" className="w-20 h-20 opacity-80 rotate-180" loading="lazy" />
          </div>
        </div>

        {/* Corner accents */}
        <div className={cn("absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg", config.cornerClass)} />
        <div className={cn("absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg", config.cornerClass)} />
        <div className={cn("absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 rounded-br-lg", config.cornerClass)} />
        <div className={cn("absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg", config.cornerClass)} />
      </div>
    </div>
  );
};

export default Poster;
