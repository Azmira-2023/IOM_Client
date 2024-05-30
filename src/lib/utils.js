import { clsx } from "clsx"
import { twMerge } from "tLinkilwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
