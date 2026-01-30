// components/Features.tsx
const features = [
  {
    title: "Issue Tracking",
    description:
      "Create, assign, and track issues with clear status and ownership.",
  },
  {
    title: "Team Collaboration",
    description:
      "Discuss issues, add comments, and keep everyone aligned.",
  },
  {
    title: "Project Visibility",
    description:
      "Get a clear overview of project progress and bottlenecks.",
  },
  {
    title: "Developer Friendly",
    description:
      "Clean UI, fast workflows, and no unnecessary complexity.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="h-screen relative flex justify-center items-center py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center mb-10 text-6xl font-bold text-foreground">
          Everything you need to manage <span className='text-primary'>issues.</span>
        </h2>

        <div className="mt-16 my-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2 justify-between justify-items-center flex-wrap">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl hover:bg-card/70 transition-all duration-200 h-55 w-125 border-border bg-card p-6"
            >
                
              <h3 className="text-2xl text-center font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-lg text-center text-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
