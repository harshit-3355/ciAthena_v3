import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';

import { LibraryPage, PreviewPage, OngoingThreadsPage } from '#/pages';

export const routesConfig = [
  {
    key: 'home',
    path: '/',
    component: <LibraryPage />,
    label: 'HEADING.HOME',
    icon: <HomeOutlinedIcon />,
  },
  {
    key: 'insights-lab',
    path: '/insights-lab',
    component: <PreviewPage />,
    label: 'HEADING.INSIGHTS_LAB',
    icon: <SignalCellularAltOutlinedIcon />,
  },
  {
    key: 'ongoing-threads',
    path: '/ongoing-threads',
    component: <OngoingThreadsPage />,
    label: 'HEADING.ONGOING_THREADS',
    icon: <QuestionAnswerOutlinedIcon />,
  },
];
