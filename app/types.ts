export type ExperienceLevel = "Junior" | "Mid" | "Senior";

export interface Job {
  id: string;
  title: string;
  experience: ExperienceLevel | string;
  link: string;
  createdAt: number;
}
