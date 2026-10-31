import Image from "next/image";
import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(905) 376-2922";
const TEL = "tel:+19053762922";
const SMS = "sms:+19053762922";
const MAPS = "https://www.google.com/maps/search/?api=1&query=S%20D%20Property%20Maintenance&query_place_id=ChIJnzzGoHvl1YkRZGEB8yFolow";

const hours = [
  ["Monday – Saturday", "9 a.m. – 5 p.m."],
  ["Sunday", "Closed"],
];

const services = [
  {
    icon: "snow",
    name: "Snow removal & plowing",
    text: "Season-long driveway clearing on a schedule we watch for you. After every storm the crew shows up without being called, and we keep an eye on the forecast so the next clearing is already planned.",
    featured: true,
  },
  {
    icon: "truck",
    name: "Long & packed driveways",
    text: "Big rural driveways and packed-down snow that a home snowblower can't move. We plow, and where it takes it, we shovel by hand until you can get the car out.",
  },
  {
    icon: "route",
    name: "Driveway & walkway paving",
    text: "Paving work for driveways and walkways, one of the services our customers hire us for most. Call to talk through the job and we will come and look at it.",
  },
  {
    icon: "sprout",
    name: "Spring work & landscaping",
    text: "When the snow is gone, the same crew handles spring work: clean-ups, new sod, edging and garden beds. Customers who start with us in winter often keep us for spring.",
  },
  {
    icon: "mower",
    name: "Lawn & grounds care",
    text: "Summer grounds work to keep the property looking cared for, so you are not juggling a different company for every season.",
  },
  {
    icon: "calendar",
    name: "All-season contracts",
    text: "One crew, all year: winter snow plus spring and summer property care. Many of our customers book us season after season rather than one job at a time.",
  },
];

const reviews = [
  { name: "Jeff D.", job: "All-season work, large driveways", text: "Highly recommend SD Property Maintenance for all-season work. This winter they maintained our large driveways, coming after every snow storm and anticipating when we would need snow removal next. Dan and the crew were great, so we hired them for spring work too, and I'm glad we did." },
  { name: "Marilyn S.", job: "Plowing after a major storm", text: "After a major snowstorm we couldn't clear our long driveway with our own equipment because the snow was packed. We called S D Property and the boys came and plowed and shovelled us out the next day at a reasonable price. Very appreciative." },
  { name: "Angela H.", job: "Snow clearing", text: "Scott did an amazing job. He came on his day off and cleared the snow way back. Efficient, and the price was great. I will recommend his services." },
  { name: "Gerda G.", job: "Property & landscaping", text: "Love the work they do. Hard working, and we love their designs." },
  { name: "Elijah R.", job: "Regular service", text: "Always on time." },
];

const steps = [
  { title: "Call or text", text: "Tell us about your property: how long the driveway is, what you need cleared, and whether you want a full season or a one-time visit." },
  { title: "We take a look", text: "Dan or Scott comes out, walks the driveway and the grounds with you, and gives you a fair price." },
  { title: "We put you on the list", text: "For snow, you are on our route for the winter. We watch the weather and come after every storm, without you calling." },
  { title: "Spring comes, we're still here", text: "When the snow melts, the same crew can handle spring clean-up, paving and grounds work." },
];

