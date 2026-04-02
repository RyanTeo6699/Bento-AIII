import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { contactChannels, socialLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bento AIII for AI product, system, and workflow conversations."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Bring the workflow, the problem, or the product direction."
        description="Bento AIII is best engaged on practical AI product work, language model systems, internal tooling, and delivery partnerships."
        metrics={[
          { label: "General", value: "hello@bentoaiii.com" },
          { label: "Partnerships", value: "partners@bentoaiii.com" },
          { label: "Location", value: "Edmonton and remote" }
        ]}
      />

      <section className="py-24">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow="Reach out"
                title="A few ways to start the conversation."
                description="Use the contact form for structure, or jump directly to the right channel below."
              />
            </Reveal>

            <div className="grid gap-6">
              {contactChannels.map((channel, index) => (
                <Reveal
                  key={channel.label}
                  delay={0.06 * index}
                  className="surface pixel-corner p-6"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {channel.label}
                  </p>
                  <a
                    href={channel.href}
                    className="mt-3 block text-2xl font-semibold text-white hover:text-accent"
                  >
                    {channel.value}
                  </a>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{channel.note}</p>
                </Reveal>
              ))}

              <Reveal delay={0.18} className="surface pixel-corner p-6">
                <p className="section-kicker text-[0.58rem]">Social</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
