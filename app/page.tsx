import Link from "next/link";
import RecentJobs from "./components/RecentJobs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 px-3 py-1 text-white text-sm font-medium shadow">
              <span className="px-1.5 py-0.5 rounded bg-white/20">New</span>
              DevJobs & Community
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900">
              DevCom — A modern place to post jobs and share dev opportunities
            </h1>

            <p className="text-lg text-zinc-600">
              Discover curated developer roles, post opportunities, and connect with
              peers. Clean, fast and focused — made for engineers who value clarity.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/jobs" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700">
                Browse Jobs
              </Link>
              <Link href="/posts" className="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-4 py-2 hover:bg-zinc-50">
                Community Posts
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="text-sm font-semibold">Post a Job</div>
                <div className="text-xs text-zinc-500">Create listings with links</div>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="text-sm font-semibold">Filter Roles</div>
                <div className="text-xs text-zinc-500">Search by title & experience</div>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="text-sm font-semibold">Safe Links</div>
                <div className="text-xs text-zinc-500">Open external profiles safely</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-10 -top-8 hidden h-64 w-64 rotate-12 transform overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 shadow-lg lg:block" />

            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold">Recent jobs</h3>
              <p className="mt-1 text-sm text-zinc-500">A quick preview from the community</p>

              <div className="mt-4">
                <RecentJobs />
              </div>

              <div className="mt-4 flex justify-end">
                <Link href="/jobs" className="text-sm text-indigo-600 hover:underline">
                  See all jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Why DevCom?</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="p-4">
              <div className="text-lg font-medium">Focused Listings</div>
              <div className="text-sm text-zinc-500">No noise — only dev-relevant roles.</div>
            </div>
            <div className="p-4">
              <div className="text-lg font-medium">Community First</div>
              <div className="text-sm text-zinc-500">Share opportunities and connect.</div>
            </div>
            <div className="p-4">
              <div className="text-lg font-medium">Fast & Lightweight</div>
              <div className="text-sm text-zinc-500">Built with Next.js and Tailwind for speed.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
