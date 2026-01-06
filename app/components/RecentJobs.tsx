"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Job } from "../types";
import { getJobs } from "../lib/jobStorage";

export default function RecentJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    try {
      const all = getJobs();
      setJobs(all.slice(0, 3));
    } catch (e) {
      setJobs([]);
    }
  }, []);

  if (jobs.length === 0) {
    return <div className="text-sm text-zinc-500">No recent jobs. Be the first to post one!</div>;
  }

  return (
    <div className="space-y-3">
      {jobs.map((j) => (
        <div key={j.id} className="flex items-start justify-between rounded-md border px-3 py-2">
          <div>
            <div className="text-sm font-medium text-zinc-900">{j.title}</div>
            <div className="text-xs text-zinc-500">{j.experience}</div>
          </div>
          <div className="flex items-center gap-3">
            <a href={j.link} target="_blank" rel="noreferrer" className="text-sm text-indigo-600 hover:underline">
              Open
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
