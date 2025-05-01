// WIP
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, useTheme } from '@mui/material';
import { type ChangeEvent } from 'react';

import { CommonTextField } from '#/components/atoms';

interface NewQuerySectionProps {
  searchQueryText: string;
  onSearchQueryTextChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isActionDisabled?: boolean;
  onSubmit?: () => void;
}
const NewQuerySection = ({
  isActionDisabled = false,
  searchQueryText,
  onSearchQueryTextChange,
  onSubmit,
}: NewQuerySectionProps) => {
  const theme = useTheme();

  function handleKeyDown(e: React.KeyboardEvent) {
    return e.key === 'Enter' ? onSubmit?.() : null;
  }

  return (
    <Box
      sx={{
        mt: 4,
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <CommonTextField
        autoFocus
        fullWidth
        variant='outlined'
        label=''
        value={searchQueryText}
        onChange={onSearchQueryTextChange}
        onKeyDown={handleKeyDown}
        placeholder='Ask me anything...'
        sx={{
          background: theme.palette.common.white,
          borderRadius: '25px',
          '& input': {
            height: '20px',
          },
          '& .MuiOutlinedInput-root': {
            paddingRight: '25px',
            borderRadius: '25px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '25px',
          },
        }}
        inputAdornmentStart={
          <IconButton edge='start'>
            <SearchIcon />
          </IconButton>
        }
        inputAdornmentEnd={
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton disabled={isActionDisabled}>
              <MicNoneOutlinedIcon />
            </IconButton>
            <IconButton disabled={isActionDisabled} onClick={onSubmit}>
              <SendIcon sx={{ color: 'rgba(3, 116, 187, 1)', cursor: 'pointer' }} />
            </IconButton>
          </Box>
        }
      />
    </Box>
  );
};

export default NewQuerySection;
