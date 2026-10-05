import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Abdulrahman Ali Elsisy" },
      {
        name: "description",
        content:
          "Get in touch with Abdulrahman Ali Elsisy — senior accountant based in Riyadh, Saudi Arabia. Phone, email, LinkedIn, and CV download.",
      },
      { property: "og:title", content: "Contact | Abdulrahman Ali Elsisy" },
      {
        property: "og:description",
        content:
          "Reach Abdulrahman Ali Elsisy by phone, email, or LinkedIn — and download the latest CV.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    hint: "Available for calls",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    hint: "Replies to messages",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: SITE.linkedinLabel,
    href: SITE.linkedin,
    hint: "Connect and message",
    external: true,
  },
];

function ContactPage() {
  return (
    <div className="pb-20 pt-28 md:pt-32">
      <section className="pb-12">
        <div className="rise">
          <div className="text-[11px] font-medium uppercase text-primary">Get in touch</div>
          <h1 className="mt-3 max-w-[24ch] text-balance font-display text-3xl font-semibold md:text-4xl">
            Let's talk about your next finance role
          </h1>
          <p className="mt-4 max-w-[56ch] text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Currently based in Riyadh, Saudi Arabia. Reach out by phone, email, or LinkedIn — or
            download the CV directly.
          </p>
          <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-glass px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            {SITE.location}
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {channels.map(({ icon: Icon, label, value, href, hint, external }, index) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className={`glass-panel rise d${index + 1} group p-6 transition-transform hover:-translate-y-1`}
          >
            <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </div>
            <div className="mt-4 text-[11px] font-medium uppercase text-primary">{label}</div>
            <div className="mt-1 break-words text-sm font-medium text-foreground">{value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{hint}</div>
          </a>
        ))}
      </section>

      <section className="pt-6">
        <div className="glass-panel flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <div className="text-[11px] font-medium uppercase text-primary">CV</div>
            <h2 className="mt-1 font-display text-lg font-medium">
              The full CV, ready to download
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              PDF document — covers the complete experience, skills, and education.
            </p>
          </div>
          <a
            href={"/Abdulrahman_Elsisy_CV_ATS.pdf"}
            download="Abdulrahman_Elsisy_CV_ATS.pdf"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground ring-1 ring-primary/30 transition-transform hover:-translate-y-0.5"
          >
            <ArrowDown className="size-4" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
