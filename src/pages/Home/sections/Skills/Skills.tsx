import { Container, Grid, Typography, styled } from '@mui/material';
import { FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

interface SkillsProps {
  id: string;
}

const StyledSkills = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(8, 0),
}));

const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
  '& svg': {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
}));

const StyledHr = styled('hr')(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  width: '50%',
  margin: `${theme.spacing(0.5)}px auto`, // Reduzida a margem superior e inferior
}));

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <StyledSkills id={id}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" align="center" gutterBottom>
              Skills
            </Typography>
            <StyledHr />
            <Typography variant="h5" paragraph>
            Discover the skills and tools I master that allow me to create creative and functional solutions for my clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <IconContainer>
              <FaReact size={80} color="#61DAFB" />
              <FaNodeJs size={80} color="#339933" />
              <SiTypescript size={80} color="#007ACC" />
              <FaJs size={80} color="#F7DF1E" />
            </IconContainer>
          </Grid>
        </Grid>
      </Container>
    </StyledSkills>
  );
}

export default Skills;