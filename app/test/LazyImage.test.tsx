import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { LazyImage, SimpleLazyImage } from '../components/LazyImage';

describe('LazyImage', () => {
  it('renders with placeholder initially', () => {
    const { container } = render(
      <LazyImage
        src="test-image.jpg"
        alt="Test Image"
        placeholderSrc="placeholder.jpg"
      />
    );
    
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Test Image');
  });

  it('applies opacity transition classes', () => {
    const { container } = render(
      <LazyImage src="test-image.jpg" alt="Test Image" />
    );
    
    const img = container.querySelector('img');
    expect(img).toHaveClass('transition-opacity');
  });

  it('includes loading attribute', () => {
    const { container } = render(
      <LazyImage src="test-image.jpg" alt="Test Image" />
    );
    
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('handles custom className', () => {
    const { container } = render(
      <LazyImage
        src="test-image.jpg"
        alt="Test Image"
        className="custom-class"
      />
    );
    
    const img = container.querySelector('img');
    expect(img).toHaveClass('custom-class');
  });
});

describe('SimpleLazyImage', () => {
  it('renders image with correct attributes', () => {
    render(<SimpleLazyImage src="test-image.jpg" alt="Test Image" />);
    
    const img = screen.getByAltText('Test Image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-image.jpg');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('decoding', 'async');
  });

  it('starts with opacity-0 class', () => {
    render(<SimpleLazyImage src="test-image.jpg" alt="Test Image" />);
    
    const img = screen.getByAltText('Test Image');
    expect(img).toHaveClass('opacity-0');
  });

  it('applies transition classes', () => {
    render(<SimpleLazyImage src="test-image.jpg" alt="Test Image" />);
    
    const img = screen.getByAltText('Test Image');
    expect(img).toHaveClass('transition-opacity');
    expect(img).toHaveClass('duration-300');
  });

  it('displays fallback on error', async () => {
    const { container } = render(
      <SimpleLazyImage src="broken-image.jpg" alt="Test Image" />
    );
    
    const img = screen.getByAltText('Test Image');
    
    // Trigger error
    fireEvent.error(img);
    
    await waitFor(() => {
      const errorImg = screen.getByAltText('Error loading image');
      expect(errorImg).toBeInTheDocument();
    });
  });
});
