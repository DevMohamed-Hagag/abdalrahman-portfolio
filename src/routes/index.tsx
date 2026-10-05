import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, BriefcaseBusiness, MapPin } from "lucide-react";

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

const experience = [
  {
    dates: "2025 — Present",
    role: "Senior Accountant",
    company: "Kayan United Contracting Co. (KNCC)",
    location: "Riyadh, Saudi Arabia",
    description:
      "Manage the monthly accounting cycle across approximately 1.8M SAR in transactions, maintaining 98% reconciliation accuracy while processing payables and receivables for 30+ vendors and clients.",
  },
  {
    dates: "2022 — 2025",
    role: "Sales Team Leader",
    company: "Al-Monjiz Lighting Showroom",
    location: "Cairo, Egypt",
    description:
      "Led a five-member sales team to an average 95% of monthly targets and contributed to an estimated 12% year-over-year increase in showroom revenue.",
  },
  {
    dates: "2020 — 2022",
    role: "Mid-Level Accountant",
    company: "PRE Group — Real Estate",
    location: "Cairo, Egypt",
    description:
      "Handled accounting records for approximately 3M EGP in monthly real-estate transactions and reconciled around 40 invoices each month with an error rate below 2%.",
  },
  {
    dates: "2018 — 2020",
    role: "Junior Accountant",
    company: "Shahatah International Cars Showroom",
    location: "Cairo, Egypt",
    description:
      "Prepared invoices for sales averaging 250K EGP monthly, monitored cash and bank transactions, and maintained organized records for more than 50 customer accounts.",
  },
];

const skills = [
  "Accounts payable & receivable",
  "Bank & account reconciliation",
  "Financial reporting",
  "General ledger entries",
  "MS Excel & MS Office",
  "Target tracking",
  "Client relations",
  "Team leadership",
];

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background font-sans text-foreground antialiased selection:bg-primary/15">
      <div className="portfolio-backdrop" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-glass-border bg-glass backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2" aria-label="Back to top">
            <span className="size-2.5 shrink-0 rounded-full bg-primary" />
            <span className="truncate font-display text-sm font-semibold sm:text-[15px]">Abdulrahman Ali Elsisy</span>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] text-muted-foreground md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-primary" href="#experience">Experience</a>
            <a className="transition-colors hover:text-primary" href="#metrics">Metrics</a>
            <a className="transition-colors hover:text-primary" href="#expertise">Expertise</a>
            <a className="transition-colors hover:text-primary" href="#education">Education</a>
          </nav>
          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground ring-1 ring-primary/30 transition-transform hover:-translate-y-0.5 sm:text-sm"
            href="/Abdulrahman_Elsisy_CV.docx"
            download="Abdulrahman_Elsisy_CV.docx"
          >
            <ArrowDown className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </header>

      <main id="top" className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <section className="pb-16 pt-28 md:pb-20 md:pt-32">
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8">
            <div className="rise d1 md:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-3 py-1 text-[11px] font-medium uppercase text-primary backdrop-blur">
                <BriefcaseBusiness className="size-3.5" aria-hidden="true" />
                <span>Senior Accountant · Sales Leader</span>
              </div>
              <h1 className="mt-6 max-w-[22ch] text-balance font-display text-4xl font-semibold leading-tight md:text-5xl">
                Abdulrahman Ali Elsisy
              </h1>
              <p className="mt-5 max-w-[48ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Finance and commercial operations across contracting, real estate, lighting, and automotive. I turn accurate records, strong client relationships, and clear targets into measurable results.
              </p>
            </div>
            <div className="rise d2 md:col-span-4">
              <div className="glass-panel p-5">
                <div className="flex items-center gap-3">
                  <div className="grid size-14 shrink-0 place-items-center rounded-lg bg-primary font-display text-lg font-semibold text-primary-foreground">AE</div>
                  <div>
                    <div className="text-sm font-medium">Based in Riyadh</div>
                    <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3" /> Saudi Arabia</div>
                  </div>
                </div>
                <div className="my-4 h-px bg-border" />
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase text-muted-foreground">Experience</span>
                  <span className="font-display text-lg font-semibold">8+ years</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="metrics" className="scroll-mt-24 pb-16">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["1.8M", "SAR transactions", "Managed at Kayan United Contracting"],
              ["98%", "Reconciliation accuracy", "Maintained across the accounting cycle"],
              ["95%", "Sales target attainment", "Average monthly team performance"],
            ].map(([value, label, detail], index) => (
              <div key={label} className={`glass-panel rise d${index + 1} p-5`}>
                <div className="font-display text-3xl font-semibold md:text-4xl">{value}</div>
                <div className="mt-1 text-[11px] font-medium uppercase text-primary">{label}</div>
                <div className="mt-2 text-xs text-muted-foreground">{detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 pb-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-[11px] font-medium uppercase text-primary">Career ledger</div>
              <h2 className="mt-3 text-balance font-display text-2xl font-semibold">Chronological experience</h2>
              <p className="mt-3 max-w-[36ch] text-pretty text-sm text-muted-foreground">Four roles, one thread: accurate records, reliable reporting, and sustained commercial performance.</p>
            </div>
            <div className="md:col-span-8">
              <div className="glass-panel divide-y divide-border p-6 md:p-8">
                {experience.map((item, index) => (
                  <article key={item.company} className={index === 0 ? "pb-6" : index === experience.length - 1 ? "pt-6" : "py-6"}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-medium uppercase text-primary">{item.dates}</div>
                        <h3 className="mt-1 font-display text-lg font-medium">{item.role}</h3>
                        <div className="text-sm text-muted-foreground">{item.company}</div>
                      </div>
                      <span className="max-w-28 shrink-0 text-right text-xs text-muted-foreground">{item.location}</span>
                    </div>
                    <p className="mt-3 max-w-[58ch] text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="scroll-mt-24 pb-24">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="glass-panel p-6 md:p-8">
                <div className="text-[11px] font-medium uppercase text-primary">Core expertise</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => <span key={skill} className="rounded-md bg-chip px-3 py-1.5 text-sm ring-1 ring-glass-border">{skill}</span>)}
                </div>
              </div>
            </div>
            <div id="education" className="scroll-mt-24 md:col-span-5">
              <div className="glass-panel h-full p-6 md:p-8">
                <div className="text-[11px] font-medium uppercase text-primary">Education & languages</div>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div><span className="font-medium text-foreground">Bachelor of Commerce</span><div className="mt-1 text-xs">Kafr El-Sheikh University · Grade: Good</div></div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between gap-3"><span>Arabic</span><span className="font-medium text-foreground">Native</span></div>
                  <div className="flex justify-between gap-3"><span>English</span><span className="font-medium text-foreground">Good</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-glass-border bg-glass px-5 py-6 backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Abdulrahman Ali Elsisy</span>
          <span>Accounting accuracy. Commercial impact.</span>
        </div>
      </footer>
    </div>
  );
}
