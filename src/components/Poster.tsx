import tatreez from "@/assets/tatreez-pattern.jpg";
import ornament from "@/assets/gold-ornament.png";
import Countdown from "./Countdown";

const Poster = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Outer gold glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-primary/10 to-gold/20 blur-2xl rounded-[2rem]" />

      {/* Poster Card */}
      <div className="relative rounded-2xl overflow-hidden shadow-deep border-2 border-gold/60 bg-background">
        {/* Tatreez background layer */}
        <div className="absolute inset-0 opacity-25">
          <img
            src={tatreez}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />

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
          <p className="font-amiri text-gold/90 text-lg animate-fade-up delay-100">
            ﷽
          </p>

          {/* Subtitle */}
          <div className="space-y-1 animate-fade-up delay-200">
            <p className="font-body text-xs tracking-[0.4em] text-gold/80 uppercase">
              Palestinian Henna
            </p>
            <div className="divider-gold w-32 mx-auto" />
            <p className="font-body text-sm tracking-widest text-muted-foreground">
              يسعدنا دعوتكم إلى
            </p>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl sm:text-6xl gradient-gold-text leading-tight animate-fade-up delay-300">
            حفلة حنّاء
          </h1>

          {/* Bride name */}
          <div className="space-y-2 animate-fade-up delay-500">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <span className="font-body text-xs text-gold/80 tracking-[0.3em]">
                العروس
              </span>
              <span className="h-px w-8 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground">
              آية الأشوح
            </h2>
          </div>

          {/* Decorative middle */}
          <div className="flex items-center justify-center gap-2 py-2">
            <span className="text-gold text-2xl">۞</span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="text-primary text-xl animate-float">🌿</span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="text-gold text-2xl">۞</span>
          </div>

          {/* Date & Place */}
          <div className="space-y-4 animate-fade-up delay-700">
            <div>
              <p className="font-body text-xs text-muted-foreground tracking-widest mb-1">
                التاريخ
              </p>
              <p className="font-display text-2xl text-gold">
                ١٣ يونيو ٢٠٢٦
              </p>
              <p className="font-body text-sm text-foreground/80 mt-1">
                Saturday · 13 / 06 / 2026
              </p>
            </div>

            <div className="divider-gold w-24 mx-auto" />

            <div>
              <p className="font-body text-xs text-muted-foreground tracking-widest mb-1">
                المكان
              </p>
              <p className="font-display text-xl text-gold">
                آرهوس · الدنمارك
              </p>
              <p className="font-body text-sm text-foreground/80 mt-1">
                Aarhus, Denmark
              </p>
            </div>
          </div>

          {/* Countdown */}
          <div className="pt-4 animate-fade-up delay-700">
            <p className="font-body text-xs text-muted-foreground tracking-widest mb-3">
              يفصلنا عن الفرح
            </p>
            <Countdown />
          </div>

          {/* Bottom ornament */}
          <div className="flex justify-center pt-2">
            <img
              src={ornament}
              alt=""
              className="w-20 h-20 opacity-80 rotate-180"
              loading="lazy"
            />
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold/60 rounded-tr-lg" />
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-gold/60 rounded-tl-lg" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-gold/60 rounded-br-lg" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold/60 rounded-bl-lg" />
      </div>
    </div>
  );
};

export default Poster;
