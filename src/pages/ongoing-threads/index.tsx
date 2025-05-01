import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { Box, CircularProgress, Tooltip, Typography, useTheme } from '@mui/material';
import { useState, useMemo } from 'react';
import Markdown from 'react-markdown';

import ciAthenaPageHeader from '#/assets/ci-athena-page-header.png';
import FavorableLogo from '#/assets/favorable.png';
import { AppHeader } from '#/components/atoms';
import QueryHistory from '#/components/common/query-history';
import SuggestedQuery from '#/components/common/suggested-query';
import { sections, historyData } from '#/pages/ongoing-threads/const';
import NewQuerySection from '#/pages/ongoing-threads/new-query-section';
import PointsOfInterestSection from '#/pages/ongoing-threads/points-of-interest';
import { styles } from '#/pages/ongoing-threads/style';
import { useQueryResult } from '#/query/sample';
import { type ChatMessage } from '#/types/sample';

const sectionWidth = '25%';

const {
  pageContainer,
  sectionBoxLeft,
  sectionBoxRight,
  centerSection,
  sharedCentered,
  queryBox,
  mainQueryTitle,
  resultContainer,
  resultTitle,
  resultText,
  sqlQueryText,
  introTitle,
} = styles;

const OngoingThreadsPage = () => {
  const searchParams = new URLSearchParams(location.search);
  const appName = searchParams.get('appName') ?? 'favour';
  const theme = useTheme();
  const [initialSearchQuery, setInitialSearchQuery] = useState('');
  const [searchQueryText, setSearchQueryText] = useState('');
  const [searchQueryHistoryText, setSearchQueryHistoryText] = useState('');
  const [sessionHistory, setSessionHistory] = useState<ChatMessage[]>([]);

  const {
    mutate: getQueryResponse,
    isPending,
    isSuccess,
  } = useQueryResult({
    onSuccess: res => setSessionHistory(prev => [...prev, { ...res, query: initialSearchQuery }]),
  });

  const handleSearchSubmit = () => {
    if (!searchQueryText) return;
    setInitialSearchQuery(searchQueryText);
    setSearchQueryText('');
    // TODO: Add session ID. Using a static value for now.
    getQueryResponse({ query: searchQueryText, appName, sessionId: '1234' });
  };

  const showRightPanel = Boolean(initialSearchQuery);

  const centerWidth = useMemo(
    () => `calc(100% - ${sectionWidth} * ${showRightPanel ? 2 : 1})`,
    [showRightPanel],
  );

  const renderResult = () =>
    sessionHistory.map((result, index) => (
      <Box key={index} sx={resultContainer}>
        <Tooltip title={initialSearchQuery}>
          <Typography sx={mainQueryTitle}>{result.query}</Typography>
        </Tooltip>
        {result.error && (
          <Typography variant='body2' color='error'>
            Something went wrong. Please try again.
          </Typography>
        )}
        {result.response && (
          <>
            <Typography variant='h6' sx={resultTitle}>
              Top writers overview:
            </Typography>
            <Typography variant='body2' sx={resultText}>
              <Markdown>{result.response}</Markdown>
            </Typography>
            <Typography variant='body2' sx={sqlQueryText}>
              {JSON.stringify(result.sql_query_output)}
            </Typography>
          </>
        )}
      </Box>
    ));

  const renderIntroSection = () => (
    <>
      <Typography variant='h4' sx={introTitle}>
        Let’s embark on a journey of knowledge
      </Typography>
      <NewQuerySection
        searchQueryText={searchQueryText}
        onSearchQueryTextChange={e => setSearchQueryText(e.target.value)}
        onSubmit={handleSearchSubmit}
      />
      <SuggestedQuery sections={sections} />
    </>
  );

  const renderQueryResults = () => (
    <Box sx={queryBox}>
      {isPending ? (
        <Box sx={sharedCentered}>
          <CircularProgress />
        </Box>
      ) : isSuccess ? (
        renderResult()
      ) : (
        <Box
          sx={{
            ...sharedCentered,
            flexDirection: 'column',
            textAlign: 'center',
            padding: 4,
            borderRadius: 2,
            color: theme.palette.error.dark,
          }}
        >
          <Typography variant='h6' gutterBottom>
            Something went wrong
          </Typography>
          <Typography variant='body2' sx={{ mb: 2 }}>
            We couldn’t fetch the data. Please check your connection or try again.
          </Typography>
        </Box>
      )}
    </Box>
  );

  return (
    <>
      <AppHeader
        leftContent={{
          icon: <GridViewOutlinedIcon sx={{ fontSize: 24 }} />,
          logo: FavorableLogo,
          heading: appName,
          showDivider: true,
        }}
        rightContent={{ onClick: () => console.log('Button clicked!') }}
        backgroundImage={ciAthenaPageHeader}
      />

      <Box sx={pageContainer}>
        {/* Left: Query History */}
        <Box sx={sectionBoxLeft}>
          <QueryHistory
            historySearchText={searchQueryHistoryText}
            sections={historyData}
            onSearchHistoryTextChange={e => setSearchQueryHistoryText(e.target.value)}
          />
        </Box>

        {/* Center: Main Query Panel */}
        <Box sx={centerSection(centerWidth, theme.palette.secondary.main)}>
          <Box height='70%' overflow='auto'>
            {initialSearchQuery ? renderQueryResults() : renderIntroSection()}
          </Box>

          {initialSearchQuery && (
            <NewQuerySection
              isActionDisabled={isPending}
              searchQueryText={searchQueryText}
              onSearchQueryTextChange={e => setSearchQueryText(e.target.value)}
              onSubmit={handleSearchSubmit}
            />
          )}
        </Box>

        {/* Right: Points of Interest */}
        {showRightPanel && (
          <Box sx={sectionBoxRight}>
            <PointsOfInterestSection />
          </Box>
        )}
      </Box>
    </>
  );
};

export default OngoingThreadsPage;
