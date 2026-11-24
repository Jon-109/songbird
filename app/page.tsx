import { readdirSync } from "fs";
import path from "path";
import { PhotoCarousel, type CarouselPhoto } from "@/components/photo-carousel";
import { BirdBadge } from "@/components/bird-badge";
import { SiteNav } from "@/components/site-nav";
import { Reveal } from "@/components/reveal";
import { BackToTop } from "@/components/back-to-top";

const focalOverrides: Record<string, string> = {
  "IMG_1128.jpg": "50% 15%",
};

function getPhotos(): CarouselPhoto[] {
  let files: string[];
  try {
    files = readdirSync(path.join(process.cwd(), "public", "photos"));
  } catch {
    return [];
  }
  return files
    .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file) && !file.startsWith("."))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map((file, index) => ({
      src: `/photos/${file}`,
      alt: `Mockingbird Hill community photo ${index + 1}`,
      objectPosition: focalOverrides[file],
    }));
}

const milestones = [
  {
    year: "Est. 1993",
    title: "Three decades of neighbor advocacy",
    body: "Grown from informal living-room gatherings into a recognized District 8 neighborhood voice.",
    accent: "bg-blue-950 text-white",
  },
  {
    year: "Denman Park",
    title: "220-condo plan turned into parkland",
    body: "Organized neighbors helped preserve Denman Estate as the public park families enjoy today.",
    accent: "bg-emerald-700 text-white",
  },
  {
    year: "Street Character",
    title: "Traffic, height & lighting protections",
    body: "Blocked cut-through apartment traffic on Mockingbird Lane, capped building heights, and upgraded street lighting.",
    accent: "bg-slate-800 text-white",
  },
];

const guidelines = [
  {
    label: "01",
    title: "Pets & Urban Critters",
    copy: "Avoid leaving pet food out overnight, keep dogs leashed on walks, and carry cleanup bags.",
  },
  {
    label: "02",
    title: "Yards & Trees",
    copy: "Raked leaves, trimmed lawns, healthy mature trees, and clear alleyways keep every block inviting.",
  },
  {
    label: "03",
    title: "Trash & Lids",
    copy: "Keep trash secured inside bins with closed lids to preserve curb appeal and discourage wildlife.",
  },
  {
    label: "04",
    title: "Be a Good Neighbor",
    copy: "Wave hello on the street, look out for one another, and lend a hand whenever a neighbor needs it.",
  },
];

const committee = [
  ["Vicki Vaughan", "President", "VV"],
  ["Warren Young", "Vice President", "WY"],
  ["Victoria Valerga", "Secretary", "VV"],
  ["Rosantina Aranda", "Treasurer", "RA"],
] as const;