const faqs = [
  { q: "Do I have to call you every time it snows?", a: "No. That is the whole point of our seasonal service. Once you are on our route, we come after every storm and plan the next clearing ahead of time. Customers tell us they never have to think about it." },
  { q: "Can you handle a really long or packed driveway?", a: "Yes. Long rural driveways and packed snow that defeats a home snowblower are exactly what customers call us for. We plow and, where needed, shovel by hand." },
  { q: "What if I just need a one-time clear-out after a big storm?", a: "Call us. We have dug customers out the day after a major storm when their own equipment couldn't do it. Seasonal customers come first during a storm, so call early." },
  { q: "What do you do outside of winter?", a: "Driveway and walkway paving, spring work, landscaping and lawn and grounds care. Many customers start with snow removal and keep us on for spring." },
  { q: "What are your hours?", a: "Our listed office hours are Monday to Saturday, 9 a.m. to 5 p.m., closed Sunday. Snow doesn't keep office hours, and neither does our storm route." },
  { q: "What areas do you serve?", a: "We work in Port Hope and the surrounding Northumberland County area. If you are not sure whether you are on our side of the map, call (905) 376-2922 and ask." },
  { q: "How much does it cost?", a: "It depends on the length of the driveway and the kind of work. Customers describe our pricing as reasonable and great value. We will give you a price after we see the property." },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "S D Property Maintenance",
    telephone: "+1-905-376-2922",
    image: "/images/p1.jpg",
    geo: { "@type": "GeoCoordinates", latitude: 44.0938785, longitude: -78.447671 },
    address: { "@type": "PostalAddress", addressRegion: "ON", addressCountry: "CA" },
    areaServed: ["Port Hope", "Northumberland County"],
    openingHours: "Mo-Sa 09:00-17:00",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "8" },
    hasMap: MAPS,
  };

  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hidden bg-brand-dark text-sm text-brand-soft md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Port Hope &amp; Northumberland County</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Mon – Sat 9 a.m. – 5 p.m.</span>
          <span className="flex items-center gap-2"><Icon name="heart" className="h-4 w-4" /> LGBTQ+ friendly</span>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5 text-brand-dark">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white"><Icon name="snow" className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block text-lg font-bold">S D Property</span>
              <span className="block text-sm font-medium text-muted">Maintenance</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-medium text-ink lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Service area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden text-lg font-bold text-brand-dark md:block">{PHONE}</a>
            <a href={TEL} className="ring-phone btn hidden bg-cta text-white hover:bg-cta-dark sm:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-11 w-11 place-items-center rounded-full bg-cta text-white sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        <section className="bg-paper">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-12 md:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-sm font-semibold text-brand-dark">
                <Icon name="snow" className="h-4 w-4" /> Booking winter snow routes now
              </p>
              <h1 className="text-[clamp(2.2rem,4.8vw,3.5rem)] font-bold text-brand-dark">
                Snow Removal &amp; Property Maintenance in Port Hope and Northumberland County
              </h1>
              <p className="mt-5 max-w-[56ch] text-lg text-muted md:text-xl">
                We come after every storm, so you never have to call. Dan, Scott and the crew keep long driveways clear all winter, then handle paving, spring work and grounds care when the snow is gone.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="ring-phone btn bg-cta px-7 text-lg text-white hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn border-2 border-brand px-7 text-lg text-brand-dark hover:bg-brand-soft"><Icon name="text" className="h-5 w-5" /> Text us</a>
              </div>
              <a href={MAPS} target="_blank" rel="noopener" className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold text-ink">
                <Stars className="h-5 w-5" />
                <span>5.0 · 8 Google reviews</span>
                <span className="text-line" aria-hidden>|</span>
                <span>All-season service</span>
                <span className="text-line" aria-hidden>|</span>
                <span>LGBTQ+ friendly</span>
              </a>
            </div>
            <div className="reveal">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_60px_-32px_oklch(0.33_0.065_205/0.5)]">
                <Image src="/images/p1.jpg" alt="Freshly laid sod and stone edging on a large rural property maintained by S D Property Maintenance" fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              </div>
              <div className="relative mx-4 -mt-10 rounded-2xl border border-line bg-white p-5 shadow-[0_20px_40px_-26px_oklch(0.33_0.065_205/0.5)]">
                <p className="flex items-center gap-2 font-semibold text-brand-dark"><Icon name="clock" className="h-5 w-5 text-brand" /> Quick facts</p>
                <ul className="mt-3 grid gap-2 text-[0.97rem] text-muted sm:grid-cols-2">
                  <li className="flex gap-2"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand" /> Out after every storm</li>
                  <li className="flex gap-2"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand" /> Long &amp; packed driveways</li>
                  <li className="flex gap-2"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand" /> Paving &amp; spring work</li>
                  <li className="flex gap-2"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand" /> Mon – Sat, 9 – 5</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Why customers trust us" className="border-y border-line bg-tint">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "award", big: "5.0 stars", small: "8 Google reviews" },
              { icon: "bolt", big: "Proactive", small: "we come, you don't call" },
              { icon: "repeat", big: "All season", small: "snow, paving, grounds" },
              { icon: "heart", big: "LGBTQ+", small: "friendly business" },
            ].map((t) => (
              <div key={t.big} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white"><Icon name={t.icon} className="h-5 w-5" /></span>
                <div>
                  <p className="font-bold leading-tight text-brand-dark">{t.big}</p>
                  <p className="text-sm text-muted">{t.small}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[62ch]">
              <p className="font-semibold text-brand">Our services</p>
              <h2 className="mt-2 text-3xl font-bold text-brand-dark md:text-[2.5rem]">One crew for your property, every season</h2>
              <p className="mt-4 text-lg text-muted">Winter is our busiest season, but it isn&apos;t the only one. Here is what we take care of around the year.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal lift flex flex-col rounded-2xl border bg-white p-7 ${s.featured ? "border-2 border-brand" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">Most requested</span>}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-brand-dark">{s.name}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-semibold text-brand">Reviews</p>
                <h2 className="mt-2 text-3xl font-bold text-brand-dark md:text-[2.5rem]">Rated 5.0 from 8 Google reviews</h2>
                <p className="mt-3 max-w-[56ch] text-lg text-muted">Every single review is five stars. The thing people mention most: we show up before they even have to ask.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener" className="btn shrink-0 border-2 border-brand text-brand-dark hover:bg-brand-soft">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <figure className="reveal mt-12 rounded-3xl bg-brand p-8 text-white md:p-12">
              <Stars className="h-5 w-5" />
              <blockquote className="mt-4 max-w-[60ch] text-xl font-medium leading-relaxed md:text-2xl">&ldquo;{reviews[0].text}&rdquo;</blockquote>
              <figcaption className="mt-5 text-brand-soft"><span className="font-semibold text-white">{reviews[0].name}</span> · {reviews[0].job} · Google review</figcaption>
            </figure>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {reviews.slice(1).map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl border border-line bg-white p-6">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 border-t border-line pt-3">
                    <span className="block font-semibold text-ink">{r.name}</span>
                    <span className="text-sm text-muted">{r.job} · Google</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <p className="font-semibold text-brand">About us</p>
              <h2 className="mt-2 text-3xl font-bold text-brand-dark md:text-[2.5rem]">The crew that's already on its way when the snow stops</h2>
              <div className="mt-5 space-y-4 text-lg text-muted">
                <p>S D Property Maintenance is a small, local, all-season property company. Dan and Scott run the crew, and you will see one of them on your driveway, not a stranger from a call centre.</p>
                <p>We built our name on winter. Our customers have big driveways, rural lanes and packed snow that their own snowblowers can&apos;t touch. So we don&apos;t wait for the phone: after every storm, we come. We watch the forecast so the next clearing is already on the schedule.</p>
                <p>When spring arrives we stay busy with paving, clean-ups, sod and grounds work. Lots of our customers started with one snowstorm and now keep us all year. We are also proud to be an LGBTQ+ friendly business, and everyone is welcome to call.</p>
              </div>
            </div>
            <ul className="reveal grid content-center gap-4 sm:grid-cols-2">
              {[
                { icon: "bolt", t: "We come without the call", d: "After every storm, on our own schedule." },
                { icon: "users", t: "Goes the extra mile", d: "Scott once came out on his day off." },
                { icon: "tag", t: "Reasonable prices", d: "Customers call it great value." },
                { icon: "clock", t: "Always on time", d: "Reliable, season after season." },
              ].map((d) => (
                <li key={d.t} className="lift rounded-2xl border border-line bg-tint p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand"><Icon name={d.icon} className="h-5 w-5" /></span>
                  <p className="mt-4 text-lg font-semibold text-brand-dark">{d.t}</p>
                  <p className="mt-1 text-muted">{d.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[60ch]">
              <p className="font-semibold text-brand">How it works</p>
              <h2 className="mt-2 text-3xl font-bold text-brand-dark md:text-[2.5rem]">Getting on our route is easy</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cta text-lg font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-dark">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="area" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal">
              <p className="font-semibold text-brand">Service area &amp; hours</p>
              <h2 className="mt-2 text-3xl font-bold text-brand-dark md:text-[2.5rem]">Serving Port Hope and Northumberland County</h2>
              <p className="mt-4 text-lg text-muted">We work the rural roads and long driveways north of Port Hope and around the Northumberland area. Call to check if your property is on our route.</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {["Port Hope", "Northumberland County", "Rural properties nearby"].map((a) => (
                  <li key={a} className="flex items-center gap-1.5 rounded-full border border-line bg-tint px-4 py-2 font-medium text-brand-dark"><Icon name="pin" className="h-4 w-4 text-brand" /> {a}</li>
                ))}
              </ul>
              <dl className="mt-8 divide-y divide-line rounded-2xl border border-line">
                {hours.map(([d, h]) => (
                  <div key={d} className="flex justify-between px-5 py-3"><dt className="font-medium">{d}</dt><dd className="text-muted">{h}</dd></div>
                ))}
              </dl>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map of the S D Property Maintenance service area" src="https://maps.google.com/maps?q=44.0938785,-78.447671&z=10&output=embed" className="h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <div className="reveal">
              <p className="font-semibold text-brand">FAQ</p>
              <h2 className="mt-2 text-3xl font-bold text-brand-dark md:text-[2.5rem]">Good questions, straight answers</h2>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="reveal rounded-2xl border border-line bg-white px-6">
                  <summary className="flex items-center justify-between gap-4 py-5 text-lg font-semibold text-ink">
                    {f.q}
                    <span className="faq-toggle grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="pb-5 pr-8 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-dark py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 md:px-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-[2.5rem]">Let the next storm be our problem.</h2>
              <p className="mt-3 max-w-[54ch] text-lg text-brand-soft">Call Dan or Scott at {PHONE} to get on the winter route, or to book paving and spring work. Monday to Saturday, 9 a.m. to 5 p.m.</p>
            </div>
            <a href={TEL} className="ring-phone btn shrink-0 bg-cta px-8 text-lg text-white hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
          </div>
        </section>
      </main>

      <footer className="bg-paper pb-24 pt-14 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
          <div>
            <p className="text-2xl font-bold text-brand-dark">S D Property Maintenance</p>
            <p className="mt-3 max-w-[38ch] text-muted">Snow removal, paving and all-season property care for Port Hope and Northumberland County.</p>
            <a href={TEL} className="mt-5 inline-flex items-center gap-2 text-xl font-bold text-brand"><Icon name="phone" className="h-5 w-5" /> {PHONE}</a>
          </div>
          <div>
            <p className="font-semibold text-ink">Services</p>
            <ul className="mt-3 space-y-2 text-muted">
              {services.map((s) => <li key={s.name}><a href="#services" className="hover:text-brand">{s.name}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">Hours</p>
            <ul className="mt-3 space-y-2 text-muted">
              {hours.map(([d, h]) => <li key={d}>{d}: {h}</li>)}
              <li><a href={MAPS} target="_blank" rel="noopener" className="hover:text-brand">Find us on Google (5.0 ★)</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[1200px] border-t border-line px-5 pt-6 text-sm text-muted md:px-6">
          © {new Date().getFullYear()} S D Property Maintenance · Port Hope &amp; Northumberland County, Ontario
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper p-2.5 md:hidden">
        <a href={TEL} className="btn bg-cta text-white"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn bg-brand text-white"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
