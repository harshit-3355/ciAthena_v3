// components/QueryItem.tsx
import { Box, ListItem, Typography } from '@mui/material';

const QueryItem = ({ primary, secondary }: { primary: string; secondary: string }) => (
  <ListItem
    sx={{
      px: 0,
      py: 1.25,
      '&:hover': {
        backgroundColor: 'action.hover',
      },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        position: 'relative',
      }}
    >
      <Box sx={{ pl: '16px' }}>
        <Typography
          variant='body1'
          sx={{
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          {primary}
        </Typography>
        <Typography
          variant='body2'
          sx={{
            color: 'text.secondary',
            lineHeight: 1.3,
          }}
        >
          {secondary}
        </Typography>
      </Box>
    </Box>
  </ListItem>
);

export default QueryItem;
