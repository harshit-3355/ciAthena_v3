import { Box, type SxProps, type Theme, Typography } from '@mui/material';

interface LegendProps {
  data: {
    label: string;
    color: string;
  };
}

const styles: Record<string, SxProps<Theme>> = {
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
};

export default function Legend({ data }: LegendProps) {
  // const { colorDot } = styles;

  return (
    <Box key={data.label} sx={styles.card}>
      <div
        style={{ backgroundColor: data.color, width: '14px', height: '14px', borderRadius: '100%' }}
      />
      <Typography>{data.label}</Typography>
    </Box>
  );
}
