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
      <div className={cn('text-center py-12', className)} role="alert">
        <svg className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Message Sent!</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Thank you for reaching out. We\'ll get back to you within 24 hours.
        </p>
        <Button onClick={() => setSubmitStatus('idle')} className="mt-6">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <Card className={cn('w-full max-w-2xl', className)}>
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Have a project in mind? Tell us about it and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input
              label="Name *"
              placeholder="John Doe"
              error={errors.name?.message}
              {...register('name')}
              required
            />
            <Input
              label="Email *"
              type="email"
              placeholder="john@company.com"
              error={errors.email?.message}
              {...register('email')}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
            label="Service Interest"
            placeholder="GEO, SEO, Web Development, or Not Sure"
            error={errors.service_interest?.message}
            {...register('service_interest')}
          />

          <Textarea
            label="Message *"
            placeholder="Tell us about your project, goals, timeline, and budget..."
            rows={5}
            error={errors.message?.message}
            {...register('message')}
            required
          />

          {errorMessage && (
            <div className="p-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-800" role="alert">
              {errorMessage}
            </div>
          )}

          <Button type="submit" className="w-full" loading={submitStatus === 'submitting'}>
            {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>

          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-blue-600">Privacy Policy</a>
            {' '}and{' '}
            <a href="/terms" className="underline hover:text-blue-600">Terms of Service</a>.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}