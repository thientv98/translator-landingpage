import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { APP_URL } from './const';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleAddToSlack = () => {
  window.location.href = APP_URL
}
