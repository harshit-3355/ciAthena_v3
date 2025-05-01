import { type Theme } from '@emotion/react';
import { type SxProps } from '@mui/material';
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import type React from 'react';

interface CommonTextFieldProps {
  /** Label for the text field */
  label: string;

  /** Value of the text field */
  value: string;

  /** Change event handler */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Placeholder text */
  placeholder?: string;

  /** Error state */
  error?: boolean;

  /** Helper text to display below the field */
  helperText?: string;

  /** Disable the text field */
  disabled?: boolean;

  /** Required field indicator */
  required?: boolean;

  /** Type of the input (default: 'text') */
  type?: 'text' | 'password' | 'email' | 'number';

  /** Full width of the container */
  fullWidth?: boolean;

  /** Custom styles using MUI's sx prop */
  sx?: SxProps<Theme>;

  /** Variant of the text field (default: 'outlined') */
  variant?: 'outlined' | 'filled' | 'standard';

  /** Size of the text field (default: 'medium') */
  size?: 'small' | 'medium';

  /** Input adornments (start or end) */
  inputAdornmentStart?: React.ReactNode;

  inputAdornmentEnd?: React.ReactNode;

  /** Props for the input field */
  slotProps?: any;

  /** Props for auto focus on field */
  autoFocus?: boolean;

  /** Key down event handler */
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const CommonTextField: React.FC<CommonTextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  error = false,
  helperText,
  disabled = false,
  required = false,
  type = 'text',
  fullWidth = true,
  sx,
  variant = 'outlined',
  size = 'medium',
  inputAdornmentStart,
  inputAdornmentEnd,
  slotProps,
  autoFocus,
  onKeyDown,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      disabled={disabled}
      required={required}
      type={type}
      fullWidth={fullWidth}
      sx={sx}
      variant={variant}
      size={size}
      autoFocus={autoFocus}
      slotProps={{
        input: {
          startAdornment: inputAdornmentStart ? (
            <InputAdornment position='start'>{inputAdornmentStart}</InputAdornment>
          ) : null,
          endAdornment: inputAdornmentEnd ? (
            <InputAdornment position='end'>{inputAdornmentEnd}</InputAdornment>
          ) : null,
        },
        ...slotProps, // Spread additional slot props for more flexibility
      }}
    />
  );
};

export default CommonTextField;
