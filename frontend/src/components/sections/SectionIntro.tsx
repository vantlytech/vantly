import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion';

interface SectionIntroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  id?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  id,
  align = 'center',
  className,
}: SectionIntroProps) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        id={id}
        className={cn('heading text-h2 text-balance', eyebrow && 'mt-5')}
      >
        {title}
      </h2>
      {description && <p className="lede mt-4 text-[1.0625rem] text-pretty">{description}</p>}
    </Reveal>
  );
}