const cardLift =
  "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-950/5";

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal className={`mb-5 w-full ${centered ? "text-center" : ""}`}>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-emerald-800">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
        {eyebrow}
      </span>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-[1.75rem] lg:whitespace-nowrap lg:text-[1.95rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-[0.95rem] lg:whitespace-nowrap">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export default function Home() {
  const photos = getPhotos();
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      {/* Slim Top Announcement Banner */}
      <div className="bg-blue-950 px-3 py-1.5 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-center text-[0.72rem] font-medium leading-tight sm:text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.15em] text-white">
            Save the Date
          </span>
          <span className="font-semibold text-white">
            Next Meeting: MHNA Christmas Party — December 5, 2026
          </span>
          <span className="hidden text-blue-300 sm:inline">•</span>
          <span className="text-blue-200">More details to follow</span>
        </div>
      </div>

      <SiteNav />

      {/* Hero Section — Top-aligned, Clean Soft Gradient (No Lines) */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-sky-50/90 via-white to-emerald-50/75 px-4 pb-8 pt-5 sm:px-6 sm:pb-9 sm:pt-6 lg:px-8"
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Full-width Header directly below nav */}
          <div className="mb-5">
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-blue-900/12 bg-white/90 px-3 py-1 text-xs font-semibold text-blue-950 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Serving San Antonio’s District 8 Neighbors Since 1993
            </div>
            <h1 className="w-full text-[clamp(1.85rem,3.95vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-blue-950 lg:whitespace-nowrap">
              Building a better Mockingbird Hill{" "}
              <span className="font-display font-normal italic text-emerald-700">
                together.
              </span>
            </h1>
          </div>

          {/* Top-Aligned Two-Column Row: Compact Left Card | Compact Right Event Card */}
          <div className="grid items-start gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
            {/* Left Column Box: 3-line max subheader + inline stats + CTAs */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md shadow-blue-950/5 sm:p-6">
              <p className="text-sm leading-6 text-slate-600 sm:text-[0.95rem] sm:leading-[1.6rem]">
                Mockingbird Hill Neighborhood Association brings neighbors together to share ideas, protect the character of our tree-lined streets, and stay connected to meetings, seasonal events, and District 8 updates.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2 border-y border-slate-100 py-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800">
                  <span className="text-blue-900">Est. 1993</span> · 30+ Years Active
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-900">
                  District 8 · San Antonio
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-900">
                  100% Neighbor-Led
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-600"
                >
                  <span>Explore Our Story</span>
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Get in Touch
                </a>
                {photos.length > 0 && (
                  <a
                    href="#photos"
                    className="inline-flex items-center justify-center px-2.5 py-2 text-sm font-bold text-blue-900 underline decoration-blue-900/35 underline-offset-4 transition hover:text-emerald-800"
                  >
                    See Community Photos
                  </a>
                )}
              </div>
            </div>

            {/* Right Column Box: Upcoming Christmas Party Card (No Empty Space) */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md shadow-blue-950/5 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
                <div className="flex min-w-0 items-center gap-3">
                  <BirdBadge id="hero-card-logo" className="h-12 w-12" />
                  <div className="min-w-0">
                    <span className="inline-block rounded-full bg-red-50 px-2.5 py-0.5 text-[0.64rem] font-extrabold uppercase tracking-[0.15em] text-red-700 ring-1 ring-red-200">
                      Next Meeting · Save the Date
                    </span>
                    <h2 className="mt-1 truncate text-lg font-extrabold tracking-tight text-slate-950 sm:text-xl">
                      MHNA Christmas Party
                    </h2>
                    <p className="text-xs font-semibold text-slate-600 sm:text-sm">
                      Saturday, December 5, 2026 · More details to follow
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 flex-col items-center justify-center rounded-xl border border-red-100 bg-red-50/80 px-3 py-1.5 text-center sm:flex">
                  <span className="text-[0.62rem] font-extrabold uppercase tracking-widest text-red-700">Dec</span>
                  <span className="text-xl font-black leading-none text-slate-950">05</span>
                </div>
              </div>

              <div className="mt-3.5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-blue-50/75 p-3.5">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.13em] text-blue-900">
                    What to expect
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-700 sm:text-sm">
                    A festive holiday celebration with food, drinks, and good company.
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/85 p-3.5">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.13em] text-emerald-900">
                    Who should attend
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-700 sm:text-sm">
                    All Mockingbird Hill residents — meet neighbors and stay informed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story — Structured Bento Grid */}
      <section id="about" className="bg-dot-slate border-b border-slate-200/80 bg-slate-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Story"
            title="A collective neighborhood voice with real results."
            subtitle="For over thirty years, neighbors working side by side have shaped Mockingbird Hill into one of District 8’s most cared-for communities."
          />

          <div className="grid gap-4 lg:grid-cols-[1.28fr_0.92fr] lg:gap-5">
            <Reveal className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs sm:p-6">
                <div className="space-y-3 text-sm leading-6 text-slate-700 sm:text-[0.95rem] sm:leading-7">
                  <p className="font-semibold text-slate-900">
                    Since 1993, the Mockingbird Hill Neighborhood Association has served as a welcoming forum for resident ideas and local concerns while responding thoughtfully to changes affecting quality of life.
                  </p>
                  <p>
                    Over the years, MHNA has secured lasting wins for our streets. Neighbors organized to prevent cut-through apartment traffic from opening onto Mockingbird Lane, helped cap nearby building heights, and partnered with CPS Energy and city departments to improve neighborhood lighting.
                  </p>
                  <p>
                    When a 220-unit condo complex was proposed for the historic Denman Estate, residents rallied together and helped preserve that land as the public park families enjoy across San Antonio today.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold text-slate-700 sm:text-sm">
                    Every resident voice makes our association stronger.
                  </p>
                  <a
                    href="#committee"
                    className="text-xs font-bold text-blue-900 underline decoration-blue-900/30 underline-offset-4 transition hover:text-emerald-800 sm:text-sm"
                  >
                    Meet the 2026 Committee →
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-3">
              {milestones.map((item, idx) => (
                <Reveal key={item.year} delay={idx * 60}>
                  <div className={`rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs sm:p-5 ${cardLift}`}>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`rounded-full px-2.5 py-0.5 text-[0.7rem] font-extrabold tracking-wide ${item.accent}`}>
                        {item.year}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-950 sm:text-base">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborly Notes / Guidelines */}
      <section id="guidelines" className="border-b border-slate-200/80 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Neighborly Notes"
            title="Everyday habits that keep Mockingbird Hill welcoming."
            align="center"
          />

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {guidelines.map((item, i) => (
              <Reveal key={item.title} delay={i * 55} className="h-full">
                <div className={`flex h-full flex-col rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 shadow-xs ${cardLift} hover:bg-white`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-950 text-xs font-extrabold tracking-wider text-white">
                      {item.label}
                    </div>
                    <h3 className="text-sm font-extrabold leading-snug text-slate-950 sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4">
            <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/90 px-5 py-3 text-center sm:flex-row sm:text-left">
              <p className="text-xs font-semibold text-emerald-950 sm:text-sm">
                Have a neighborhood question, suggestion, or concern? Reach out to an MHNA Executive Committee member anytime.
              </p>
              <a
                href="#contact"
                className="shrink-0 rounded-full bg-emerald-800 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700"
              >
                Email MHNA
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Executive Committee & District 8 */}
      <section id="committee" className="border-b border-slate-200/80 bg-slate-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="2026 Leadership"
            title="Neighbors serving neighbors."
            subtitle="Volunteer officers elected by residents, alongside our City of San Antonio District 8 representatives."
            align="center"
          />

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {committee.map(([name, role, initials], i) => (
              <Reveal key={name} delay={i * 55} className="h-full">
                <div className={`flex h-full items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs ${cardLift}`}>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-950 to-emerald-700 text-xs font-extrabold text-white shadow-xs">
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-extrabold text-slate-950 sm:text-base">{name}</h3>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-emerald-800">
                      {role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className={`flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs ${cardLift}`}>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-extrabold text-slate-950">Ivalis Meza Gonzalez</h3>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-emerald-800 ring-1 ring-emerald-200">
                      District 8 Councilmember
                    </span>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-3.5">
                      <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">Downtown Office</p>
                      <p className="mt-0.5 text-xs font-medium text-slate-700 sm:text-sm">City Hall, 100 Military Plaza, SATX 78205</p>
                      <a href="tel:210-207-7086" className="mt-1 inline-block text-xs font-bold text-blue-900 hover:underline sm:text-sm">
                        210-207-7086
                      </a>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3.5">
                      <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">Constituent Office</p>
                      <p className="mt-0.5 text-xs font-medium text-slate-700 sm:text-sm">8431 Fredericksburg Rd., Ste 114, SATX 78229</p>
                      <a href="tel:210-207-0943" className="mt-1 inline-block text-xs font-bold text-blue-900 hover:underline sm:text-sm">
                        210-207-0943
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-3.5 border-t border-slate-100 pt-3">
                  <p className="text-xs text-slate-600 sm:text-sm">
                    Contact forms and city updates on the{" "}
                    <a
                      href="https://www.sa.gov/Directory/Departments/Mayor-Council/City-Council/D8"
                      className="font-bold text-blue-900 underline decoration-blue-900/30 underline-offset-4 hover:text-emerald-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      City of San Antonio District 8 page ↗
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={65}>
              <div className={`flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs ${cardLift}`}>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-950">Isaí Fouche Rivera</h3>
                      <p className="text-xs font-semibold text-slate-600">Constituent Services Representative</p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-blue-900 ring-1 ring-blue-200">
                      District 8 Services
                    </span>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-3.5">
                      <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">Direct Phone</p>
                      <a href="tel:210-207-0943" className="mt-1 inline-block text-xs font-bold text-blue-900 hover:underline sm:text-sm">
                        210-207-0943
                      </a>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3.5">
                      <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">Email</p>
                      <a
                        href="mailto:isai.foucherivera@sanantonio.gov"
                        className="mt-1 inline-block break-all text-xs font-bold text-blue-900 hover:underline sm:text-sm"
                      >
                        isai.foucherivera@sanantonio.gov
                      </a>
                    </div>
                  </div>
                </div>
                <p className="mt-3.5 border-t border-slate-100 pt-3 text-xs text-slate-600 sm:text-sm">
                  Reach out for city service requests, street maintenance, lighting, or code inquiries in Mockingbird Hill.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Community Photos Carousel */}
      {photos.length > 0 && (
        <section id="photos" className="border-b border-slate-200/80 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Community Gallery"
              title="Mockingbird Hill in action."
              subtitle="Snapshots from recent neighborhood meetings, speakers, and community gatherings."
            />
            <Reveal>
              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 shadow-xs sm:p-5">
                <PhotoCarousel photos={photos} />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Community Resources */}
      <section
        id="resources"
        className="bg-dot-slate border-b border-slate-200/80 bg-slate-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Community Resources"
            title="Direct contacts for neighborhood support."
            subtitle="Dedicated San Antonio outreach and safety officers assigned to our area."
            align="center"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="h-full">
              <div className={`flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs ${cardLift}`}>
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-950 text-sm font-extrabold text-white shadow-xs">
                    TS
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-extrabold leading-tight text-slate-950 sm:text-lg">
                      Trez Scipio, LMSW
                    </h3>
                    <p className="text-xs font-bold text-blue-900 sm:text-sm">
                      Homeless Outreach Clinical Coordinator · COSA Homeless Services
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 border-t border-slate-100 pt-3.5 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">Office</p>
                    <a href="tel:210-371-9714" className="mt-0.5 inline-block text-xs font-bold text-slate-900 hover:text-blue-900 hover:underline sm:text-sm">
                      210-371-9714
                    </a>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">Email</p>
                    <a href="mailto:Quartrez.Scipio@sanantonio.gov" className="mt-0.5 inline-block break-all text-xs font-bold text-slate-900 hover:text-blue-900 hover:underline sm:text-sm">
                      Quartrez.Scipio@sanantonio.gov
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={65}>
              <div className={`flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs ${cardLift}`}>
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-sm font-extrabold text-white shadow-xs">
                    HM
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-extrabold leading-tight text-slate-950 sm:text-lg">
                      Hunter McCampbell
                    </h3>
                    <p className="text-xs font-bold text-emerald-800 sm:text-sm">
                      SAPD Officer #818 · Prue SAFFE Unit (Assigned to Mockingbird Hill)
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 border-t border-slate-100 pt-3.5 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">Office</p>
                    <a href="tel:210-207-7169" className="mt-0.5 inline-block text-xs font-bold text-slate-900 hover:text-blue-900 hover:underline sm:text-sm">
                      210-207-7169
                    </a>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">Cell</p>
                    <a href="tel:210-382-9226" className="mt-0.5 inline-block text-xs font-bold text-slate-900 hover:text-blue-900 hover:underline sm:text-sm">
                      210-382-9226
                    </a>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">Email</p>
                    <a href="mailto:Hunter.mccampbell@sanantonio.gov" className="mt-0.5 inline-block break-all text-xs font-bold text-slate-900 hover:text-blue-900 hover:underline">
                      Hunter.mccampbell@sanantonio.gov
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Get Connected CTA — Clean Soft Gradient Matching Hero (No Grid Lines) */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-sky-50/90 via-white to-emerald-50/80 px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      >
        <Reveal className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-5 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md shadow-blue-950/5 sm:p-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Get Connected
              </span>
              <h2 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl lg:whitespace-nowrap">
                Have a concern, idea, or new neighbor to welcome?
              </h2>
              <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-[0.95rem]">
                Reach out to the association, join us December 5th for the Christmas Party, or say hello at an upcoming meeting.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-4 sm:p-5">
              <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-emerald-900">
                Association Email
              </p>
              <a
                href="mailto:mhnamembers@gmail.com"
                className="mt-1 inline-block text-base font-extrabold text-blue-950 underline decoration-emerald-600 decoration-2 underline-offset-4 transition hover:text-emerald-800 sm:text-lg"
              >
                mhnamembers@gmail.com
              </a>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Monitored by MHNA Executive Committee volunteers
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="bg-blue-950 px-4 py-5 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <BirdBadge id="footer-logo" className="h-9 w-9" />
            <span className="text-sm font-extrabold text-white">
              Mockingbird Hill Neighborhood Association
            </span>
          </div>
          <p className="text-xs text-blue-200/80">
            © 2026 MHNA · District 8, San Antonio, TX · Building a stronger community, one neighbor at a time.
          </p>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}
