'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { pricingCta } from '@/components/ui/pricingCTA';

interface ReportFormProps {
  /** `inline` renders the form directly in the page; `modal` renders a trigger button + popup. */
  variant?: 'inline' | 'modal';
  className?: string;
  triggerLabel?: string;
  triggerClassName?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export function ReportForm({
  variant = 'inline',
  className,
  triggerLabel = 'Get Free Report',
  triggerClassName,
}: ReportFormProps) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [urlError, setUrlError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const reset = () => {
    setUrl('');
    setEmail('');
    setUrlError('');
    setEmailError('');
    setSubmitError('');
    setSubmitted(false);
  };

  const handleSubmit = async () => {
    const validUrl = isValidUrl(url.trim());
    const validEmail = EMAIL_RE.test(email.trim());

    setUrlError(validUrl ? '' : 'Please enter a valid website URL.');
    setEmailError(validEmail ? '' : 'Please enter a valid email address.');

    if (!validUrl || !validEmail) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/report-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ website_url: url.trim(), email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.detail || 'Something went wrong, please try again.');
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong, please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={cn('rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center', className)}
        role="status"
      >
        <svg className="mx-auto h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="mt-3 text-[0.9375rem] font-medium leading-relaxed text-emerald-800">
          Thanks! We&apos;ll send your free SEO &amp; GEO report to your inbox within 24-48 hours.
        </p>
      </div>
    );
  }

  const fields = (
    <div className="space-y-4">
      <div>
        <label htmlFor="report-url" className="mb-1.5 block text-[0.8125rem] font-medium text-[#0b1220]">
          Website URL
        </label>
        <input
          id="report-url"
          type="url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            if (urlError) setUrlError('');
          }}
          placeholder="https://yourwebsite.com"
          autoComplete="url"
          aria-invalid={Boolean(urlError)}
          className={cn(
            'w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#0b1220] outline-none transition-colors placeholder:text-[#c3cbd9] focus:border-blue-400',
            urlError ? 'border-red-300' : 'border-[#e6eaf2]'
          )}
        />
        {urlError && <p className="mt-1.5 text-xs text-red-500">{urlError}</p>}
      </div>

      <div>
        <label htmlFor="report-email" className="mb-1.5 block text-[0.8125rem] font-medium text-[#0b1220]">
          Email
        </label>
        <input
          id="report-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError('');
          }}
          placeholder="you@company.com"
          autoComplete="email"
          aria-invalid={Boolean(emailError)}
          className={cn(
            'w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#0b1220] outline-none transition-colors placeholder:text-[#c3cbd9] focus:border-blue-400',
            emailError ? 'border-red-300' : 'border-[#e6eaf2]'
          )}
        />
        {emailError && <p className="mt-1.5 text-xs text-red-500">{emailError}</p>}
      </div>

      {submitError && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600" role="alert">
          {submitError}
        </p>
      )}

      <Button
        type="button"
        variant="primary"
        size="lg"
        className="w-full"
        loading={submitting}
        disabled={submitting}
        onClick={handleSubmit}
      >
        Get My Free Report
      </Button>
    </div>
  );

  if (variant === 'modal') {
    return (
      <>
        <Button
          type="button"
          variant={pricingCta.variant}
          size={pricingCta.size}
          className={cn(pricingCta.className, triggerClassName)}
          onClick={() => setOpen(true)}
        >
          {triggerLabel}
        </Button>

        {open && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0b1220]/50 p-4 backdrop-blur-sm"
            onClick={() => reset()}
            role="dialog"
            aria-modal="true"
            aria-label="Request your free report"
          >
            <div
              className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#0b1220]">
                    Free SEO &amp; GEO Snapshot
                  </h3>
                  <p className="mt-1 text-[0.8125rem] text-[#7a8399]">
                    We&apos;ll email your free report within 24-48 hours. No obligation.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="shrink-0 rounded-full p-1.5 text-[#98a1b3] transition-colors hover:bg-[#f2f5fa] hover:text-[#0b1220]"
                  aria-label="Close"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6">{fields}</div>
            </div>
          </div>
        )}
      </>
    );
  }

  return <div className={className}>{fields}</div>;
}