import SearchIcon from '@mui/icons-material/Search';
import { Box, Divider, IconButton, useTheme } from '@mui/material';
import { type ChangeEvent } from 'react';

import { CommonTextField } from '#/components/atoms';
import QueryHistorySection from '#/components/common/query-history/history-section';

interface QueryHistoryProps {
  historySearchText: string;
  onSearchHistoryTextChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  sections: Array<{
    title: string;
    queries: Array<{ primary: string; secondary: string }>;
  }>;
}

const QueryHistory = ({
  historySearchText = '',
  sections,
  onSearchHistoryTextChange,
}: QueryHistoryProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mx: 'auto',
        py: 2,
        '& .MuiListItem-root': {
          pl: '12px',
        },
      }}
    >
      <Box sx={{ mx: 2 }}>
        <CommonTextField
          autoFocus
          fullWidth
          variant='outlined'
          label=''
          value={historySearchText}
          onChange={onSearchHistoryTextChange}
          placeholder='Search previous queries...'
          inputAdornmentEnd={
            <IconButton edge='end' sx={{ color: theme.palette.text.secondary, zIndex: 1 }}>
              <SearchIcon />
            </IconButton>
          }
          sx={{
            background: theme.palette.common.white,
            borderRadius: '25px',
            color: theme.palette.text.primary,
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
              '& input': {
                zIndex: 1,
                height: '5px',
              },
              '& input::placeholder': {
                fontSize: '14px',
                color: theme.palette.text.secondary,
                opacity: 1,
              },
              // Hover state
              '&:hover .MuiOutlinedInput-notchedOutline': {
                background: `
                  linear-gradient(white, white) padding-box,
                  linear-gradient(90deg, #0374BB 1.16%, #D264C2 37.23%, #9352E5 76.76%) border-box
                `,
                border: '1px solid transparent',
              },
              // Focus state
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                background: `
                  linear-gradient(white, white) padding-box,
                  linear-gradient(90deg, #0374BB 1.16%, #D264C2 37.23%, #9352E5 76.76%) border-box
                `,
                border: '1px solid transparent',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '25px',
              background: `
                linear-gradient(white, white) padding-box,
                linear-gradient(90deg, #0374BB 1.16%, #D264C2 37.23%, #9352E5 76.76%) border-box
              `,
              border: '1px solid transparent',
            },
          }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />

      {sections.map(({ queries, title }) => (
        <QueryHistorySection key={title} title={title} queries={queries} />
      ))}
    </Box>
  );
};

export default QueryHistory;
