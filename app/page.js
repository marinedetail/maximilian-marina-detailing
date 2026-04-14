"use client";

export default function MaximilianMarinaDetailingWebsite() {
  const services = [
    {
      title: "Boat Detailing",
      description:
        "Complete washdowns, interior cleaning, vinyl wipe-downs, compartment cleaning, and final shine for your boat.",
    },
    {
      title: "Jet Ski Detailing",
      description:
        "Professional cleaning and restoration for personal watercraft, trailers, and storage-ready finishing.",
    },
    {
      title: "Polishing & Waxing",
      description:
        "Bring back gloss, depth, and protection with marine-safe polishing and wax application.",
    },
    {
      title: "Ceramic Coating",
      description:
        "Long-lasting protection against sun, oxidation, salt, and water spotting with a premium finish.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Request a Quote",
      description: "Send your boat type, size, location, and the services you need.",
    },
    {
      step: "2",
      title: "Get Pricing",
      description: "We review your details and send back a fast estimate.",
    },
    {
      step: "3",
      title: "Schedule Service",
      description: "Pick a time that works for you and lock in your appointment.",
    },
    {
      step: "4",
      title: "We Come to You",
      description: "Mobile service at your marina, dock, driveway, or storage location.",
    },
  ];

  const packages = [
    {
      name: "Wash & Refresh",
      details: "Quick exterior wash, wipe-down, dry, and finishing touch-up.",
    },
    {
      name: "Full Detail",
      details: "Interior and exterior detailing with polishing, cleaning, and restoration care.",
    },
    {
      name: "Premium Protection",
      details: "Full detail plus polishing, waxing, or ceramic protection for long-term shine.",
    },
  ];

  const faq = [
    {
      question: "Do you come to my marina or storage location?",
      answer: "Yes. We are a mobile service and can come to marinas, storage lots, docks, and many residential locations.",
    },
    {
      question: "How do I get a quote?",
      answer: "Use the quote form and include your boat type, size, condition, and location. We will review it and send pricing back.",
    },
    {
      question: "Do you work on jet skis too?",
      answer: "Yes. We offer detailing for both boats and jet skis.",
    },
    {
      question: "Can I request a specific day?",
      answer: "Yes. Use the booking form to request your preferred date and time.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-black tracking-wide text-slate-900">MAXIMILIAN</div>
            <div className="-mt-1 text-sm font-semibold tracking-[0.28em] text-sky-700">MARINA DETAILING</div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-slate-900">Services</a>
            <a href="#packages" className="text-sm font-medium text-slate-600 hover:text-slate-900">Packages</a>
            <a href="#quote" className="text-sm font-medium text-slate-600 hover:text-slate-900">Quote</a>
            <a href="#booking" className="text-sm font-medium text-slate-600 hover:text-slate-900">Booking</a>
            <a href="#contact" className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Call Now</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),_transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Mobile Boat & Jet Ski Detailing
            </div>
            <h1 className="mt-5 max-w-2xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Premium marine detailing that comes to you.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Maximilian Marina Detailing provides professional mobile boat and jet ski detailing with easy online quote requests and booking inquiries.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#quote" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5">
                Get a Quote
              </a>
              <a href="#booking" className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5">
                Book a Service
              </a>
            </div>
            <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm text-slate-500">Phone</div>
                <div className="mt-1 font-semibold">210-585-0046</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
                <div className="text-sm text-slate-500">Email</div>
                <div className="mt-1 break-all font-semibold">mmarinadetailing@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Serving Your Area</div>
              <h2 className="mt-3 text-3xl font-bold">Mobile service for boats and jet skis</h2>
              <p className="mt-4 leading-7 text-slate-300">
                We travel to marinas, private docks, storage facilities, and approved customer locations to make detailing simple and convenient.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Fast quote requests",
                  "Professional detailing packages",
                  "Easy booking inquiry form",
                  "Clean modern customer experience",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Services</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Marine detailing services built for convenience</h2>
          <p className="mt-4 text-slate-600">
            Clear service cards help customers instantly understand what you offer and guide them toward requesting a quote.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">How it works</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Simple process from quote to appointment</h2>
              <div className="mt-8 grid gap-4">
                {process.map((item) => (
                  <div key={item.step} className="flex gap-4 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="packages">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Packages</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Show customers clear options</h2>
              <div className="mt-8 grid gap-4">
                {packages.map((pkg) => (
                  <div key={pkg.name} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="text-xl font-bold">{pkg.name}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{pkg.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div id="quote" className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Get a quote</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Quote request form</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This form can be connected later to Formspree, email, or another lead form service.
            </p>
            <form action="https://formspree.io/f/mlgadnyp" method="POST" className="mt-6 space-y-4">
              <input name="name" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-900" placeholder="Full name" />
              <div className="grid gap-4 md:grid-cols-2">
                <input name="phone" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Phone number" />
                <input name="email" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Email" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input name="boat_type" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Boat type" />
                <input name="boat_size" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Boat length / size" />
              </div>
              <input name="location" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none" />
              <textarea className="min-h-[130px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Tell us the condition of the boat, what services you want, and anything else we should know" />
              <button type="submit" className="w-full rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
                Submit Quote Request
              </button>
            </form>
          </div>

          <div id="booking" className="rounded-[32px] border border-slate-200 bg-slate-950 p-7 text-white shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Book service</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Booking inquiry form</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Use this section for preferred appointment requests before you connect a live scheduler.
            </p>
            <form action="https://formspree.io/f/mlgadnyp" method="POST" className="mt-6 space-y-4">
               <div className="grid gap-4 md:grid-cols-2">
                
  <input
    type="date"
    name="preferred_date"
    className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none"
    required
  />

  <input
    type="time"
    name="preferred_time"
    className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none"
    required
  />
</div>
              <select name="service" className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none">
                <option className="text-slate-900">Select service</option>
                <option className="text-slate-900">Boat Detailing</option>
                <option className="text-slate-900">Jet Ski Detailing</option>
                <option className="text-slate-900">Polishing & Waxing</option>
                <option className="text-slate-900">Ceramic Coating</option>
              </select>
              <input name="service_address" className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Service address / marina / dock" />
              <textarea name="booking_details" className="min-h-[130px] w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Extra details about access, watercraft, or preferred setup" />
              <button type="submit" className="w-full rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900">
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">FAQ</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Answers customers will want before booking</h2>
              <div className="mt-8 space-y-4">
                {faq.map((item) => (
                  <div key={item.question} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="font-bold">{item.question}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="contact" className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Contact</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Ready to clean up your boat?</h2>
              <p className="mt-4 leading-7 text-slate-600">
                This contact block gives customers an easy final call-to-action.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm text-slate-500">Phone</div>
                  <div className="mt-1 text-lg font-semibold">210-585-0046</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="mt-1 break-all text-lg font-semibold">mmarinadetailing@gmail.com</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm text-slate-500">Service Type</div>
                  <div className="mt-1 text-lg font-semibold">Mobile marine detailing</div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
<a href="tel:2105850046" className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
  Call Now
</a>
<a href="mailto:mmarinadetailing@gmail.com" className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-900">
  Email Me
</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
