import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import CommonTextField from '#/components/atoms/text-field';

describe('CommonTextField Component', () => {
  it('renders the text field with the correct label', () => {
    render(<CommonTextField label='Username' value='' onChange={() => {}} />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('displays the correct value', () => {
    render(<CommonTextField label='Username' value='testing user' onChange={() => {}} />);
    const input = screen.getByLabelText('Username');
    expect(input).toHaveValue('testing user');
  });

  it('calls the onChange handler when value changes', () => {
    const handleChange = vi.fn();
    render(<CommonTextField label='Username' value='' onChange={handleChange} />);
    const input = screen.getByLabelText('Username');
    fireEvent.change(input, { target: { value: 'new user' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('displays error state and helper text', () => {
    render(
      <CommonTextField
        label='Username'
        value=''
        onChange={() => {}}
        error
        helperText='Invalid username'
      />,
    );
    expect(screen.getByText('Invalid username')).toBeInTheDocument();
    const input = screen.getByLabelText('Username');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('disables the text field when disabled prop is true', () => {
    render(<CommonTextField label='Username' value='' onChange={() => {}} disabled />);
    const input = screen.getByLabelText('Username');
    expect(input).toBeDisabled();
  });

  it('renders with the correct variant and size', () => {
    render(
      <CommonTextField
        label='Username'
        value=''
        onChange={() => {}}
        variant='filled'
        size='small'
      />,
    );
    const input = screen.getByLabelText('Username');
    expect(input).toHaveClass('MuiFilledInput-input');
    expect(input).toHaveClass('MuiInputBase-inputSizeSmall');
  });

  it('shows required indicator when required prop is true', () => {
    render(<CommonTextField label='Username' value='' onChange={() => {}} required />);
    const label = screen.getByText('Username');
    expect(label).toHaveClass('Mui-required');
  });
});
