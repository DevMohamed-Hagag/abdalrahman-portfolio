import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Languages } from "lucide-react";
import { education, languages, skillGroups } from "@/lib/site";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise | Abdulrahman Ali Elsisy" },
      {
        name: "description",
        content:
          "Core accounting skills, software proficiency, sales and client-relations strengths, education, and languages of Abdulrahman Ali Elsisy.",
      },
      { property: "og:title", content: "Expertise | Abdulrahman Ali Elsisy" },
      {
        property: "og:description",
        content:
          "Accounts payable and receivable, reconciliation, financial reporting, general ledger, MS Excel, and team leadership.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExpertisePage,
});

function ExpertisePage() {
  return (
    <div className="pb-20 pt-28 md:pt-32">
      <section className="pb-12">
        <div className="rise">
          <div className="text-[11px] font-medium uppercase text-primary">Toolkit</div>
          <h1 className="mt-3 max-w-[26ch] text-balance font-display text-3xl font-semibold md:text-4xl">
            Core expertise, education, and languages
          </h1>
          <p className="mt-4 max-w-[56ch] text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            A practical toolkit built across four industries — from full accounting cycles to
            leading a sales team and keeping clients satisfied.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-12">
        <div className="grid gap-4 md:col-span-7">
          {skillGroups.map((group, index) => (
            <div key={group.label} className={`glass-panel rise d${(index % 3) + 1} p-6`}>
              <div className="text-[11px] font-medium uppercase text-primary">{group.label}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-chip px-3 py-1.5 text-sm ring-1 ring-glass-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 md:col-span-5">
          <div className="glass-panel p-6 md:p-8">
            <div className="flex items-center gap-2">
              <GraduationCap className="size-4 text-primary" aria-hidden="true" />
              <div className="text-[11px] font-medium uppercase text-primary">Education</div>
            </div>
            <div className="mt-4">
              <div className="font-display text-lg font-medium">{education.degree}</div>
              <div className="mt-1 text-sm text-muted-foreground">{education.university}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{education.place}</div>
              <div className="mt-3 inline-flex rounded-md bg-chip px-3 py-1.5 text-xs ring-1 ring-glass-border">
                {education.grade}
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Languages className="size-4 text-primary" aria-hidden="true" />
              <div className="text-[11px] font-medium uppercase text-primary">Languages</div>
            </div>
            <div className="mt-4 space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-baseline justify-between gap-3">
                  <span className="text-sm text-muted-foreground">{lang.name}</span>
                  <span className="text-sm font-medium text-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 h-px bg-border" />
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Comfortable working with vendors, clients, and management in both Arabic and English.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
