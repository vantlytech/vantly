import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/** Intrinsic size of public/logo-mark.png — the mark is wider than it is tall. */
const MARK_W = 600;
const MARK_H = 449;

interface LogoMarkProps {
  className?: string;
  priority?: boolean;
}

/**
 * The Vantly chevron, straight from the brand file in `public/`. Height is the
 * controlled dimension; width follows the mark's own 4:3 proportion so it is
 * never squashed.
 */
export function LogoMark({ className, priority }: LogoMarkProps) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={MARK_W}
      height={MARK_H}
      priority={priority}
      aria-hidden="true"
      className={cn('h-4 w-auto object-contain', className)}
    />
  );
}

interface LogoProps {
  className?: string;
  wordmark?: boolean;
  href?: string | null;
  /** Set on dark surfaces so the wordmark stays legible. */
  tone?: 'dark' | 'light';
  priority?: boolean;
}

export function Logo({
  className,
  wordmark = true,
  href = '/',
  tone = 'dark',
  priority,
}: LogoProps) {
  const content = (
    <>
      <LogoMark
        priority={priority}
        className="h-4 w-auto shrink-0 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-105"
      />
      {wordmark && (
        <span
          className={cn(
            'text-[1.125rem] font-semibold tracking-[-0.03em]',
            tone === 'dark' ? 'text-[#0b1220]' : 'text-white'
          )}
        >
          Vantly
        </span>
      )}
    </>
  );

  if (href === null) {
    return <span className={cn('group inline-flex items-center gap-2', className)}>{content}</span>;
  }

  return (
    <Link
      href={href}
      aria-label="Vantly — home"
      className={cn('group inline-flex items-center gap-2', className)}
    >
      {content}
    </Link>
  );
}
