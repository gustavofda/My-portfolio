import { Container, Grid, Typography, Box, Link, styled } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const StyledAbout = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('xs')]: {
  
    paddingTop: '100px',
  },
  [theme.breakpoints.up('md')]: {
    
    paddingTop: '0',
  },
}));

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <StyledAbout id={id}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Beyond the Code: Who Am I?
            </Typography>
            <Typography variant="h5" paragraph>
              How about connecting with me on the social networks below and learning more about my work?
            </Typography>
            <Box display="flex" alignItems="center">
              <Link href="https://www.instagram.com" target="_blank" rel="noopener" sx={{ marginRight: 2, color: 'inherit' }}>
                <InstagramIcon />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener" sx={{ marginRight: 2, color: 'inherit' }}>
                <LinkedInIcon />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener" sx={{ color: 'inherit' }}>
                <FacebookIcon />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Front-End Developer passionate about technology and creative solutions.
            </Typography>
            <Typography variant="body1" paragraph>
              Hello, I'm Gustavo Araujo! I'm a web developer focused on front-end development. My journey in the tech world has led me to gain intermediate experience in JavaScript, TypeScript, Node, and React. Over time, I've immersed myself in studies and projects to refine my skills and stand out in the web development scene. Currently, I'm pursuing a degree in Systems Analysis and Development at Universidade Nove de Julho.
            </Typography>
            <Typography variant="body1" paragraph>
              I love the challenge of finding innovative and creative solutions to complex problems, and I'm always looking to learn and grow as a professional.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
}

export default About;