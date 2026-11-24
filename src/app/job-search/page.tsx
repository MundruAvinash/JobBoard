import { Suspense } from "react";
import Link from "next/link";
import { jobs } from "@/lib/jobs";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

function SearchFallback() {
  return (
    <p className="mt-6 text-slate-600" aria-live="polite">
      Loading search results…
    </p>
  );
}

async function SearchResults({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const searchTerm = q.trim().toLowerCase();

  const filteredJobs = searchTerm
    ? jobs.filter((job) =>
        [job.title, job.company, job.location, ...job.skills]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm)
      )
    : [];

  return (
    <>
      {searchTerm && (
        <p className="mt-6 text-sm text-slate-600">
          {filteredJobs.length} result(s) for{" "}
          <span className="font-semibold">“{q}”</span>
        </p>
      )}

      <section className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <article
            key={job.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-indigo-700">
              {job.company}
            </p>
            <h2 className="mt-2 text-lg font-bold">{job.title}</h2>
            <p className="mt-2 text-sm text-slate-600">
              {job.location} · {job.type}
            </p>
            <p className="mt-4 font-semibold">{job.salary}</p>
            <p className="mt-3 text-sm text-slate-600">
              {job.description}
            </p>
          </article>
        ))}

        {searchTerm && filteredJobs.length === 0 && (
          <p className="text-slate-600">
            No jobs found. Try a different search term.
          </p>
        )}
      </section>
    </>
  );
}

export default function JobSearchPage({ searchParams }: Props) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Search Jobs</h1>
      <p className="mt-2 text-slate-600">
        Search by job title, company, location, or skill.
      </p>

      <form
        action="/job-search"
        method="GET"
        className="mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row"
      >
        <input
          type="search"
          name="q"
          placeholder="Try React, Hyderabad, or TechNova"
          className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
        />
        <button
          type="submit"
          className="rounded-lg bg-indigo-700 px-6 py-3 font-semibold text-white hover:bg-indigo-800"
        >
          Search
        </button>
      </form>

      <Suspense fallback={<SearchFallback />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>

      <Link
        href="/jobs"
        className="mt-8 inline-block font-semibold text-indigo-700 hover:underline"
      >
        Browse all jobs
      </Link>
    </main>
  );
}