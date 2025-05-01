import { Box, Typography, List, ListItem } from '@mui/material';

interface SuggestedQueryProps {
  sections: Array<{
    title: string;
    questions: string[];
  }>;
}

const containerStyles = {
  maxWidth: 1200,
  mx: 'auto',
  py: 3,
  px: 4,
  display: 'flex',
  gap: 2,
};

const sectionStyles = {
  mb: 4,
  p: 3,
  borderRadius: 2,
  bgcolor: 'background.paper',
  background:
    'linear-gradient(110.99deg, rgba(3, 116, 187, 0.11) 12.9%, rgba(210, 100, 194, 0.11) 49.94%, rgba(147, 82, 229, 0.11) 90.53%)',
};

const titleStyles = {
  color: 'rgba(104, 103, 103, 1)',
  fontSize: '16px',
  fontWeight: 600,
  mt: 0,
  pb: 2,
};

const listStyles = {
  paddingLeft: 0,
  color: 'rgba(100, 100, 100, 1)',
  fontSize: 13,
  opacity: 0.8,
};

const listItemStyles = {
  py: 1,
  backgroundColor: 'white',
  marginBlock: '5px',
  borderRadius: 2,
  fontWeight: 400,
  fontSize: 13,
};

const SuggestedQuery = ({ sections }: SuggestedQueryProps) => {
  return (
    <Box sx={containerStyles}>
      {sections.map((section, index) => (
        <Box key={index} sx={sectionStyles}>
          <Typography variant='body2' sx={titleStyles}>
            {section.title}
          </Typography>
          <List dense disablePadding sx={listStyles}>
            {section.questions.map((question, qIndex) => (
              <ListItem key={qIndex} sx={listItemStyles}>
                {question}
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default SuggestedQuery;
