import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolve a path under public/ against the deploy base
 * (GitHub Pages serves the site from /swathi_portfolio/).
 */
export function asset(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
