"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { wastePrices } from "@/data/waste-pricing";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TilaaVaihtolavaContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Vaihtolava"
        title="Tilaa vaihtolava helposti"
        subtitle="Tarvitsetko vaihtolavan talkoisiin, remonttiin tai rakennustyömaalle? Toimitus usein jo seuraavaksi arkipäiväksi."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-cream/70">
                Meiltä saat kaikki lavatyypit kätevästi ja nopeasti – jätelavat,
                talkoolavat, vaihtolavat, roska- ja siirtolavat. Täyttämällä
                yhteydenottolomakkeen saat tarjouksen vaihtolavasta juuri sinun
                tarpeisiisi. Lomakkeen lähettäminen ei sido sinua mihinkään.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <Reveal delay={0.1}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl border border-sun/20 bg-charcoal-light p-10 text-center"
                >
                  <CheckCircle className="mx-auto h-16 w-16 text-sun" />
                  <h3 className="mt-6 font-display text-2xl font-bold text-cream">
                    Kiitos tilauksestasi!
                  </h3>
                  <p className="mt-4 text-cream/60">
                    Olemme vastaanottaneet pyyntösi ja lähetämme tarjouksen
                    mahdollisimman pian.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-white/5 bg-charcoal-light p-8"
                >
                  <h2 className="font-display text-2xl font-bold text-cream">
                    Tilauslomake
                  </h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="name">Nimi *</Label>
                      <Input id="name" name="name" required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Toimitusosoite *</Label>
                      <Input id="address" name="address" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal">Postinumero *</Label>
                      <Input id="postal" name="postal" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Postitoimipaikka *</Label>
                      <Input id="city" name="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Sähköposti *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Puhelinnumero *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label>Yhteydenottopyyntö koskee *</Label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-sm text-cream/70">
                          <input type="radio" name="lava" value="iso" required className="accent-sun" />
                          Iso lava
                        </label>
                        <label className="flex items-center gap-2 text-sm text-cream/70">
                          <input type="radio" name="lava" value="pieni" className="accent-sun" />
                          Pieni lava
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="info">Lisätietoja</Label>
                      <Textarea id="info" name="info" rows={4} />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="flex items-start gap-3 text-xs text-cream/50">
                        <input type="checkbox" required className="mt-1 accent-sun" />
                        <span>
                          Hyväksyn{" "}
                          <Link href="/tietosuojaseloste" className="text-sun hover:underline">
                            tietosuojaselosteen
                          </Link>
                        </span>
                      </label>
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="mt-6 w-full gold-glow" disabled={loading}>
                    {loading ? "Lähetetään..." : (
                      <>
                        <Send className="h-5 w-5" />
                        Lähetä
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="font-display text-2xl font-bold text-cream">
                  Jätelajit ja hinnat
                </h2>
                <p className="mt-2 text-sm text-cream/50">
                  Hinnat alv 0 %. Jätemaksut määräytyvät alla olevan taulukon mukaisesti.
                </p>
                <div className="mt-6 overflow-x-auto rounded-2xl border border-white/5" data-lenis-prevent>
                  <table className="w-full min-w-[600px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-charcoal-light">
                        <th className="px-4 py-3 font-semibold text-cream">Jätelaji</th>
                        <th className="px-4 py-3 font-semibold text-cream">Hinta</th>
                        <th className="px-4 py-3 font-semibold text-cream">Yksikkö</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wastePrices.map((row) => (
                        <tr key={row.wasteType} className="border-b border-white/5 text-cream/60">
                          <td className="px-4 py-3">{row.wasteType}</td>
                          <td className="px-4 py-3 text-sun">{row.price}</td>
                          <td className="px-4 py-3">{row.unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
