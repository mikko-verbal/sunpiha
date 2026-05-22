"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  Phone,
  ArrowRight,
  ArrowLeft,
  Home,
  Building2,
  Snowflake,
  Sparkles,
  AlertTriangle,
  Hammer,
  Leaf,
  Droplets,
  Clock,
  ShieldCheck,
  Receipt,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/utils";

const customerTypes = [
  { id: "omakoti", label: "Omakotitalo / loma-asunto", icon: Home },
  { id: "taloyhtio", label: "Taloyhtiö / liikekiinteistö", icon: Building2 },
  { id: "kaupunki", label: "Kaupunki / kunta", icon: Building2 },
];

const serviceOptions = [
  { id: "kiinteistonhuolto", label: "Kiinteistönhuolto", icon: Hammer },
  { id: "nurmikko", label: "Nurmikon kunnossapito", icon: Leaf },
  { id: "talvikunnossapito", label: "Lumi- & talvityöt", icon: Snowflake },
  { id: "pesupalvelut", label: "Pesupalvelut", icon: Droplets },
  { id: "viherrakentaminen", label: "Piharemontti & rakentaminen", icon: Sparkles },
  { id: "muu", label: "Muu / en osaa sanoa", icon: Hammer },
];

const urgencyOptions = [
  {
    id: "kiire",
    label: "Kiireellinen",
    description: "Tarvitsen apua heti",
    icon: AlertTriangle,
  },
  {
    id: "viikko",
    label: "Tämän viikon aikana",
    description: "Apu olisi hyvä saada pian",
    icon: Clock,
  },
  {
    id: "kuukausi",
    label: "Lähikuukausina",
    description: "Suunnittelen projektia",
    icon: Clock,
  },
  {
    id: "sopimus",
    label: "Pitkäaikainen sopimus",
    description: "Etsin vakituista kumppania",
    icon: ShieldCheck,
  },
];

type FormData = {
  customerType: string;
  service: string;
  urgency: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
};

const STEPS = ["Tilanne", "Palvelu", "Aikataulu", "Yhteystiedot"] as const;

