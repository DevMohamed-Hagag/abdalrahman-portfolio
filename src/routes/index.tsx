import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowDown,
  BriefcaseBusiness,
  Building2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { SITE, experience, industries, languages } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdulrahman Ali Elsisy | Senior Accountant" },
      {
        name: "description",
        content:
          "Portfolio of Abdulrahman Ali Elsisy, a senior accountant and sales leader with eight years of experience across Saudi Arabia and Egypt.",
      },
      { property: "og:title", content: "Abdulrahman Ali Elsisy | Senior Accountant" },
      {
        property: "og:description",
        content:
          "Senior accountant and sales leader delivering accurate reporting, reconciliations, and measurable commercial results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const strengths = [
  {
    title: "Accounting & reporting",
    body: "Hands-on accounts payable/receivable, bank and account reconciliation, and monthly financial reporting built on accurate record-keeping.",
  },
  {
    title: "Sales leadership",
    body: "Experience leading a small sales team, including target tracking, client follow-up, and day-to-day coordination.",
  },
  {
    title: "Client-facing work",
    body: "A track record of clear communication with vendors, clients, and management across four different industries.",
  },
];

const stats: [string, string, string][] = [
  ["8+", "Years of experience", "2018 — Present"],
  ["1.8M", "SAR monthly transactions", "Managed at KNCC"],
  ["98%", "Reconciliation accuracy", "Across the accounting cycle"],
  ["95%", "Sales target attainment", "Average monthly team performance"],
];

function Index() {
  const current = experience[0]!;

  return (
    <div className="pb-20">
      <section className="pb-14 pt-28 md:pb-16 md:pt-32">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8">
          <div className="rise d1 md:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-3 py-1 text-[11px] font-medium uppercase text-primary backdrop-blur">
              <BriefcaseBusiness className="size-3.5" aria-hidden="true" />
              <span>{SITE.title}</span>
            </div>
            <h1 className="mt-6 max-w-[22ch] text-balance font-display text-4xl font-semibold leading-tight md:text-5xl">
              Abdulrahman Ali Elsisy
            </h1>
            <p className="mt-5 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Accounting and sales professional with 8 years of experience across automotive, real
              estate, lighting, and contracting sectors in Egypt and Saudi Arabia — with a track
              record of accurate financial record-keeping and client-facing work.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground ring-1 ring-primary/30 transition-transform hover:-translate-y-0.5"
              >
                View experience
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={"/Abdulrahman_Elsisy_CV.docx"}
                download="Abdulrahman_Elsisy_CV.docx"
                className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-glass px-4 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ArrowDown className="size-4" aria-hidden="true" />
                Download CV
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="icon-link"
              >
                <Linkedin className="size-4" />
              </a>
              <a href={`mailto:${SITE.email}`} aria-label="Send an email" className="icon-link">
                <Mail className="size-4" />
              </a>
              <a href={SITE.phoneHref} aria-label="Call" className="icon-link">
                <Phone className="size-4" />
              </a>
            </div>
          </div>
          <div className="rise d2 md:col-span-4">
            <div className="glass-panel p-5">
              <div className="flex items-center gap-3">
                <div className="grid size-14 shrink-0 place-items-center rounded-lg bg-primary font-display text-lg font-semibold text-primary-foreground">
                  AE
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium">Based in Riyadh</div>
                  <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3" /> Saudi Arabia
                  </div>
                </div>
              </div>
              <div className="my-4 h-px bg-border" />
              <div className="space-y-2 text-xs text-muted-foreground">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="size-3.5 shrink-0" /> {SITE.email}
                </a>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Phone className="size-3.5 shrink-0" /> {SITE.phone}
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Linkedin className="size-3.5 shrink-0" /> {SITE.linkedinLabel}
                </a>
              </div>
              <div className="my-4 h-px bg-border" />
              <div className="space-y-1.5">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-baseline justify-between">
                    <span className="text-xs uppercase text-muted-foreground">{lang.name}</span>
                    <span className="text-xs font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label, detail], index) => (
            <div key={label} className={`glass-panel rise d${index + 1} p-5`}>
              <div className="font-display text-3xl font-semibold md:text-4xl">{value}</div>
              <div className="mt-1 text-[11px] font-medium uppercase text-primary">{label}</div>
              <div className="mt-2 text-xs text-muted-foreground">{detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[11px] font-medium uppercase text-primary">What I bring</div>
            <h2 className="mt-3 text-balance font-display text-2xl font-semibold">
              Numbers you can verify, relationships that last
            </h2>
            <p className="mt-3 max-w-[36ch] text-pretty text-sm text-muted-foreground">
              Every figure on this site comes straight from the work — reconciliations, targets, and
              reports delivered month after month.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="inline-flex items-center gap-1.5 rounded-md bg-chip px-3 py-1.5 text-xs ring-1 ring-glass-border"
                >
                  <Building2 className="size-3 text-primary" aria-hidden="true" />
                  {industry}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:col-span-8">
            {strengths.map((item) => (
              <div key={item.title} className="glass-panel p-5">
                <h3 className="font-display text-base font-medium">{item.title}</h3>
                <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="glass-panel flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <div className="text-[11px] font-medium uppercase text-primary">Currently</div>
            <h3 className="mt-1 font-display text-lg font-medium">
              {current.role} at {current.company}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{current.location} · {current.dates}</p>
          </div>
          <Link
            to="/experience"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-glass-border bg-glass px-4 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
          >
            Full career timeline
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
