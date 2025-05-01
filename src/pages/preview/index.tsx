import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

import AtomsPreview from '#/components/atoms/atom-preview';

const PreviewPage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#fff', padding: 2 }}>
      <Box sx={{ marginBottom: 2 }}>
        <Button
          variant='contained'
          onClick={async () => await changeLanguage('en')}
          sx={{ marginRight: 1 }}
        >
          English
        </Button>
        <Button variant='contained' onClick={async () => await changeLanguage('fr')}>
          Français
        </Button>
      </Box>

      <AtomsPreview />
    </Box>
  );
};

export default PreviewPage;
