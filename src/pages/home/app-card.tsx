import { type Theme } from '@emotion/react';
import { Card, type SxProps, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { type AppItem } from '#/types';

import AppIcon from './app-icon';

interface AppCardProps {
  data: AppItem;
}

const styles: Record<string, SxProps<Theme>> = {
  card: {
    padding: '16px 20px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    flex: '1 0 302px',
    border: '2px solid transparent',
    transition: 'border 0.3s ease',
    boxShadow: '0 0px 15px 2px rgb(0 0 0 / 0.1)',
    '&:hover': {
      boxShadow: '0 10px 15px 2px rgb(0 0 0 / 0.2)',
      transition: 'border 0.3s ease',
      background:
        'linear-gradient(white, white) padding-box, linear-gradient(to right, #0374BB, #D264C2, #9352E5) border-box',
      border: '2px solid transparent',
    },
  },
  title: {
    fontSize: '14px',
    fontWeight: 500,
    textAlign: 'left',
  },
};

export default function AppCard({ data }: AppCardProps) {
  const { card, title } = styles;
  const navigate = useNavigate();
  const handleClick = () => {
    void navigate(`/ongoing-threads?appName=${data['App Key']}`);
  };

  return (
    <Card key={data['App Name']} elevation={0} sx={card} component={'button'} onClick={handleClick}>
      <AppIcon type={data.Category} />
      <Typography sx={title}>{data['App Name']}</Typography>
    </Card>
  );
}
