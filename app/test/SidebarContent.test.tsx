import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SidebarContent } from '../components/SidebarContent';

describe('SidebarContent', () => {
  it('renders profile photo with correct alt text', () => {
    render(<SidebarContent />);
    
    const img = screen.getByAltText('Jim Floss');
    expect(img).toBeInTheDocument();
  });

  it('renders contact information section', () => {
    render(<SidebarContent />);
    
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('Akron, OH')).toBeInTheDocument();
  });

  it('renders email link with correct attributes', () => {
    render(<SidebarContent />);
    
    const emailLink = screen.getByText('jim@quayleapps.com');
    expect(emailLink).toHaveAttribute('href', 'mailto:jim@quayleapps.com');
  });

  it('renders phone link with correct attributes', () => {
    render(<SidebarContent />);
    
    const phoneLink = screen.getByText('+1 (330) 858-6369');
    expect(phoneLink).toHaveAttribute('href', 'tel:+15551234567');
  });

  it('renders social links with proper accessibility', () => {
    render(<SidebarContent />);
    
    const linkedinLink = screen.getByLabelText('LinkedIn Profile');
    const githubLink = screen.getByLabelText('GitHub Profile');
    const websiteLink = screen.getByLabelText('Website');
    
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(websiteLink).toHaveAttribute('target', '_blank');
    
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(websiteLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders skills section', () => {
    render(<SidebarContent />);
    
    expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('renders skill levels as percentages', () => {
    render(<SidebarContent />);
    
    expect(screen.getByText('95%')).toBeInTheDocument(); // JavaScript
    expect(screen.getByText('90%')).toBeInTheDocument(); // TypeScript
  });

  it('renders skill progress bars', () => {
    const { container } = render(<SidebarContent />);
    
    const progressBars = container.querySelectorAll('.bg-\\[\\#87B1C1\\]');
    expect(progressBars.length).toBeGreaterThan(0);
  });
});
