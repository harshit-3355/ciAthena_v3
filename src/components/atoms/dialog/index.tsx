import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import type React from 'react';

interface CommonDialogProps {
  /** Dialog open state */
  open: boolean;

  /** Callback to close the dialog */
  onClose: () => void;

  /** Dialog title */
  title?: string;

  /** Dialog content */
  content?: React.ReactNode;

  /** Dialog actions (e.g., buttons) */
  actions?: React.ReactNode;
}

const CommonDialog: React.FC<CommonDialogProps> = ({ open, onClose, title, content, actions }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && <DialogContent>{content}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default CommonDialog;
