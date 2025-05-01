import { Box, Typography, Button, Card, CardContent, Stack } from '@mui/material';

const PointsOfInterestSection = () => {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.paper' }}>
      {/* Header with title and view all button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant='h6' fontWeight='bold'>
          Points of Interest
        </Typography>
        <Button variant='text' color='primary' sx={{ textTransform: 'none' }}>
          View All
        </Button>
      </Box>

      {/* Cards stack */}
      <Stack spacing={2}>
        {[1, 2, 3].map(item => (
          <Card key={item} variant='outlined'>
            <CardContent>
              <Typography variant='body1'>Total product writers in the market?</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default PointsOfInterestSection;
