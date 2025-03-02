import { Container, Grid, Typography, Box, Link, styled } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const StyledAbout = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(8, 0),
}));

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <StyledAbout id={id}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Além do código: quem sou eu?
            </Typography>
            <Typography variant="h5" paragraph>
              Que tal se conectar comigo nas redes sociais abaixo e saber mais sobre meu trabalho?
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
              Desenvolvedor Front-End apaixonado por tecnologia e soluções criativas
            </Typography>
            <Typography variant="body1" paragraph>
              Olá, eu sou Gustavo Araujo, sou um Desenvolvedor web com foco em front-End. Minha jornada no universo da tecnologia me levou a adquirir experiência intermediária nas linguagens JavaScript, TypeScript, Node e React. Ao longo do tempo, mergulhei nos estudos e projetos para aprimorar minhas habilidades, e me destacar no cenário de desenvolvimento web. Atualmente estou cursando a faculdade de Análise e Desenvolvimento de Sistemas pela Universidade Nove de Julho.
            </Typography>
            <Typography variant="body1" paragraph>
              Eu amo o desafio de encontrar soluções inovadoras e criativas para problemas complexos e estou sempre buscando aprender e crescer como profissional.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
}

export default About;