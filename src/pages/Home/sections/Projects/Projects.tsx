import { Box, Typography } from '@mui/material';

const Projects: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#232323', padding: 4, width: '100%' }}>
      <Typography variant="h1" component="h1" align="center" sx={{ marginBottom: 4, color: 'white' }}>
        Projects
      </Typography>
    </Box>
  );
};

export default Projects;