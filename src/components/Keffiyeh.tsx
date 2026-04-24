import keffiyeh from "@/assets/keffiyeh-side.jpg";

interface KeffiyehProps {
  side: "left" | "right";
}

const Keffiyeh = ({ side }: KeffiyehProps) => {
  return (
    <div
      className={`pointer-events-none absolute top-0 bottom-0 ${
        side === "left" ? "left-0" : "right-0"
      } w-12 sm:w-20 md:w-28 z-20`}
      aria-hidden="true"
    >
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={keffiyeh}
          alt=""
          className="h-full w-full object-cover"
          style={{
            maskImage:
              side === "left"
                ? "linear-gradient(to right, black 60%, transparent)"
                : "linear-gradient(to left, black 60%, transparent)",
            WebkitMaskImage:
              side === "left"
                ? "linear-gradient(to right, black 60%, transparent)"
                : "linear-gradient(to left, black 60%, transparent)",
          }}
        />
        {/* Tassel/fringe effect at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-background opacity-80"
        />
      </div>
    </div>
  );
};

export default Keffiyeh;
