const guidelines = [
  ["Pets & Urban Critters", "Avoid leaving pet food out at night, leash dogs, and carry cleanup bags.", "01"],
  ["Yards & Trees", "Raked leaves, trimmed yards, healthy trees, and cared-for alleyways help everyone.", "02"],
  ["Trash & Lids", "Keep trash inside cans with closed lids to preserve curb appeal and discourage wildlife.", "03"],
];

const committee = [
  ["Vicki Vaughan", "President", "VV"],
  ["Warren Young", "Vice President", "WY"],
  ["Victoria Valerga", "Secretary", "VV"],
  ["Rosantina Aranda", "Treasurer", "RA"],
];

function BirdBadge({ className = "", id = "logo" }: { className?: string; id?: string }) {
  return (
    <svg
      className={`inline-block h-16 w-16 shrink-0 ${className}`}
      viewBox="0 0 240 240"
      role="img"
      aria-label="Mockingbird Hill Neighborhood Association logo"
    >
      <defs>
        <path id={`${id}-topLogoArc`} d="M 48 120 A 72 72 0 0 1 192 120" />
        <path id={`${id}-bottomLogoArc`} d="M 192 120 A 72 72 0 0 1 48 120" />
      </defs>
      <circle cx="120" cy="120" r="114" fill="white" />
      <circle cx="120" cy="120" r="108" fill="none" stroke="black" strokeWidth="11" />
      <circle cx="120" cy="120" r="94" fill="none" stroke="black" strokeWidth="3" />
      <circle cx="120" cy="120" r="61" fill="none" stroke="black" strokeWidth="5" />
      <circle cx="120" cy="120" r="53" fill="black" />
      <text fill="black" fontFamily="Arial, Helvetica, sans-serif" fontSize="12.5" fontWeight="700" letterSpacing="4.2">
        <textPath href={`#${id}-topLogoArc`} startOffset="50%" textAnchor="middle">
          MOCKINGBIRD HILL
        </textPath>
      </text>
      <text fill="black" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2.15">
        <textPath href={`#${id}-bottomLogoArc`} startOffset="50%" textAnchor="middle">
          NEIGHBORHOOD ASSOCIATION
        </textPath>
      </text>
      <text
        x="120"
        y="134"
        fill="white"
        fontFamily="Arial Narrow, Arial, Helvetica, sans-serif"
        fontSize="40"
        fontWeight="800"
        letterSpacing="-3"
        textAnchor="middle"
      >
        MHNA
      </text>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <div className="bg-blue-900 px-4 py-2.5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 text-center text-sm font-semibold sm:flex-row sm:gap-3">
          <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">First Meeting</span>
          <span>Thursday, June 25th at 7:00 PM — 3805 East Songbird Lane</span>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-blue-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <BirdBadge id="nav-logo" className="h-16 w-16" />
            <span className="min-w-0 text-base font-black leading-tight text-slate-950 sm:text-lg lg:text-xl">
              Mockingbird Hill Neighborhood Association
            </span>
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {[
              ["About", "#about"],
              ["Guidelines", "#guidelines"],
              ["Committee", "#committee"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-bold text-slate-600 transition hover:text-emerald-800">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div style={{ backgroundImage: "url('https://files.123freevectors.com/wp-content/original/springtime-birds-blossoms-blue-and-cream-173882513.png')", backgroundSize: "340px" }} className="absolute inset-0 bg-repeat opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/45 to-white/15" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-blue-900/10 bg-white/90 p-6 text-slate-950 shadow-2xl shadow-blue-950/10 backdrop-blur-md sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-900/15 bg-white px-3 py-0.5 text-xs font-semibold text-blue-950 shadow-sm">
              <BirdBadge id="hero-pill-logo" className="h-8 w-8 shadow-none" />
              Serving neighbors since 1993
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
              A stronger, greener Mockingbird Hill.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              A friendly neighborhood association for sharing ideas, protecting quality of life, and keeping residents connected to meetings, events, and local concerns.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#about" className="rounded-full bg-emerald-700 px-6 py-3 text-center text-sm font-black text-white shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-600">
                Learn About MHNA
              </a>
              <a href="#contact" className="rounded-full border border-blue-950/20 bg-white px-6 py-3 text-center text-sm font-black text-blue-950 transition hover:bg-blue-50">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative z-10 rounded-[1.75rem] border border-blue-900/10 bg-white/95 p-5 text-slate-950 shadow-2xl shadow-blue-950/20 backdrop-blur-lg">
            <div className="mb-4 flex items-center gap-4 border-b border-slate-100 pb-4">
              <BirdBadge id="hero-card-logo" className="h-24 w-24" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-900">Next Association Meeting</p>
                <p className="mt-1 text-2xl font-black text-slate-950">June 25 at 7:00 PM</p>
                <p className="mt-1 text-sm font-bold text-slate-600">3805 East Songbird Lane</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-blue-100 p-4">
                <p className="text-sm font-black text-blue-900">What to expect</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Neighborhood updates, concerns, ideas, and 2026 planning.</p>
              </div>
              <div className="rounded-2xl bg-emerald-200 p-4">
                <p className="text-sm font-black text-emerald-950">Who should attend</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Residents who want to stay informed and get involved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-800">Our Story</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A collective voice with results.</h2>
          </div>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="mb-4 leading-7">
              Since 1993, the Mockingbird Hill Neighborhood Association has served as a forum for ideas and concerns while responding to activities that impact quality of life. What started as neighbors gathering to share concerns has grown into a recognized voice that protects the character of our streets.
            </p>
            <p className="mb-4 leading-7">
              Over the years, MHNA has secured real wins for the neighborhood. We prevented new apartment traffic from opening onto Mockingbird Lane, helped limit building height, and worked with CPS and city agencies to improve lighting around our streets. When a 220-condo development was proposed for Denman Estate, neighbors organized and helped turn that land into the park families enjoy today.
            </p>
            <p className="mb-4 leading-7">
              We’ve also taken on smaller but important issues: securing safety signage and a radar speed advisory trailer for Mockingbird Lane, establishing responsibility for Denman pond water level maintenance, and requiring covenants tied to the property west of West Songbird as part of zoning acceptance.
            </p>
            <p className="leading-7">
              The association continues to be a place where residents can raise concerns, share ideas, and work together to keep Mockingbird Hill a safe, welcoming place to call home.
            </p>
          </div>
        </div>
      </section>

      <section id="guidelines" className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-800">Neighborly Notes</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Guidelines that keep blocks welcoming.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {guidelines.map(([title, copy, label]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-xs font-black text-white">{label}</div>
                <h3 className="text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-emerald-400 bg-emerald-200 p-4 text-center text-sm font-bold leading-6 text-emerald-950">
            Contact an MHNA Executive Committee member with concerns or inquiries.
          </div>
        </div>
      </section>

      <section id="committee" className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-800">2026 Executive Committee</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Neighbors serving neighbors.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {committee.map(([name, role, initials]) => (
              <div key={name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:border-blue-300 hover:shadow-lg">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-emerald-700 text-sm font-black text-white">{initials}</div>
                <h3 className="font-black text-slate-950">{name}</h3>
                <p className="mt-1 text-sm font-bold text-blue-900">{role}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-800">District 8 Councilmember</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">Ivalis Meza Gonzalez</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-bold text-slate-700">Downtown Office</p>
                <p className="mt-1 text-sm text-slate-600">City Hall, 100 Military Plaza</p>
                <p className="text-sm text-slate-600">San Antonio, TX 78205</p>
                <p className="mt-1 text-sm font-bold text-blue-900">210-207-7086</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700">Constituent Office</p>
                <p className="mt-1 text-sm text-slate-600">8431 Fredericksburg Rd., Suite 114</p>
                <p className="text-sm text-slate-600">San Antonio, TX 78229</p>
                <p className="mt-1 text-sm font-bold text-blue-900">210-207-0943</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-emerald-200">
              <p className="text-sm text-slate-600">
                Contact form and additional resources available at the{" "}
                <a href="https://www.sa.gov/Directory/Departments/Mayor-Council/City-Council/D8" className="font-bold text-blue-900 underline hover:text-emerald-800" target="_blank" rel="noopener noreferrer">
                  City of San Antonio District 8 page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-400">Get Connected</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Have a concern, idea, or neighbor to welcome?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">Reach out to the association, attend the next meeting, or introduce yourself at an event. The neighborhood works best when more voices are heard.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
            <div className="rounded-2xl bg-white p-4 text-slate-950">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-900">Email</p>
              <p className="mt-1 text-sm font-bold sm:text-base">mhnamembers@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-950 px-4 py-6 text-blue-100 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <BirdBadge id="footer-logo" className="h-12 w-12" />
            <span className="font-black text-white">Mockingbird Hill Neighborhood Association</span>
          </div>
          <p className="text-sm">© 2026 MHNA. Building a stronger community, one neighbor at a time.</p>
        </div>
      </footer>
    </main>
  );
}
