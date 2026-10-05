import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MapPin } from "lucide-react";
import { SITE, experience } from "@/lib/site";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience | Abdulrahman Ali Elsisy" },
      {
        name: "description",
        content:
          "Eight years of accounting and sales experience across contracting, lighting, real estate, and automotive in Saudi Arabia and Egypt.",
      },
      { property: "og:title", content: "Experience | Abdulrahman Ali Elsisy" },
      {
        property: "og:description",
        content:
          "From junior accountant to senior accountant and sales team leader — a chronological career timeline with measurable results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="pb-20 pt-28 md:pt-32">
      <section className="pb-12">
        <div className="rise">
          <div className="text-[11px] font-medium uppercase text-primary">Career ledger</div>
          <h1 className="mt-3 max-w-[24ch] text-balance font-display text-3xl font-semibold md:text-4xl">
            Four roles, one thread: accurate records and measurable results
          </h1>
          <p className="mt-4 max-w-[56ch] text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            {SITE.name} — 8 years of experience (2018 — Present) across automotive, real estate,
            lighting, and contracting sectors in Egypt and Saudi Arabia.
          </p>
        </div>
      </section>

      <section>
        <div className="relative">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-border md:left-[9px]" aria-hidden="true" />
          <ol className="space-y-8">
            {experience.map((item) => (
              <li key={item.company} className="relative pl-8 md:pl-10">
                <span
                  className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-primary bg-background md:size-[19px]"
                  aria-hidden="true"
                />
                <article className="glass-panel p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-medium uppercase text-primary">{item.dates}</div>
                      <h2 className="mt-1 font-display text-xl font-medium">{item.role}</h2>
                      <div className="text-sm text-muted-foreground">{item.company}</div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-glass-border bg-chip px-3 py-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {item.metrics.map(([value, label]) => (
                      <div key={label} className="rounded-lg bg-chip px-3 py-2.5 ring-1 ring-glass-border">
                        <div className="font-display text-lg font-semibold">{value}</div>
                        <div className="text-[11px] text-muted-foreground">{label}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="max-w-[72ch] text-pretty text-sm leading-relaxed text-muted-foreground">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
