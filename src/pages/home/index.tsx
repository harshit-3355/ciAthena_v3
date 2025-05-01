import { Box, Tab, Tabs, Typography, type SxProps, type Theme } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ENDPOINTS from '#/apis/endpoints';
import ciHeader from '#/assets/ci-header.png';
import { type AppItem } from '#/types';

import AppCard from './app-card';
import Legend from './legend';

const styles: Record<string, SxProps<Theme>> = {
  header: {
    background: `url(${ciHeader}) center center/cover no-repeat`,
    height: '271px',
    padding: '57px 44px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    boxSizing: 'border-box',
  },
  headerText: {
    fontSize: '48px',
    fontWeight: 700,
  },
  gradientText: {
    background: '-webkit-linear-gradient(0deg, #0374BB, #D264C2, #9352E5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  secondaryText: {
    fontSize: 22,
    fontWeight: 400,
  },
  mainer: {
    padding: '23px 44px',
  },
  appListContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(302px, 1fr))',
    gap: '24px',
  },
  legendsContainer: {
    display: 'flex',
    gap: '24px',
    marginTop: '50px',
  },
};

const NAV_LIST = [
  {
    label: 'Market Access',
    value: 'market-access',
  },
  {
    label: 'Commercial Operations',
    value: 'commercial-operations',
  },
  {
    label: 'Marketing',
    value: 'marketing',
  },
  {
    label: 'Commercial Analytics',
    value: 'commercial-analytics',
  },
];

const LEGENDS = [
  {
    label: 'Payer & Access Landscape',
    color: '#678FC0',
  },
  {
    label: 'Market Access Opportunity',
    color: '#B28300',
  },
  {
    label: 'Payer/Access Landscape',
    color: '#A05DB1',
  },
];

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const { header, headerText, gradientText, secondaryText } = styles;
  const [currentTab, setCurrentTab] = useState(0);
  const [appList, setAppList] = useState<AppItem[]>([]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    async function fetchAppList() {
      try {
        const res = await axios.get<AppItem[]>(ENDPOINTS.APP_LIST);

        if (res.status === 200) {
          const data = res.data;
          setAppList(data);
        } else {
          console.error('Failed to fetch app list:', res.statusText);
        }
      } catch (error) {
        console.error('Error fetching app list:', error);
      }
    }

    void fetchAppList();
  }, []);

  return (
    <Box>
      <Box sx={header}>
        <Typography color='secondary' sx={headerText}>
          More than just{' '}
          <Typography variant='inherit' component='span' sx={gradientText}>
            answers...
          </Typography>
        </Typography>
        <Typography color='secondary' sx={secondaryText}>
          Our <span style={{ fontWeight: 700 }}>ciATHENA Assist</span> empowers you to extract
          meaningful, actionable <br /> insights from over{' '}
          <span style={{ fontWeight: 700 }}>40 applications</span> within our{' '}
          <span style={{ fontWeight: 700 }}>Commercial Analytics Cloud</span>.
        </Typography>
      </Box>
      <Box sx={styles.mainer}>
        <Tabs value={currentTab} onChange={handleChange} aria-label='basic tabs example'>
          {NAV_LIST.map(({ label, value }) => (
            <Tab key={value} label={label} {...a11yProps(0)} />
          ))}
        </Tabs>
        <Box>
          <Typography variant='subtitle2' color='textSecondary' sx={{ marginY: '20px' }}>
            Select an app to get started
          </Typography>
          <Box sx={styles.appListContainer}>
            {appList.map(item => {
              return <AppCard key={item['App Name']} data={item} />;
            })}
          </Box>
        </Box>

        <Box sx={styles.legendsContainer}>
          {LEGENDS.map(item => {
            return <Legend data={item} key={item.label} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}
