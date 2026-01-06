"use client";

import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Job } from "../types";
import { addJob, getJobs } from "../lib/jobStorage";

function JobCard({ job }: { job: Job }) {
  return (
    <div className="rounded-md border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-sm text-zinc-600">{job.experience}</p>
        </div>
        <a
          href={job.link}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          Open
        </a>
      </div>
      <div className="mt-2 text-xs text-zinc-500">Posted {new Date(job.createdAt).toLocaleString()}</div>
    </div>
  );
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("Mid");
  const [link, setLink] = useState("");
  const [q, setQ] = useState("");
  const [filterExp, setFilterExp] = useState<"All" | string>("All");

  useEffect(() => {
    setJobs(getJobs());
  }, []);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const matchesQ = j.title.toLowerCase().includes(q.toLowerCase());
      const matchesExp = filterExp === "All" ? true : j.experience === filterExp;
      return matchesQ && matchesExp;
    });
  }, [jobs, q, filterExp]);

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !link.trim()) return;
    const job: Job = {
      id: uuidv4(),
      title: title.trim(),
      experience: experience,
      link: link.trim(),
      createdAt: Date.now(),
    };
    addJob(job);
    setJobs((s) => [job, ...s]);
    setTitle("");
    setLink("");
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Jobs</h1>
      </div>

      <form onSubmit={handleCreate} className="space-y-4 rounded-md bg-white p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Job title"
            className="col-span-2 rounded-md border px-3 py-2"
          />
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="rounded-md border px-3 py-2"
          >
            <option>Junior</option>
            <option>Mid</option>
            <option>Senior</option>
          </select>
        </div>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Job link (Facebook, LinkedIn, Upwork... )"
          className="w-full rounded-md border px-3 py-2"
        />
        <div className="flex items-center justify-end">
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Post Job</button>
        </div>
      </form>

      <div className="flex items-center gap-3">
        <input
          placeholder="Search title..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="rounded-md border px-3 py-2 flex-1"
        />
        <select
          value={filterExp}
          onChange={(e) => setFilterExp(e.target.value)}
          className="rounded-md border px-3 py-2"
        >
          <option value="All">All</option>
          <option value="Junior">Junior</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>
      </div>

      <div className="grid gap-4">
        {filtered.length === 0 ? (
          <div className="rounded-md bg-white p-6 text-center text-zinc-600">No jobs yet.</div>
        ) : (
          filtered.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
}
