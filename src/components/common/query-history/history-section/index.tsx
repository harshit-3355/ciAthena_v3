// components/common/query-history/history-section/QueryHistorySection.tsx

import { Box, Typography } from '@mui/material';

import {
  containerStyle,
  titleStyle,
  listWrapperStyle,
  itemStyle,
  primaryTextStyle,
  secondaryTextStyle,
} from '#/components/common/query-history/history-section/style';

import type React from 'react';

interface Query {
  primary: string;
  secondary: string;
}

export interface QueryHistorySectionProps {
  title: string;
  queries: Query[];
}

const QueryHistorySection: React.FC<QueryHistorySectionProps> = ({ title, queries }) => (
  <Box sx={containerStyle}>
    <Typography variant='body2' sx={titleStyle}>
      {title}
    </Typography>

    <Box sx={listWrapperStyle}>
      {queries.map((query, index) => (
        <Box key={index} sx={itemStyle}>
          <Typography variant='body1' sx={primaryTextStyle}>
            {query.primary}
          </Typography>
          <Typography variant='body2' sx={secondaryTextStyle}>
            {query.secondary}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export default QueryHistorySection;
