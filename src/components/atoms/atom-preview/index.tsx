import { Box, Container, Typography, Stack, Divider } from '@mui/material';
import { useState } from 'react';

import { CommonButton, CommonTextField, CommonDialog } from '#/components/atoms';
import { useTextTranslation } from '#/utils/translation';

const AtomsPreview = () => {
  const [textValue, setTextValue] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const { translate } = useTextTranslation();

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container maxWidth='md'>
      <h1>{translate('HEADING.WELCOME')}</h1>
      <p>{translate('HEADING.DESCRIPTION')}</p>

      <Typography variant='h4' component='h1' gutterBottom>
        Atoms Components Preview
      </Typography>

      {/* Button Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant='h5' color='primary' component='h2' gutterBottom>
          Button Component
        </Typography>
        <Stack direction='row' spacing={2} sx={{ mb: 2 }}>
          <CommonButton label='Contained Primary' variant='contained' color='primary' />
          <CommonButton label='Outlined Secondary' variant='outlined' color='secondary' />
          <CommonButton label='Text Error' variant='text' color='error' />
        </Stack>
        <Box sx={{ mb: 4, alignItems: 'flex-start' }}>
          <CommonButton variant='contained' label='Small' size='small' />
          <CommonButton variant='contained' label='Medium' size='medium' sx={{ marginInline: 2 }} />
          <CommonButton variant='contained' label='Large' size='large' />
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* TextField Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant='h5' component='h2' gutterBottom>
          TextField Component
        </Typography>
        <Stack spacing={3} sx={{ maxWidth: 400 }}>
          <CommonTextField
            label='Standard Text Field'
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
            placeholder='Enter text here'
          />
          <CommonTextField
            label='Password Field'
            type='password'
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
            placeholder='Enter password'
          />
          <CommonTextField
            label='Error State'
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
            error
            helperText='This is an error message'
          />
          <CommonTextField
            label='Disabled State'
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
            disabled
          />
          <CommonTextField
            label='Required Field'
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
            required
          />
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Dialog Section */}
      <Box>
        <Typography variant='h5' component='h2' gutterBottom>
          Dialog Component
        </Typography>
        <CommonButton
          sx={{ mt: 2 }}
          label='Open Dialog'
          variant='contained'
          onClick={() => setDialogOpen(true)}
        />
        <CommonDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          title='Sample Dialog'
          content='This is a sample dialog content. You can add any content here.'
          actions={
            <>
              <CommonButton label='Cancel' variant='outlined' onClick={handleDialogClose} />
              <CommonButton label='Confirm' variant='contained' onClick={handleDialogClose} />
            </>
          }
        />
      </Box>
    </Container>
  );
};

export default AtomsPreview;
