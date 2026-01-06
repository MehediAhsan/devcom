"use client";

import { Job } from "../types";

const STORAGE_KEY = "devcom_jobs";

export function getJobs(): Job[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Job[];
  } catch (e) {
    console.error("Failed to read jobs from storage", e);
    return [];
  }
}

export function saveJobs(jobs: Job[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  } catch (e) {
    console.error("Failed to save jobs", e);
  }
}

export function addJob(job: Job) {
  const jobs = getJobs();
  jobs.unshift(job);
  saveJobs(jobs);
}
