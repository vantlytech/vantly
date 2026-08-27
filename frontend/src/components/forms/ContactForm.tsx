'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui';
import { Textarea } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui';
import { leadSchema, type LeadFormData } from '@/lib/validations';
import { leadsApi } from '@/lib/api';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function ContactForm({ className, onSuccess }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      await leadsApi.create(data);
      setSubmitStatus('success');
      reset();
      onSuccess?.();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
      console.error(error);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div
        className={cn('rounded-2xl border border-[#e6eaf2] bg-white px-8 py-16 text-center shadow-lift', className)}
        role="alert"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-brand">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="heading text-h3 mt-6">Message sent</h3>
        <p className="text-body mx-auto mt-3 max-w-sm">
          Thanks for reaching out. We will get back to you within 24 hours.
        </p>
        <Button onClick={() => setSubmitStatus('idle')} variant="secondary" className="mt-8">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>Tell us about your project</CardTitle>
        <CardDescription>
          The more context you give us, the more useful our first reply will be.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input
              label="Name"
              placeholder="John Doe"
              error={errors.name?.message}
              {...register('name')}
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="john@company.com"
              error={errors.email?.message}
              {...register('email')}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input
              label="Company"
              placeholder="Acme Inc."
              error={errors.company?.message}
              {...register('company')}
            />
            <Input
              label="Phone"
              placeholder="+1 (555) 000-0000"
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>

          <Input
            label="Service interest"
            placeholder="GEO, SEO, web development, or not sure yet"
            error={errors.service_interest?.message}
            {...register('service_interest')}
          />

          <Textarea
            label="Message"
            placeholder="Tell us about your project, goals, timeline, and budget..."
            rows={5}
            error={errors.message?.message}
            {...register('message')}
            required
          />

          {errorMessage && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-[0.875rem] text-red-700" role="alert">
              {errorMessage}
            </div>
          )}

          <Button type="submit" variant="primary" size="lg" className="w-full" loading={submitStatus === 'submitting'}>
            {submitStatus === 'submitting' ? 'Sending…' : 'Send message'}
          </Button>

          <p className="text-center text-[0.75rem] leading-relaxed text-[#98a1b3]">
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="underline underline-offset-2 transition-colors hover:text-blue-700">Privacy Policy</a>
            {' '}and{' '}
            <a href="/terms" className="underline underline-offset-2 transition-colors hover:text-blue-700">Terms of Service</a>.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}