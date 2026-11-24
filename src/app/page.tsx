import Link from "next/link";
import { jobs } from "@/lib/jobs";

const categories = [
  { name: "Technology", count: "120+ jobs", icon: "⌘" },
  { name: "Design", count: "80+ jobs", icon: "✳" },
  { name: "Marketing", count: "65+ jobs", icon: "↗" },
  { name: "Customer Support", count: "40+ jobs", icon: "☏" },
];

export default function HomePage() {
  const featuredJobs = jobs.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
              <span className="size-2 rounded-full bg-emerald-500" />
              Find your next opportunity
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Find a job that
              <span className="text-indigo-600"> fits your future.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Explore opportunities, discover great companies, and take the
              next step in your career.
            </p>

            <form
              action="/job-search"
              method="GET"
              className="mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-indigo-100/50 sm:flex-row"
            >
              <input
                type="search"
                name="q"
                placeholder="Job title, company, or skill"
                aria-label="Search jobs"
                className="min-w-0 flex-1 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-100"
              />

              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Search Jobs
              </button>
            </form>

            <p className="mt-4 text-sm text-slate-500">
              Popular searches:{" "}
              <Link
                href="/job-search?q=React"
                className="font-medium text-indigo-600 hover:underline"
              >
                React
              </Link>
              {" · "}
              <Link
                href="/job-search?q=Hyderabad"
                className="font-medium text-indigo-600 hover:underline"
              >
                Hyderabad
              </Link>
              {" · "}
              <Link
                href="/job-search?q=Designer"
                className="font-medium text-indigo-600 hover:underline"
              >
                Designer
              </Link>
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -left-6 top-10 size-28 rounded-full bg-violet-200/60 blur-2xl" />
              <div className="absolute -right-5 bottom-8 size-32 rounded-full bg-indigo-200/70 blur-2xl" />

              <div className="relative rounded-3xl border border-white bg-white p-6 shadow-2xl shadow-indigo-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Your next move</p>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Career opportunities
                    </h2>
                  </div>
                  <span className="grid size-12 place-items-center rounded-2xl bg-indigo-100 text-2xl">
                    ✦
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {featuredJobs.map((job) => (
                    <div
                      key={job.id}
                      className="rounded-2xl border border-slate-100 p-4 transition hover:border-indigo-200 hover:bg-indigo-50/40"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                        {job.company}
                      </p>
                      <h3 className="mt-1 font-bold text-slate-900">
                        {job.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {job.location} · {job.type}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/jobs"
                  className="mt-5 block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  View all opportunities →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Explore by category
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Find work you love
            </h2>
          </div>

          <Link
            href="/jobs"
            className="text-sm font-semibold text-indigo-600 hover:underline"
          >
            Browse all jobs →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/job-search?q=${encodeURIComponent(category.name)}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-indigo-50 text-2xl text-indigo-700 transition group-hover:bg-indigo-600 group-hover:text-white">
                {category.icon}
              </span>
              <h3 className="mt-5 font-bold text-slate-900">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{category.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured jobs */}
      <section className="bg-slate-100/70">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                Handpicked opportunities
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Featured jobs
              </h2>
            </div>

            <Link
              href="/jobs"
              className="text-sm font-semibold text-indigo-600 hover:underline"
            >
              View all jobs →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <article
                key={job.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-indigo-50 font-bold text-indigo-700">
                    {job.company.charAt(0)}
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {job.type}
                  </span>
                </div>

                <p className="mt-5 text-sm font-medium text-slate-500">
                  {job.company}
                </p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  {job.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {job.location}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="font-bold text-slate-900">{job.salary}</span>
                  <Link
                    href={`/jobs/${job.id}`}
                    className="text-sm font-semibold text-indigo-600 hover:underline"
                  >
                    Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-indigo-700 px-6 py-10 text-center text-white sm:px-12 sm:py-14">
          <h2 className="text-3xl font-bold">
            Ready for your next opportunity?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-indigo-100">
            Browse the available roles and find one that matches your skills.
          </p>
          <Link
            href="/jobs"
            className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Explore Jobs
          </Link>
        </div>
      </section>
    </main>
  );
}