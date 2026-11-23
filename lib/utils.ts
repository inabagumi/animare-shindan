import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Joins class names and resolves conflicting Tailwind CSS utilities so that
 * the classes given later win.
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
