import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — DMHCA" },
      { name: "description", content: "Meet the consultants and academic faculty who lead DMHCA programs." },
    ],
  }),
  component: Faculty,
});

const faculty = [
  { name: "Dr. Mysara Mohyeldin", role: "Director · Diabetology", bio: "Endocrinologist with 25+ years of clinical and academic experience. Leads DMHCA's diabetology programs." },
  { name: "Dr. Aarti Sharma", role: "Lead Faculty · Radiology", bio: "Consultant radiologist with a sub-specialty in abdominal and women's imaging." },
  { name: "Dr. Vikram Iyer", role: "Faculty · Cardiology", bio: "Interventional cardiologist and educator with 1,500+ PCIs to his name." },
  { name: "Dr. Priya Nair", role: "Faculty · Obs & Gynae", bio: "Maternal-fetal medicine specialist focused on antenatal imaging and infertility." },
  { name: "Dr. Rohan Kapoor", role: "Faculty · Emergency Medicine", bio: "Emergency physician and trauma lead at a tertiary care centre." },
  { name: "Dr. Anita Banerjee", role: "Faculty · Dermatology", bio: "Cosmetic dermatologist; leads our aesthetic medicine fellowship." },
];

function Faculty() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x py-14">
          <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule">Faculty</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-deep mt-3 max-w-3xl">Taught by practising consultants.</h1>
        </div>
      </section>
      <section className="container-x py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((f) => (
          <div key={f.name} className="bg-card border border-border rounded-md p-6">
            <div className="w-14 h-14 rounded-full bg-navy-deep text-primary-foreground font-display text-xl grid place-items-center">{f.name.split(" ").slice(-1)[0][0]}</div>
            <div className="font-display text-xl text-navy-deep mt-4">{f.name}</div>
            <div className="text-xs uppercase tracking-[0.18em] text-gold mt-1">{f.role}</div>
            <p className="text-sm text-muted-foreground mt-3">{f.bio}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
