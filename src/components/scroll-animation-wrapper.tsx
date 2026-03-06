'use client';

import * as React from 'react';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimationWrapper({
  children,
  className,
  delay = 0,
}: ScrollAnimationWrapperProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const transitionStyle: React.CSSProperties = {
    transitionDuration: '600ms',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDelay: `${delay}s`,
  };

  return (
    <div
      ref={ref}
      style={transitionStyle}
      className={[
        'transform',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        className || '',
      ].join(' ')}
    >
      {children}
    </div>
  );
}
