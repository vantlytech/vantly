'use client';

import { forwardRef, isValidElement, cloneElement, Ref, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glass-primary' | 'glass-dark';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'href'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
  href?: string;
}

const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35',
  secondary: 'bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-500',
  outline: 'border-2 border-gray-700 bg-transparent hover:bg-gray-900/50 focus-visible:ring-gray-500',
  ghost: 'bg-transparent hover:bg-white/5 focus-visible:ring-gray-500',
  glass: 'glass text-white hover:bg-white/10 focus-visible:ring-white/20 shadow-xl hover:shadow-2xl',
  'glass-primary': 'glass-strong bg-blue-500/20 text-white hover:bg-blue-500/30 focus-visible:ring-blue-500/40 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30',
  'glass-dark': 'glass-dark text-white hover:bg-white/5 focus-visible:ring-white/20',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm rounded-lg',
  md: 'h-10 px-4 py-2 rounded-xl',
  lg: 'h-11 px-8 text-lg rounded-xl',
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'glass', size = 'md', loading, disabled, children, asChild, href, onClick, ...props }, ref) => {
    const isLoading = loading || false;
    const isDisabled = disabled || isLoading;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (isDisabled) e.preventDefault();
      onClick?.(e as React.MouseEvent<HTMLButtonElement>);
    };

    // If asChild is true and we have a single child element, clone it with our props
    if (asChild && isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      
      return cloneElement(child, {
        ref: ref as Ref<any>,
        className: cn(baseStyles, variants[variant], sizes[size], child.props.className),
        disabled: isDisabled,
        'aria-disabled': isDisabled,
        ...props,
        ...(href && { href }),
        onClick: handleClick,
      });
    }

    // If href is provided, render as anchor
    if (href) {
      // Only spread anchor-valid props
      const { 
        form, formAction, formEncType, formMethod, formNoValidate, formTarget, type,
        ...anchorProps 
      } = props as Record<string, any>;
      
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          aria-disabled={isDisabled}
          onClick={handleClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...anchorProps}
        >
          {isLoading && (
            <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          {children}
        </a>
      );
    }

    // Render as button
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isDisabled}
        type={props.type as 'button' | 'submit' | 'reset' || 'button'}
        onClick={handleClick}
        {...props}
      >
        {isLoading && (
          <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };