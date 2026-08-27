'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { Logo } from '@/components/brand';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/case-studies' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-500',
        scrolled ? 'glass-nav border-b border-[#e9edf5] shadow-[0_1px_20px_-8px_rgba(11,18,32,0.18)]' : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="shell flex h-16 items-center justify-between lg:h-[4.5rem]" aria-label="Main">
        <Logo priority />

        <div className="hidden items-center gap-0.5 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'relative rounded-full px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-300',
                isActive(item.href) ? 'text-blue-700' : 'text-[#475069] hover:text-[#0b1220]'
              )}
            >
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-blue-50"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="https://calendly.com/vantlytech/30min" target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
            Book Slot
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-[#475069] transition-colors hover:bg-[#f2f5fa] hover:text-[#0b1220] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                'absolute left-0 block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300',
                open ? 'top-1.5 rotate-45' : 'top-0'
              )}
            />
            <span
              className={cn(
                'absolute left-0 block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300',
                open ? 'top-1.5 -rotate-45' : 'top-3'
              )}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[#e9edf5] bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="shell flex flex-col py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'border-b border-[#f0f3f8] py-3.5 text-[0.9375rem] transition-colors last:border-0',
                    isActive(item.href) ? 'font-medium text-blue-700' : 'text-[#475069] hover:text-[#0b1220]'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button href="https://calendly.com/vantlytech/30min" target="_blank" rel="noopener noreferrer" variant="primary" size="md" className="mt-5 w-full">
                Book a Slot
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