function QuoteFlow() {
  const params = useSearchParams();

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<FormData>({
    customerType: "",
    service: "",
    urgency: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  // Esitäytä URL-parametreista
  useEffect(() => {
    const asiakas = params.get("asiakas");
    const palvelu = params.get("palvelu");
    setData((d) => ({
      ...d,
      customerType: asiakas ?? d.customerType,
      service: palvelu ?? d.service,
    }));
  }, [params]);

  const progress = useMemo(() => (step + 1) / STEPS.length, [step]);

  const canContinue = useMemo(() => {
    if (step === 0) return data.customerType !== "";
    if (step === 1) return data.service !== "";
    if (step === 2) return data.urgency !== "";
    if (step === 3)
      return data.name.trim() !== "" && data.phone.trim() !== "" && data.email.trim() !== "";
    return false;
  }, [step, data]);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canContinue) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Tarjouspyyntö"
        title="Tehdään tästä helppoa"
        subtitle="Vastaa neljään lyhyeen kysymykseen, niin räätälöimme sinulle sopivan tarjouksen. Vastaamme 24 tunnin sisällä – maksutta ja sitoutumatta."
        image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            {/* Sivupalkki: Trust */}
            <Reveal className="order-2 lg:order-1">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-display text-2xl font-bold text-cream md:text-3xl">
                  Suoraviivainen tarjous
                </h2>
                <p className="mt-4 leading-relaxed text-cream/65">
                  Käytämme yhteydenottosi tiedot vain tarjouksen laatimiseen.
                  Saat selkeän hinta-arvion ilman sitoumusta.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-sun/20 bg-gradient-to-br from-charcoal-light to-charcoal/60 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun">
                      Kiireellinen tilanne?
                    </p>
                    <p className="mt-2 text-sm text-cream/65">
                      Päivystys 24/7 – soita suoraan, niin lähetämme apua
                      heti.
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="mt-4 inline-flex items-center gap-2 font-display text-2xl font-bold text-cream transition-colors hover:text-sun"
                    >
                      <Phone className="h-5 w-5 text-sun" />
                      {PHONE_NUMBER}
                    </a>
                  </div>

                  <ul className="space-y-3 text-sm text-cream/65">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sun shrink-0" />
                      Maksuton tarjous
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sun shrink-0" />
                      Vastaus 24 tunnin sisällä
                    </li>
                    <li className="flex items-center gap-2">
                      <Receipt className="h-4 w-4 text-sun shrink-0" />
                      Kotitalousvähennys saatavilla
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-sun shrink-0" />
                      Tilaajavastuu &amp; Luotettava kumppani
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Lomake */}
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <div className="premium-card rounded-3xl p-6 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sun to-sun-bright text-charcoal shadow-lg shadow-sun/30">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-cream md:text-3xl">
                      Kiitos, viesti saapui perille!
                    </h3>
                    <p className="mx-auto mt-4 max-w-md text-cream/65">
                      Olemme yhteydessä viimeistään 24 tunnin sisällä,
                      yleensä jo saman päivän aikana. Kiireellisissä
                      tapauksissa voit soittaa suoraan {PHONE_NUMBER}.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                      <Link
                        href="/"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-medium text-cream hover:border-sun/40 hover:bg-white/5"
                      >
                        Takaisin etusivulle
                      </Link>
                      <a
                        href={PHONE_HREF}
                        className="btn-shine inline-flex h-12 items-center justify-center gap-2 rounded-full bg-sun px-6 text-sm font-semibold text-charcoal hover:bg-sun-bright"
                      >
                        <Phone className="h-4 w-4" />
                        Soita meille
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Progress */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between text-xs text-cream/55">
                        <span>
                          Vaihe {step + 1} / {STEPS.length} ·{" "}
                          <span className="font-semibold text-cream">
                            {STEPS[step]}
                          </span>
                        </span>
                        <span>{Math.round(progress * 100)} %</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-sun via-sun-bright to-sun-glow"
                          initial={false}
                          animate={{ width: `${progress * 100}%` }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {step === 0 && (
                          <Step
                            heading="Kerro lyhyesti kenelle palvelu tulee"
                            description="Tarjoamme räätälöityjä ratkaisuja niin yksityishenkilöille kuin yrityksille."
                          >
                            <div className="grid gap-3 sm:grid-cols-3">
                              {customerTypes.map((c) => (
                                <Choice
                                  key={c.id}
                                  active={data.customerType === c.id}
                                  onClick={() => update("customerType", c.id)}
                                  icon={c.icon}
                                  label={c.label}
                                />
                              ))}
                            </div>
                          </Step>
                        )}

                        {step === 1 && (
                          <Step
                            heading="Mikä palvelu sinua kiinnostaa?"
                            description="Voit valita yhden – kerrot tarkemmin viestikentässä, jos kyseessä on useampi."
                          >
                            <div className="grid gap-3 sm:grid-cols-2">
                              {serviceOptions.map((s) => (
                                <Choice
                                  key={s.id}
                                  active={data.service === s.id}
                                  onClick={() => update("service", s.id)}
                                  icon={s.icon}
                                  label={s.label}
                                />
                              ))}
                            </div>
                          </Step>
                        )}

                        {step === 2 && (
                          <Step
                            heading="Milloin tarvitset apua?"
                            description="Aikataulu vaikuttaa siihen, miten priorisoimme yhteydenottoa."
                          >
                            <div className="grid gap-3 sm:grid-cols-2">
                              {urgencyOptions.map((u) => (
                                <Choice
                                  key={u.id}
                                  active={data.urgency === u.id}
                                  onClick={() => update("urgency", u.id)}
                                  icon={u.icon}
                                  label={u.label}
                                  description={u.description}
                                />
                              ))}
                            </div>
                          </Step>
                        )}

                        {step === 3 && (
                          <Step
                            heading="Mihin laitamme tarjouksen?"
                            description="Tarvitsemme nimen ja yhteystiedot tarjouksen lähettämistä varten."
                          >
                            <div className="grid gap-5 sm:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="name">Nimi *</Label>
                                <Input
                                  id="name"
                                  required
                                  value={data.name}
                                  onChange={(e) => update("name", e.target.value)}
                                  placeholder="Etunimi Sukunimi"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="phone">Puhelin *</Label>
                                <Input
                                  id="phone"
                                  type="tel"
                                  required
                                  value={data.phone}
                                  onChange={(e) => update("phone", e.target.value)}
                                  placeholder="040 123 4567"
                                />
                              </div>
                              <div className="space-y-2 sm:col-span-2">
                                <Label htmlFor="email">Sähköposti *</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  required
                                  value={data.email}
                                  onChange={(e) => update("email", e.target.value)}
                                  placeholder="nimi@esimerkki.fi"
                                />
                              </div>
                              <div className="space-y-2 sm:col-span-2">
                                <Label htmlFor="address">Kohteen osoite</Label>
                                <Input
                                  id="address"
                                  value={data.address}
                                  onChange={(e) => update("address", e.target.value)}
                                  placeholder="Katuosoite, postinumero ja kaupunki"
                                />
                              </div>
                              <div className="space-y-2 sm:col-span-2">
                                <Label htmlFor="message">
                                  Kerro projektistasi (valinnainen)
                                </Label>
                                <Textarea
                                  id="message"
                                  rows={4}
                                  value={data.message}
                                  onChange={(e) => update("message", e.target.value)}
                                  placeholder="Esim. pihan koko, toiveaikataulu tai erityistoiveet."
                                />
                              </div>
                            </div>
                          </Step>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigaatio */}
                    <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                      {step > 0 ? (
                        <button
                          type="button"
                          onClick={() => setStep((s) => Math.max(0, s - 1))}
                          className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-medium text-cream/70 transition-colors hover:text-cream"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Takaisin
                        </button>
                      ) : (
                        <span className="text-xs text-cream/40">
                          Voit perua milloin tahansa
                        </span>
                      )}

                      {step < STEPS.length - 1 ? (
                        <Button
                          type="button"
                          size="lg"
                          disabled={!canContinue}
                          onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
                          className="btn-shine gold-glow"
                        >
                          Jatka
                          <ArrowRight className="h-5 w-5" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          size="lg"
                          disabled={!canContinue || loading}
                          className="btn-shine gold-glow"
                        >
                          {loading ? (
                            "Lähetetään..."
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
                              Lähetä tarjouspyyntö
                            </>
                          )}
                        </Button>
                      )}
                    </div>

                    {step === STEPS.length - 1 && (
                      <p className="mt-4 text-center text-xs text-cream/35">
                        Lähettämällä lomakkeen hyväksyt tietojesi käsittelyn
                        tarjouspyyntöä varten.{" "}
                        <Link
                          href="/tietosuojaseloste"
                          className="text-sun hover:underline"
                        >
                          Tietosuojaseloste
                        </Link>
                      </p>
                    )}
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Step({
  heading,
  description,
  children,
}: {
  heading: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-cream md:text-3xl">
        {heading}
      </h3>
      {description && (
        <p className="mt-2 text-cream/60">{description}</p>
      )}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Choice({
  active,
  onClick,
  icon: Icon,
  label,
  description,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${
        active
          ? "border-sun/50 bg-sun/8 ring-2 ring-sun/20"
          : "border-white/8 bg-charcoal-light/40 hover:border-white/20 hover:bg-charcoal-light/80"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
          active
            ? "bg-sun text-charcoal"
            : "bg-white/5 text-cream/80 group-hover:bg-white/10"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="font-display text-sm font-semibold text-cream">{label}</p>
        {description && (
          <p className="mt-0.5 text-xs text-cream/55">{description}</p>
        )}
      </div>
      {active && (
        <CheckCircle className="h-5 w-5 shrink-0 text-sun" />
      )}
    </button>
  );
}

export default function TarjouspyyntoContent() {
  return (
    <Suspense fallback={null}>
      <QuoteFlow />
    </Suspense>
  );
}
