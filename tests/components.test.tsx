import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Faq } from '@/components/Faq';
import { Team } from '@/components/Team';
import { ReviewCard } from '@/components/Reviews';
import { FAQS } from '@/content/faq';
import { TEAM } from '@/content/team';

describe('Faq', () => {
  it('renders every question', () => {
    render(<Faq />);
    FAQS.forEach((f) => expect(screen.getByText(f.q)).toBeInTheDocument());
  });

  /** Answers must be in the DOM, not injected on click, or they are invisible
   *  to crawlers and the FAQPage markup would be describing nothing. */
  it('has the answers present in the markup', () => {
    const { container } = render(<Faq />);
    expect(container.querySelectorAll('details').length).toBe(FAQS.length);
    expect(container.textContent).toContain(FAQS[0].a.slice(0, 40));
  });

  it('never leaks the internal source note into the page', () => {
    const { container } = render(<Faq />);
    FAQS.forEach((f) => expect(container.textContent).not.toContain(f.source));
  });
});

describe('Team', () => {
  it('renders each person with their role', () => {
    render(<Team />);
    TEAM.forEach((m) => {
      expect(screen.getByText(m.name)).toBeInTheDocument();
      expect(screen.getByText(m.role)).toBeInTheDocument();
    });
  });
});

describe('ReviewCard', () => {
  it('marks a trimmed review rather than presenting it as complete', () => {
    const { container } = render(
      <ReviewCard
        review={{ name: 'Test Trekker', when: '2 months ago', stars: 5, trimmed: true, text: 'An excerpt of a much longer review' }}
      />,
    );
    expect(container.textContent).toContain('…');
  });

  it('renders the right number of stars', () => {
    render(
      <ReviewCard
        review={{ name: 'Four Star', when: 'a year ago', stars: 4, trimmed: false, text: 'A perfectly good review of reasonable length' }}
      />,
    );
    expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument();
  });
});
