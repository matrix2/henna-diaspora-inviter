import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX, ArrowDownUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Palestinian henna / wedding song (royalty-free Arabic oud instrumental fallback).
// Using a public CDN sample so it works without external accounts.
const SONG_URL =
  "https://cdn.pixabay.com/download/audio/2022/10/30/audio_946b6e6b3a.mp3?filename=arabic-oud-traditional-126850.mp3";

const MediaControls = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [scrolling, setScrolling] = useState(true);
  const scrollRaf = useRef<number | null>(null);
  const lastTs = useRef<number | null>(null);

  // ---------- Auto Scroll ----------
  useEffect(() => {
    if (!scrolling) {
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
      lastTs.current = null;
      return;
    }
    const SPEED = 25; // px per second
    const step = (ts: number) => {
      if (lastTs.current == null) lastTs.current = ts;
      const dt = (ts - lastTs.current) / 1000;
      lastTs.current = ts;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = window.scrollY + SPEED * dt;
      if (next >= max - 1) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        lastTs.current = null;
      } else {
        window.scrollTo({ top: next });
      }
      scrollRaf.current = requestAnimationFrame(step);
    };
    scrollRaf.current = requestAnimationFrame(step);
    return () => {
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, [scrolling]);

  // Pause auto-scroll when user interacts (wheel/touch)
  useEffect(() => {
    const stop = () => setScrolling(false);
    window.addEventListener("wheel", stop, { passive: true, once: true });
    window.addEventListener("touchstart", stop, { passive: true, once: true });
    return () => {
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
    };
  }, []);

  // ---------- Audio autoplay ----------
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;
    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // autoplay blocked — wait for first user interaction
        const resume = async () => {
          try {
            await audio.play();
            setPlaying(true);
          } catch {}
          window.removeEventListener("click", resume);
          window.removeEventListener("touchstart", resume);
        };
        window.addEventListener("click", resume, { once: true });
        window.addEventListener("touchstart", resume, { once: true });
      }
    };
    tryPlay();
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={SONG_URL} loop preload="auto" />

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-card/90 border border-gold/50 backdrop-blur-md shadow-deep">
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
          <span>{playing ? "موسيقى" : "صامت"}</span>
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
