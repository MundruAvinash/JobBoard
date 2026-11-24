import Link from "next/link";
import { cacheLife } from "next/cache";
import { jobs } from "@/lib/jobs";
import ApplyForm from "@/components/ApplyForm";

async function getCachedJobs() {
  "use cache";

  cacheLife({
    stale: 300,
    revalidate: 300,
    expire: 3600,
  });

  return jobs;
}

export default async function JobsPage() {
  const allJobs = await getCachedJobs();

  return (
    <main className="min-h-screen">
      {/* Page heading */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            Explore opportunities
          </p>

          <div className="mt-2 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Find your next job
              </h1>
              <p className="mt-3 text-slate-600">
                Browse opportunities that match your skills and goals.
              </p>
            </div>

            <Link
              href="/job-search"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Search Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Job list */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-slate-600">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {allJobs.length} sample jobs
            </span>
          </p>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
            Demo listings
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {allJobs.map((job) => (
            <article
              key={job.id}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-indigo-50 text-xl font-bold text-indigo-700">
                  {job.company.charAt(0)}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-500">
                    {job.company}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 group-hover:text-indigo-700">
                    {job.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {job.location} <span className="px-1">·</span> {job.type}
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                {job.description}
              </p>

              <aside>
                <ApplyForm jobTitle={job.title}/>
              </aside>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <div>
                  <p className="text-xs text-slate-500">Salary</p>
                  <p className="mt-1 font-bold text-slate-900">{job.salary}</p>
                </div>

                <Link
                  href={`/jobs/${job.id}`}
                  className="rounded-lg border border-indigo-200 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {allJobs.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <h2 className="text-lg font-semibold text-slate-900">
              No jobs available yet
            </h2>
            <p className="mt-2 text-slate-600">
              Check back later for new opportunities.
            </p>
          </div>
        )}
      </section>

    </main>
  );
}