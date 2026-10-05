import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ComponentType, type ReactNode } from "react";
import {
  ArrowDown,
  BriefcaseBusiness,
  GraduationCap,
  Home as HomeIcon,
  Mail,
} from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE } from "@/lib/site";

const navItems: { to: "/" | "/experience" | "/expertise" | "/contact"; label: string; icon: ComponentType<{ className?: string }> }[] = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/experience", label: "Experience", icon: BriefcaseBusiness },
  { to: "/expertise", label: "Expertise", icon: GraduationCap },
  { to: "/contact", label: "Contact", icon: Mail },
];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 pb-20">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
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
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={
        active
          ? "text-foreground transition-colors after:block after:h-px after:mt-1 after:bg-primary after:scale-x-100 after:transition-transform"
          : "text-muted-foreground transition-colors hover:text-primary after:block after:h-px after:mt-1 after:bg-primary after:scale-x-0 after:transition-transform"
      }
    >
      {label}
    </Link>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="portfolio-backdrop" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-glass-border bg-glass backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-2" aria-label="Home">
            <span className="size-2.5 shrink-0 rounded-full bg-primary" />
            <span className="truncate font-display text-sm font-semibold sm:text-[15px]">
              Abdulrahman Ali Elsisy
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>
          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground ring-1 ring-primary/30 transition-transform hover:-translate-y-0.5 sm:text-sm"
            href={"/Abdulrahman_Elsisy_CV.docx"}
            download="Abdulrahman_Elsisy_CV.docx"
          >
            <ArrowDown className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <Outlet />
      </main>

      <footer className="relative mt-16 border-t border-glass-border bg-glass px-5 py-8 backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-sm font-semibold text-foreground">{SITE.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              Accounting accuracy. Commercial impact. · {SITE.location}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-primary">
              {SITE.email}
            </a>
            <a href={SITE.phoneHref} className="transition-colors hover:text-primary">
              {SITE.phone}
            </a>
          </div>
        </div>
      </footer>

      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-glass-border bg-glass pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
        aria-label="Mobile navigation"
      >
        <div className="grid grid-cols-4">
          {navItems.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  active
                    ? "flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium text-primary"
                    : "flex flex-col items-center gap-1 py-2.5 text-[10px] text-muted-foreground transition-colors hover:text-primary"
                }
              >
                <Icon className="size-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="h-14 md:hidden" aria-hidden="true" />
    </QueryClientProvider>
  );
}
