const stats = [
  { value: "60+", label: "years of service to Thika" },
  { value: "24/7", label: "emergency, maternity, lab, imaging and pharmacy" },
  { value: "2", label: "modern operating theatres" },
  { value: "20+", label: "visiting consultant specialists" },
  { value: "100+", label: "outpatients cared for every day" },
];

export function Stats() {
  return (
    <section className="bg-navy py-14 text-white sm:py-16" aria-label="Hospital at a glance">
      <div className="container-x">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col border-l border-white/15 pl-5">
              <dt className="order-2 mt-1 text-sm leading-snug text-white/70">{s.label}</dt>
              <dd className="order-1 font-display text-4xl text-gold sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
