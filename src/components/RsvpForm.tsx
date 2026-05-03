import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "970000000000"; // TODO: استبدلي بالرقم الحقيقي

const RsvpForm = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);

  const send = () => {
    if (!name.trim()) {
      toast.error("الرجاء كتابة الاسم · Skriv venligst dit navn");
      return;
    }
    if (!attending) {
      toast.error("الرجاء اختيار الحضور · Vælg venligst, om du kommer");
      return;
    }
    const status =
      attending === "yes"
        ? "✅ سأحضر بإذن الله · Jeg kommer"
        : "❌ اعتذر عن الحضور · Jeg kan desværre ikke deltage";
    const message = `🌿 *تأكيد حضور حفلة حنّاء آية · RSVP – Ayas hennaaften* 🌿
━━━━━━━━━━━━━━
👤 الاسم / Navn: ${name}
👥 عدد الأشخاص / Antal personer: ${guests}
${status}
📅 التاريخ / Dato: 13 / 6 / 2026
📍 المكان / Sted: Aarhus, Danmark
━━━━━━━━━━━━━━`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    toast.success("جاري فتح واتساب · Åbner WhatsApp ✨");
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gold font-body flex items-center justify-between">
          <span>الاسم الكريم</span>
          <span className="text-[10px] tracking-wider text-gold/70" dir="ltr">DIT NAVN</span>
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="اكتب اسمك هنا · Skriv dit navn"
          className="bg-input border-gold/40 text-foreground placeholder:text-muted-foreground/60 text-right h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests" className="text-gold font-body flex items-center justify-between">
          <span>عدد الأشخاص</span>
          <span className="text-[10px] tracking-wider text-gold/70" dir="ltr">ANTAL PERSONER</span>
        </Label>
        <Input
          id="guests"
          type="number"
          min="1"
          max="20"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="bg-input border-gold/40 text-foreground text-right h-12"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-gold font-body flex items-center justify-between">
          <span>هل ستشرفنا بالحضور؟</span>
          <span className="text-[10px] tracking-wider text-gold/70" dir="ltr">KOMMER DU?</span>
        </Label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setAttending("yes")}
            className={`h-14 rounded-md border-2 font-body transition-all flex flex-col items-center justify-center leading-tight ${
              attending === "yes"
                ? "bg-gold text-background border-gold shadow-gold"
                : "border-gold/40 text-foreground hover:border-gold"
            }`}
          >
            <span>نعم، سأحضر 🌹</span>
            <span className="text-[10px] opacity-80" dir="ltr">Ja, jeg kommer</span>
          </button>
          <button
            type="button"
            onClick={() => setAttending("no")}
            className={`h-14 rounded-md border-2 font-body transition-all flex flex-col items-center justify-center leading-tight ${
              attending === "no"
                ? "bg-primary text-primary-foreground border-primary"
                : "border-gold/40 text-foreground hover:border-primary/60"
            }`}
          >
            <span>للأسف لا أستطيع</span>
            <span className="text-[10px] opacity-80" dir="ltr">Desværre ikke</span>
          </button>
        </div>
      </div>

      <Button
        onClick={send}
        className="w-full h-16 text-base font-body gradient-gold-bg text-background hover:opacity-90 shadow-gold animate-glow flex flex-col items-center justify-center leading-tight"
      >
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          إرسال التأكيد عبر واتساب
        </span>
        <span className="text-[11px] opacity-90" dir="ltr">Send via WhatsApp</span>
      </Button>
    </div>
  );
};

export default RsvpForm;
