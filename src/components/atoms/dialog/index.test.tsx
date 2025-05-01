import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import CommonDialog from '#/components/atoms/dialog';

describe('CommonDialog Component', () => {
  it('renders the dialog with the correct title', () => {
    render(<CommonDialog open={true} onClose={() => {}} title='Test Dialog' />);
    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
  });

  it('renders the dialog content', () => {
    render(<CommonDialog open={true} onClose={() => {}} content={<p>Dialog Content</p>} />);
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });

  it('renders the dialog actions', () => {
    render(<CommonDialog open={true} onClose={() => {}} actions={<button>Close</button>} />);
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('calls the onClose handler when the dialog is closed', () => {
    const handleClose = vi.fn();
    render(
      <CommonDialog
        open={true}
        onClose={handleClose}
        title='Test Dialog'
        actions={<button onClick={handleClose}>Close</button>}
      />,
    );
    fireEvent.click(screen.getByText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not render the dialog when open is false', () => {
    render(<CommonDialog open={false} onClose={() => {}} title='Hidden Dialog' />);
    expect(screen.queryByText('Hidden Dialog')).not.toBeInTheDocument();
  });
});
