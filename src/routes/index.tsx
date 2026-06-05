import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Bot,
  Globe2,
  GraduationCap,
  Flame,
  Sparkles,
  Languages,
  Play,
  Check,
  ArrowRight,
} from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import feedMockup from "@/assets/feed-mockup.jpg";
import streakMockup from "@/assets/streak-mockup.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ortio — Learn Languages by Living Them" },
      {
        name: "description",
        content:
          "Chat with native speakers, practice with AI roleplays, prep for JLPT, Goethe, HSK, DELE and DELF, and build a streak — all in one app.",
      },
      { property: "og:title", content: "Ortio — Learn Languages by Living Them" },
      {
        property: "og:description",
        content:
          "Authentic peer-to-peer chat, safe AI practice, cultural feed, and official mock exams — gamified for daily progress.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Features />
      <ExamPrep />
      <Gamification />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elegant)]">
            <Languages className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Ortio</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#exams" className="transition-colors hover:text-foreground">Exam Prep</a>
          <a href="#streaks" className="transition-colors hover:text-foreground">Daily Streaks</a>
        </nav>
        <a
          href="#download"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Get the app <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Peer chat · AI practice · Official exams
          </div>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Learn languages by{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              living them
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Ortio blends real conversations with native speakers, safe AI roleplays,
            and official mock exams — wrapped in a 2-minute daily habit.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.ortio.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
            >
              <Play className="h-4 w-4 fill-current" /> Get it on Google Play
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["Free to start", "5 official exams", "Native speakers worldwide"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" /> {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            className="overflow-hidden rounded-3xl border border-border bg-card"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img
              src={heroMockup}
              alt="Ortio chat and AI roleplay screens"
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: MessageCircle,
    title: "Chat with real people",
    desc: "Real-time messaging with native speakers, paired with instant in-app translation so the conversation never stops.",
    chip: "Peer-to-peer",
  },
  {
    icon: Bot,
    title: "Practice with AI personas",
    desc: "Order coffee, hail a taxi, check into a hotel — rehearse with simulated AI characters in a safe, low-stakes space.",
    chip: "AI roleplay",
  },
  {
    icon: Globe2,
    title: "Discover cultures",
    desc: "A social feed of poems, song lyrics and stories shared by native speakers — language through art and context.",
    chip: "Social feed",
  },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          A language app that actually talks back
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Three ways to practice every day — pick your mood, build real fluency.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {FEATURES.map((f) => (
          <article
            key={f.title}
            className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gradient-hero)] text-primary-foreground">
              <f.icon className="h-6 w-6" />
            </div>
            <span className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
              {f.chip}
            </span>
            <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 grid items-center gap-10 rounded-3xl border border-border bg-secondary p-8 md:grid-cols-2 md:p-12">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Cultural discovery
          </span>
          <h3 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Language lives in context.
          </h3>
          <p className="mt-4 text-muted-foreground">
            Scroll a feed of native voices — poetry, lyrics, photos, stories.
            You're not memorizing words. You're meeting a culture.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <img
            src={feedMockup}
            alt="Ortio cultural social feed"
            width={900}
            height={1200}
            loading="lazy"
            className="h-auto w-full rounded-3xl border border-border bg-card"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
        </div>
      </div>
    </section>
  );
}

const EXAMS = [
  { code: "JLPT", lang: "Japanese", flag: "🇯🇵" },
  { code: "Goethe", lang: "German", flag: "🇩🇪" },
  { code: "HSK", lang: "Chinese", flag: "🇨🇳" },
  { code: "DELE", lang: "Spanish", flag: "🇪🇸" },
  { code: "DELF", lang: "French", flag: "🇫🇷" },
];

function ExamPrep() {
  return (
    <section
      id="exams"
      className="relative overflow-hidden py-24 text-primary-foreground"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <GraduationCap className="h-3.5 w-3.5" /> Official mock exams
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Prep for the test that matters
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Full simulations for five globally recognized language certifications —
            inside the same app you practice in every day.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {EXAMS.map((e) => (
            <div
              key={e.code}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="text-4xl">{e.flag}</div>
              <div className="mt-4 text-xl font-semibold tracking-tight">{e.code}</div>
              <div className="mt-1 text-sm text-primary-foreground/70">{e.lang}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gamification() {
  return (
    <section id="streaks" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="mx-auto w-full max-w-sm">
            <img
              src={streakMockup}
              alt="Ortio streak tracker and daily quiz"
              width={900}
              height={1200}
              loading="lazy"
              className="h-auto w-full rounded-3xl border border-border bg-card"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
            <Flame className="h-3.5 w-3.5" /> Daily streaks
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Two minutes a day. Real momentum.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Short daily quizzes, visual streak tracking, and reward loops that
            turn studying into a habit you actually want to keep.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "2-minute daily quizzes tailored to your level",
              "Streak rings and milestones to celebrate progress",
              "Light community challenges to stay accountable",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="download" className="mx-auto max-w-7xl px-6 pb-24">
      <div
        className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center text-primary-foreground md:px-16 md:py-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 35%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Your next language is one conversation away.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80">
            Download Ortio and start your first 2-minute session today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.ortio.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
            >
              <Play className="h-4 w-4 fill-current" /> Get it on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-hero)] text-primary-foreground">
            <Languages className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight">Ortio</span>
          <span className="ml-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ortio. All rights reserved.
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://prasad-mahankal27.github.io/Ortio-legal/privacy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="https://prasad-mahankal27.github.io/Ortio-legal/terms.html"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=support.ortio@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
