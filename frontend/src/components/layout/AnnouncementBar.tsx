'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'vantly-announcement-dismissed';

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      let dismissed = false;
      try {
        dismissed = sessionStorage.getItem(STORAGE_KEY) === '1';
      } catch {
        dismissed = false;
      }
      setVisible(!dismissed);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      setVisible(false);
      return;
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-emerald-600 text-white">
      <div className="shell relative flex items-center justify-center gap-x-4 py-2 pr-12">
        <p className="min-w-0 truncate text-[0.8125rem] font-medium sm:text-[0.875rem]">
          Is AI recommending your brand? Get a free SEO &amp; GEO report.
        </p>

        <Link
          href="/#report-snapshot"
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#0b1220] px-4 py-1.5 text-[0.8125rem] font-semibold text-white transition-colors duration-300 hover:bg-[#1b2436]"
        >
          Get my free report
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/85 transition-colors duration-300 hover:bg-white/15 hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}