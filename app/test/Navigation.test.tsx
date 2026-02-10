import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Navigation } from '../components/Navigation';

describe('Navigation', () => {
  it('renders all navigation items', () => {
    render(<Navigation />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
    expect(screen.getByText('Software')).toBeInTheDocument();
    expect(screen.getByText('Datasets')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('CV')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('highlights home section by default', () => {
    render(<Navigation />);
    
    const homeButton = screen.getByText('Home').closest('button');
    expect(homeButton).toHaveClass('text-[#87B1C1]');
  });

  it('scrolls to section when navigation item is clicked', async () => {
    // Mock getElementById
    const mockElement = {
      getBoundingClientRect: vi.fn(() => ({
        top: 500,
        bottom: 600,
        left: 0,
        right: 0,
        width: 0,
        height: 100,
        x: 0,
        y: 500,
        toJSON: () => {},
      })),
    };
    
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any);
    
    render(<Navigation />);
    
    const softwareButton = screen.getByText('Software');
    fireEvent.click(softwareButton);
    
    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalled();
    });
  });

  it('changes active state when clicking different nav items', () => {
    render(<Navigation />);
    
    const softwareButton = screen.getByText('Software');
    fireEvent.click(softwareButton);
    
    expect(softwareButton.closest('button')).toHaveClass('text-[#87B1C1]');
  });

  it('applies hover styles to inactive items', () => {
    render(<Navigation />);
    
    const researchButton = screen.getByText('Research').closest('button');
    expect(researchButton).toHaveClass('hover:text-[#181D1F]');
  });
});
