import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import CommonButton from '#/components/atoms/button';

describe('CommonButton Component', () => {
  it('renders the button with the correct label', () => {
    render(<CommonButton label='Click Me' />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct variant and color', () => {
    render(<CommonButton label='Outlined Button' variant='outlined' color='secondary' />);
    const button = screen.getByText('Outlined Button');
    expect(button).toHaveClass('MuiButton-outlinedSecondary');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<CommonButton label='Click Me' onClick={handleClick} />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when the disabled prop is true', () => {
    render(<CommonButton label='Disabled Button' disabled />);
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });

  it('renders the button with the correct size', () => {
    render(<CommonButton label='Small Button' size='small' />);
    const button = screen.getByText('Small Button');
    expect(button).toHaveClass('MuiButton-sizeSmall');
  });
});
