import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useSpringCounter } from '@shared/hooks/useSpringCounter';
import { MotionWrapper } from '@shared/lib/motion/MotionWrapper';
import { STATS_CONTENT } from '@utils/constants';
import '@styles/statsbar.css';

const StatCard = React.memo(({ stat, isVisible }) => {
  const count = useSpringCounter(stat.value, isVisible);

  return (
    <div className="stat-card relative text-center py-8 px-6 md:py-10 border-b md:border-b-0 border-black/5 md:border-r last:border-r-0">
      <div className="stat-value font-bricolage font-bold text-3xl md:text-4xl mb-2 text-neutral-900">
        {stat.prefix}
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="stat-label text-neutral-500 text-sm font-medium">
        {stat.label}
      </div>
    </div>
  );
});

StatCard.displayName = 'StatCard';

export const StatsBarWidget = () => {
  const containerRef = useRef(null);
  const isVisible = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative z-10 -mt-4" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <MotionWrapper 
          className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-2xl overflow-hidden shadow-xl"
          as="div"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS_CONTENT.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                isVisible={isVisible}
              />
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default StatsBarWidget;
