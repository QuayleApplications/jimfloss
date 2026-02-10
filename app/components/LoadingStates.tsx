import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  count?: number;
}

/**
 * Skeleton loading component for better perceived performance
 */
export function LoadingSkeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
  count = 1,
}: LoadingSkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-sm',
  };

  const style: React.CSSProperties = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '100%'),
  };

  const items = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  ));

  return count > 1 ? <div className="space-y-2">{items}</div> : items[0];
}

/**
 * Section loading skeleton with header and content
 */
export function SectionSkeleton() {
  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <LoadingSkeleton variant="circular" width={24} height={24} />
        <LoadingSkeleton width={200} height={32} />
      </div>

      {/* Content blocks */}
      <div className="space-y-4">
        <div className="bg-[#F5F5F5] p-6 rounded-sm">
          <LoadingSkeleton width="60%" height={24} className="mb-3" />
          <LoadingSkeleton width="40%" height={20} className="mb-4" />
          <LoadingSkeleton count={3} height={16} className="mb-2" />
        </div>
        <div className="bg-[#F5F5F5] p-6 rounded-sm">
          <LoadingSkeleton width="55%" height={24} className="mb-3" />
          <LoadingSkeleton width="45%" height={20} className="mb-4" />
          <LoadingSkeleton count={3} height={16} className="mb-2" />
        </div>
      </div>
    </section>
  );
}

/**
 * Card loading skeleton
 */
export function CardSkeleton() {
  return (
    <div className="bg-[#F5F5F5] p-6 rounded-sm border border-[#87B1C1]/10">
      <div className="flex items-start justify-between gap-4 mb-3">
        <LoadingSkeleton width="70%" height={24} />
        <div className="flex gap-2">
          <LoadingSkeleton variant="circular" width={20} height={20} />
          <LoadingSkeleton variant="circular" width={20} height={20} />
        </div>
      </div>
      <LoadingSkeleton count={3} height={16} className="mb-4" />
      <div className="flex flex-wrap gap-2">
        <LoadingSkeleton width={80} height={28} />
        <LoadingSkeleton width={90} height={28} />
        <LoadingSkeleton width={70} height={28} />
        <LoadingSkeleton width={85} height={28} />
      </div>
    </div>
  );
}

/**
 * Simple spinner component
 */
export function Spinner({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg
        className="animate-spin text-[#87B1C1]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

/**
 * Loading overlay for sections
 */
export function LoadingOverlay({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <Spinner size={40} />
      <p className="text-[#6B7280] text-sm">{message}</p>
    </div>
  );
}
