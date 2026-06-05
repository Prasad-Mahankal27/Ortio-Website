import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Languages, A as ArrowRight, S as Sparkles, P as Play, C as Check, M as MessageCircle, B as Bot, E as Earth, G as GraduationCap, F as Flame } from "../_libs/lucide-react.mjs";
const heroMockup = "/assets/hero-mockup-Bq6ap5dT.jpg";
const feedMockup = "/assets/feed-mockup-DO92thyS.jpg";
const streakMockup = "/assets/streak-mockup-DgWNCe6y.jpg";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExamPrep, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gamification, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elegant)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold tracking-tight", children: "Ortio" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "transition-colors hover:text-foreground", children: "Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#exams", className: "transition-colors hover:text-foreground", children: "Exam Prep" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#streaks", className: "transition-colors hover:text-foreground", children: "Daily Streaks" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#download", className: "inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]", children: [
      "Get the app ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 -z-10", style: {
      background: "var(--gradient-soft)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl", style: {
      background: "var(--gradient-hero)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
          "Peer chat · AI practice · Official exams"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl", children: [
          "Learn languages by",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-clip-text text-transparent", style: {
            backgroundImage: "var(--gradient-hero)"
          }, children: "living them" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl", children: "Ortio blends real conversations with native speakers, safe AI roleplays, and official mock exams — wrapped in a 2-minute daily habit." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://play.google.com/store/apps/details?id=com.ortio.ai", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4 fill-current" }),
          " Get it on Google Play"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground", children: ["Free to start", "5 official exams", "Native speakers worldwide"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-primary" }),
          " ",
          t
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto mt-16 max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-card", style: {
        boxShadow: "var(--shadow-elegant)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroMockup, alt: "Ortio chat and AI roleplay screens", width: 1600, height: 1200, className: "h-auto w-full" }) }) })
    ] })
  ] });
}
const FEATURES = [{
  icon: MessageCircle,
  title: "Chat with real people",
  desc: "Real-time messaging with native speakers, paired with instant in-app translation so the conversation never stops.",
  chip: "Peer-to-peer"
}, {
  icon: Bot,
  title: "Practice with AI personas",
  desc: "Order coffee, hail a taxi, check into a hotel — rehearse with simulated AI characters in a safe, low-stakes space.",
  chip: "AI roleplay"
}, {
  icon: Earth,
  title: "Discover cultures",
  desc: "A social feed of poems, song lyrics and stories shared by native speakers — language through art and context.",
  chip: "Social feed"
}];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "features", className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold tracking-tight md:text-5xl", children: "A language app that actually talks back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Three ways to practice every day — pick your mood, build real fluency." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: FEATURES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40", style: {
      boxShadow: "var(--shadow-card)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gradient-hero)] text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 text-xs font-medium uppercase tracking-wider text-primary", children: f.chip }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold tracking-tight", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: f.desc })
    ] }, f.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid items-center gap-10 rounded-3xl border border-border bg-secondary p-8 md:grid-cols-2 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-primary", children: "Cultural discovery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-3xl font-bold tracking-tight md:text-4xl", children: "Language lives in context." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Scroll a feed of native voices — poetry, lyrics, photos, stories. You're not memorizing words. You're meeting a culture." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: feedMockup, alt: "Ortio cultural social feed", width: 900, height: 1200, loading: "lazy", className: "h-auto w-full rounded-3xl border border-border bg-card", style: {
        boxShadow: "var(--shadow-card)"
      } }) })
    ] })
  ] });
}
const EXAMS = [{
  code: "JLPT",
  lang: "Japanese",
  flag: "🇯🇵"
}, {
  code: "Goethe",
  lang: "German",
  flag: "🇩🇪"
}, {
  code: "HSK",
  lang: "Chinese",
  flag: "🇨🇳"
}, {
  code: "DELE",
  lang: "Spanish",
  flag: "🇪🇸"
}, {
  code: "DELF",
  lang: "French",
  flag: "🇫🇷"
}];
function ExamPrep() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "exams", className: "relative overflow-hidden py-24 text-primary-foreground", style: {
    background: "var(--gradient-hero)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-3.5 w-3.5" }),
        " Official mock exams"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-4xl font-bold tracking-tight md:text-5xl", children: "Prep for the test that matters" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-primary-foreground/80", children: "Full simulations for five globally recognized language certifications — inside the same app you practice in every day." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5", children: EXAMS.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: e.flag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xl font-semibold tracking-tight", children: e.code }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-primary-foreground/70", children: e.lang })
    ] }, e.code)) })
  ] }) });
}
function Gamification() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "streaks", className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-2 md:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: streakMockup, alt: "Ortio streak tracker and daily quiz", width: 900, height: 1200, loading: "lazy", className: "h-auto w-full rounded-3xl border border-border bg-card", style: {
      boxShadow: "var(--shadow-elegant)"
    } }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 md:order-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5" }),
        " Daily streaks"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-bold tracking-tight md:text-5xl", children: "Two minutes a day. Real momentum." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: "Short daily quizzes, visual streak tracking, and reward loops that turn studying into a habit you actually want to keep." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-4", children: ["2-minute daily quizzes tailored to your level", "Streak rings and milestones to celebrate progress", "Light community challenges to stay accountable"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: t })
      ] }, t)) })
    ] })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "download", className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] px-8 py-16 text-center text-primary-foreground md:px-16 md:py-24", style: {
    background: "var(--gradient-hero)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-30", style: {
      backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 35%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold tracking-tight md:text-5xl", children: "Your next language is one conversation away." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-primary-foreground/80", children: "Download Ortio and start your first 2-minute session today." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://play.google.com/store/apps/details?id=com.ortio.ai", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4 fill-current" }),
        " Get it on Google Play"
      ] }) })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-hero)] text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-tight", children: "Ortio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-3 text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Ortio. All rights reserved."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-wrap items-center gap-6 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://prasad-mahankal27.github.io/Ortio-legal/privacy.html", target: "_blank", rel: "noopener noreferrer", className: "transition-colors hover:text-foreground", children: "Privacy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://prasad-mahankal27.github.io/Ortio-legal/terms.html", target: "_blank", rel: "noopener noreferrer", className: "transition-colors hover:text-foreground", children: "Terms" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://mail.google.com/mail/?view=cm&fs=1&to=support.ortio@gmail.com", target: "_blank", rel: "noopener noreferrer", className: "transition-colors hover:text-foreground", children: "Contact" })
    ] })
  ] }) });
}
export {
  Index as component
};
