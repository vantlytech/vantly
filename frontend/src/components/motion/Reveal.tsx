'use client';

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const travel: Record<Direction, string> = {
  up: 'translate3d(0, 24px, 0)',
  down: 'translate3d(0, -24px, 0)',
  left: 'translate3d(28px, 0, 0)',
  right: 'translate3d(-28px, 0, 0)',
  none: 'none',
};

/**
 * Reveals on scroll without depending on IntersectionObserver alone: the
 * position is measured on mount and again on scroll/resize, so content can
 * never get stuck invisible if the observer never fires.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let done = false;

    const inViewport = () => {
      const rect = el.getBoundingClientRect();
      const height = window.innerHeight || document.documentElement.clientHeight;
      // A little past the fold so the motion is already finishing when seen.
      return rect.top < height - 60 && rect.bottom > 0;
    };

    const stop = () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };

    const check = () => {
      if (done) return;
      if (inViewport()) {
        done = true;
        setVisible(true);
        stop();
      }
    };

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(check);
    }

    check();
    if (!done) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      // Layout can settle after fonts/images land.
      frame = requestAnimationFrame(check);
    }

    return stop;
  }, []);

  return { ref, visible };
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  /** 0 disables the travel and fades only. */
  distance?: number;
  style?: CSSProperties;
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  distance = 1,
  style,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('reveal', visible && 'is-revealed', className)}
      style={{
        '--reveal-from': distance === 0 ? 'none' : travel[direction],
        transitionDelay: `${delay}s`,
        ...style,
      } as CSSProperties}
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Seconds between each child. */
  step?: number;
  delay?: number;
}

/** Releases its <StaggerItem> children one after another once in view. */
export function Stagger({ children, className, step = 0.09, delay = 0 }: StaggerProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  let index = 0;

  // Only StaggerItem takes a delay; anything else (decorative rails, etc.)
  // passes through untouched so no unknown prop reaches the DOM.
  const items = Children.map(children, (child) => {
    if (!isValidElement(child) || child.type !== StaggerItem) return child;
    const childDelay = delay + index * step;
    index += 1;
    return cloneElement(child as React.ReactElement<any>, { __revealDelay: childDelay });
  });

  return (
    <div ref={ref} className={cn(visible && 'is-revealed', className)}>
      {items}
    </div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
  /** Injected by <Stagger>. */
  __revealDelay?: number;
}

export function StaggerItem({
  children,
  className,
  as: Tag = 'div',
  __revealDelay = 0,
}: StaggerItemProps) {
  return (
    <Tag
      className={cn('reveal', className)}
      style={{ transitionDelay: `${__revealDelay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
