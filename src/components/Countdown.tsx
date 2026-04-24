import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-13T18:00:00").getTime();

const calc = () => {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
};

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-lg bg-card border border-gold/40 flex items-center justify-center ornament-frame">
      <span className="font-display text-3xl sm:text-4xl gradient-gold-text tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="mt-2 text-xs text-muted-foreground tracking-widest font-body">
      {label}
    </span>
  </div>
);

const Countdown = () => {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      <Cell value={t.d} label="يوم" />
      <Cell value={t.h} label="ساعة" />
      <Cell value={t.m} label="دقيقة" />
      <Cell value={t.s} label="ثانية" />
    </div>
  );
};

export default Countdown;
