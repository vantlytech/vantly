'use client';

import { forwardRef, isValidElement, cloneElement, Ref, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'soft'
  | 'ghost'
  | 'outline'
  | 'inverse'
  // Legacy aliases kept so older markup keeps working.
  | 'brand'
  | 'glass'
  | 'glass-primary'
  | 'glass-dark';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'href'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
  href?: string;
}

const baseStyles =
  'group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

/** Blue is the primary action; white-with-hairline is the quiet one. */
const PRIMARY =
  'bg-blue-600 text-white shadow-[0_10px_28px_-10px_rgba(37,99,235,0.55)] hover:bg-blue-700 hover:shadow-[0_16px_38px_-12px_rgba(37,99,235,0.6)] hover:-translate-y-0.5';
const SECONDARY =
  'border border-[#e6eaf2] bg-white text-[#0b1220] shadow-[0_1px_2px_rgba(11,18,32,0.05)] hover:border-[#cfdcf5] hover:bg-[#f8fbff] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(11,18,32,0.18)]';

const variants: Record<ButtonVariant, string> = {
  primary: PRIMARY,
  brand: PRIMARY,
  'glass-primary': PRIMARY,
  secondary: SECONDARY,
  outline: SECONDARY,
  glass: SECONDARY,
  'glass-dark': SECONDARY,
  soft: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
  ghost: 'text-[#475069] hover:bg-[#f2f5fa] hover:text-[#0b1220]',
  inverse: 'bg-white text-blue-700 shadow-[0_10px_28px_-12px_rgba(11,18,32,0.4)] hover:bg-blue-50 hover:-translate-y-0.5',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-[0.8125rem]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-[0.9375rem]',
};

const Spinner = () => (
  <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

/** A light sweep that crosses the button on hover. */
const Sheen = () => (
  <span
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
  />
);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'secondary', size = 'md', loading, disabled, children, asChild, href, onClick, ...props }, ref) => {
    const isLoading = loading || false;
    const isDisabled = disabled || isLoading;
    const classes = cn(baseStyles, variants[variant], sizes[size], className);
    const sheen = variant === 'primary' || variant === 'brand' || variant === 'glass-primary';

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (isDisabled) e.preventDefault();
      onClick?.(e as React.MouseEvent<HTMLButtonElement>);
    };

    const body = (
      <>
        {sheen && <Sheen />}
        {isLoading && <Spinner />}
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </>
    );

    if (asChild && isValidElement(children)) {
      const child = children as React.ReactElement<any>;

      return cloneElement(child, {
        ref: ref as Ref<any>,
        className: cn(classes, child.props.className),
        'aria-disabled': isDisabled,
        ...props,
        ...(href && { href }),
        onClick: handleClick,
      });
    }

    if (href) {
      const {
        form, formAction, formEncType, formMethod, formNoValidate, formTarget, type,
        ...anchorProps
      } = props as Record<string, any>;

      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          aria-disabled={isDisabled}
          onClick={handleClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...anchorProps}
        >
          {body}
        </a>
      );
    }

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        className={classes}
        disabled={isDisabled}
        type={(props.type as 'button' | 'submit' | 'reset') || 'button'}
        onClick={handleClick}
        {...props}
      >
        {body}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
