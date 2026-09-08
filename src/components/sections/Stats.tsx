const stats = [
  { value: "60+", label: "years of service to Thika" },
  { value: "24/7", label: "emergency, maternity, laboratory, imaging and pharmacy" },
  { value: "2", label: "modern operating theatres" },
  { value: "20+", label: "visiting consultant specialists" },
  { value: "100+", label: "outpatients cared for every day" },
];

export function Stats() {
  return (
    <section className="bg-blue text-white" aria-label="Hospital at a glance">
      <div className="container-x">
        <dl className="grid grid-cols-2 divide-white/15 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col px-4 py-8 first:pl-0 lg:py-10">
              <dd className="order-1 font-display text-4xl font-semibold sm:text-[2.75rem]">{s.value}</dd>
              <dt className="order-2 mt-1 text-sm leading-snug text-white/85">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
