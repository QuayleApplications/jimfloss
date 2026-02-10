import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  LoadingSkeleton,
  SectionSkeleton,
  CardSkeleton,
  Spinner,
  LoadingOverlay,
} from '../components/LoadingStates';

describe('LoadingSkeleton', () => {
  it('renders with default props', () => {
    const { container } = render(<LoadingSkeleton />);
    const skeleton = container.firstChild;
    
    expect(skeleton).toHaveClass('animate-pulse');
    expect(skeleton).toHaveClass('bg-gray-200');
  });

  it('renders text variant', () => {
    const { container } = render(<LoadingSkeleton variant="text" />);
    const skeleton = container.firstChild;
    
    expect(skeleton).toHaveClass('h-4');
    expect(skeleton).toHaveClass('rounded');
  });

  it('renders circular variant', () => {
    const { container } = render(<LoadingSkeleton variant="circular" />);
    const skeleton = container.firstChild;
    
    expect(skeleton).toHaveClass('rounded-full');
  });

  it('renders rectangular variant', () => {
    const { container } = render(<LoadingSkeleton variant="rectangular" />);
    const skeleton = container.firstChild;
    
    expect(skeleton).toHaveClass('rounded-sm');
  });

  it('renders multiple skeletons with count prop', () => {
    const { container } = render(<LoadingSkeleton count={3} />);
    const skeletons = container.querySelectorAll('.animate-pulse');
    
    expect(skeletons).toHaveLength(3);
  });

  it('applies custom width and height', () => {
    const { container } = render(
      <LoadingSkeleton width={200} height={50} />
    );
    const skeleton = container.firstChild as HTMLElement;
    
    expect(skeleton.style.width).toBe('200px');
    expect(skeleton.style.height).toBe('50px');
  });
});

describe('SectionSkeleton', () => {
  it('renders section skeleton structure', () => {
    const { container } = render(<SectionSkeleton />);
    
    // Check for header skeleton
    const circularSkeleton = container.querySelector('.rounded-full');
    expect(circularSkeleton).toBeInTheDocument();
    
    // Check for content blocks
    const rectangularSkeletons = container.querySelectorAll('.rounded-sm');
    expect(rectangularSkeletons.length).toBeGreaterThan(0);
  });
});

describe('CardSkeleton', () => {
  it('renders card skeleton with proper structure', () => {
    const { container } = render(<CardSkeleton />);
    
    expect(container.querySelector('.bg-\\[\\#F5F5F5\\]')).toBeInTheDocument();
    expect(container.querySelector('.rounded-sm')).toBeInTheDocument();
  });
});

describe('Spinner', () => {
  it('renders spinner with default size', () => {
    const { container } = render(<Spinner />);
    const svg = container.querySelector('svg');
    
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('animate-spin');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('renders spinner with custom size', () => {
    const { container } = render(<Spinner size={40} />);
    const svg = container.querySelector('svg');
    
    expect(svg).toHaveAttribute('width', '40');
    expect(svg).toHaveAttribute('height', '40');
  });

  it('applies custom className', () => {
    const { container } = render(<Spinner className="custom-spinner" />);
    const wrapper = container.firstChild;
    
    expect(wrapper).toHaveClass('custom-spinner');
  });
});

describe('LoadingOverlay', () => {
  it('renders with default message', () => {
    render(<LoadingOverlay />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders with custom message', () => {
    render(<LoadingOverlay message="Loading content..." />);
    
    expect(screen.getByText('Loading content...')).toBeInTheDocument();
  });

  it('includes spinner component', () => {
    const { container } = render(<LoadingOverlay />);
    const svg = container.querySelector('svg');
    
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('animate-spin');
  });
});
