'use client';

import { InputHTMLAttributes, forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-2 block text-[0.8125rem] font-medium text-[#475069]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'h-11 w-full rounded-xl border border-[#e0e6f0] bg-white px-3.5 text-[0.9375rem] text-[#0b1220] transition-all duration-300',
            'placeholder:text-[#a5adbd]',
            'hover:border-[#c9d4e6] focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/12',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-400 focus:border-red-500 focus:ring-red-500/12',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-[0.8125rem] text-red-600" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-[0.8125rem] text-[#7a8399]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
