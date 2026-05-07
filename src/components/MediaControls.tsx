import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

// Local Palestinian henna song (uploaded by user)
const SONG_URL = `${import.meta.env.BASE_URL}audio/henna.mp3`;

const MediaControls = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [scrolling, setScrolling] = useState(true);
  const scrollRaf = useRef<number | null>(null);
  const lastTs = useRef<number | null>(null);
  const programmaticScroll = useRef(false);

  // ---------- Auto Scroll ----------
  useEffect(() => {
    if (!scrolling) {
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
      lastTs.current = null;
      return;
    }
    const SPEED = 30; // px per second
    const step = (ts: number) => {
      if (lastTs.current == null) lastTs.current = ts;
      const dt = (ts - lastTs.current) / 1000;
      lastTs.current = ts;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = window.scrollY + SPEED * dt;
      programmaticScroll.current = true;
      if (next >= max - 1) {
        window.scrollTo({ top: 0 });
      } else {
        window.scrollTo({ top: next });
      }
      // release flag on next tick
      setTimeout(() => (programmaticScroll.current = false), 0);
      scrollRaf.current = requestAnimationFrame(step);
    };
    scrollRaf.current = requestAnimationFrame(step);
    return () => {
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, [scrolling]);

  // Pause auto-scroll only on REAL user wheel/touch (not our programmatic scrolls)
  useEffect(() => {
    const stop = () => {
      if (programmaticScroll.current) return;
      setScrolling(false);
    };
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchmove", stop, { passive: true });
    return () => {
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchmove", stop);
    };
  }, []);

  // ---------- Audio: start on first user interaction (autoplay policy) ----------
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;

    const start = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        /* will retry on next gesture */
      }
    };

    // Try immediately (works if user already interacted with the page)
    start();

    const onGesture = () => {
      start();
    };
    window.addEventListener("click", onGesture);
    window.addEventListener("touchstart", onGesture, { passive: true });
    window.addEventListener("keydown", onGesture);
    return () => {
      window.removeEventListener("click", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("keydown", onGesture);
    };
  }, []);

  // Sync state if audio plays/pauses externally
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  const hideUI = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("capture");

  return (
    <>
      <audio ref={audioRef} src={SONG_URL} loop preload="auto" playsInline />

      <div className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-card/90 border border-gold/50 backdrop-blur-md shadow-deep",
        hideUI && "hidden"
      )}>
        <button
          onClick={toggleAudio}
          aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-full font-body text-xs transition-all",
            playing
              ? "bg-gold text-background shadow-gold"
              : "text-foreground/80 hover:text-gold"
          )}
        >
          {playing ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          <span>{playing ? "موسيقى" : "تشغيل الموسيقى"}</span>
        </button>

        <span className="w-px h-5 bg-gold/30" />

        <button
          onClick={() => setScrolling((s) => !s)}
          aria-label={scrolling ? "إيقاف التمرير" : "تشغيل التمرير"}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-full font-body text-xs transition-all",
            scrolling
              ? "bg-gold text-background shadow-gold"
              : "text-foreground/80 hover:text-gold"
          )}
        >
          {scrolling ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{scrolling ? "إيقاف التمرير" : "تمرير تلقائي"}</span>
        </button>
      </div>
    </>
  );
};

export default MediaControls;
