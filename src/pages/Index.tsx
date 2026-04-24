import Keffiyeh from "@/components/Keffiyeh";
import Poster from "@/components/Poster";
import RsvpForm from "@/components/RsvpForm";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden" dir="rtl">
      {/* Keffiyeh side strips */}
      <Keffiyeh side="left" />
      <Keffiyeh side="right" />

      {/* Radial gold ambient */}
      <div
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{ background: "var(--gradient-radial-gold)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-14 sm:px-24 md:px-32 py-10 sm:py-16">
        {/* Hero / Poster */}
        <section className="mb-16">
          <Poster />
        </section>

        {/* RSVP */}
        <section className="max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade-up">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-gold text-2xl">۞</span>
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="font-display text-3xl gradient-gold-text mt-4 mb-2">
              تأكيد الحضور
            </h2>
            <p className="font-body text-sm text-muted-foreground">
              فرحتنا لا تكتمل إلا بوجودكم
            </p>
          </div>

          <div className="relative rounded-2xl border border-gold/40 bg-card/80 backdrop-blur-sm p-6 sm:p-8 ornament-frame">
            <RsvpForm />
          </div>

          {/* Footer signature */}
          <div className="text-center mt-12 mb-4 space-y-2">
            <div className="divider-gold w-40 mx-auto" />
            <p className="font-amiri text-gold/80 text-sm leading-loose">
              «وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً»
            </p>
            <p className="font-body text-xs text-muted-foreground tracking-widest">
              مع أطيب التحيات · عائلة الأشوح
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
