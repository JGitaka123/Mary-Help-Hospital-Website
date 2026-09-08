const stats = [
  { value: "1963", label: "serving Thika since" },
  { value: "35", label: "specialist doctors" },
  { value: "10", label: "specialist clinics" },
  { value: "24/7", label: "open every hour, every day" },
];

export function Stats() {
  return (
    <section className="bg-blue text-white" aria-label="Hospital at a glance">
      <div className="container-x">
        <dl className="grid grid-cols-2 divide-white/15 lg:grid-cols-4 lg:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-start px-4 py-8 first:pl-0 lg:items-center lg:py-10 lg:text-center">
              <dd className="order-1 font-display text-5xl font-semibold sm:text-[3.25rem]">{s.value}</dd>
              <dt className="order-2 mt-1 text-[0.95rem] leading-snug text-white/85">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
