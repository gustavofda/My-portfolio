import { Typography, styled, Grid, Link } from '@mui/material';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

import dexterImage from '../../../../assets/Imageproject/dexter.png';
import convertCoin from '../../../../assets/Imageproject/convermoedas.png';
import utopiaImage from '../../../../assets/Imageproject/utopia.png';
import metasImage from '../../../../assets/Imageproject/metas.png';

const projects = [
  { id: 1, title: 'Projeto Dexter', description: 'Projeto dedicado à série Dexter...', image: dexterImage, link: 'https://github.com/seu-usuario/projeto-dexter' },
  { id: 2, title: 'ConvCoin: Conversor de Moedas', description: 'App de conversão de moedas...', image: convertCoin, link: 'https://github.com/seu-usuario/convcoin' },
  { id: 3, title: 'Travis Scott: Utopia', description: 'Landing page sobre o álbum "Utopia"...', image: utopiaImage, link: 'https://github.com/seu-usuario/utopia' },
  { id: 4, title: 'App: Controle de Metas', description: 'Aplicação para acompanhar metas...', image: metasImage, link: 'https://github.com/seu-usuario/controle-de-metas' },
];

const Projects = () => {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (!projectsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenInView(true);
        }
      },
      { threshold: 0.1 } // Reduzido para melhor detecção no mobile
    );

    observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  const StyledProjects = styled('div')(({ theme }) => ({
    backgroundColor: '#232323',
    padding: theme.spacing(4),
    width: '100%',
    paddingTop: '50px', // Ajustado para não deslocar no mobile
    [theme.breakpoints.up('md')]: {
      paddingTop: '0',
    },
  }));

  const ProjectGrid = styled(Grid)(({ theme }) => ({
    border: '2px solid white',
    padding: theme.spacing(2),
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  }));

  const ProjectImage = styled('img')({
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '16px',
  });

  return (
    <Element name="projects-section">
      <StyledProjects ref={projectsRef}>
        <Typography variant="h2" align="center" sx={{ marginBottom: 4, color: 'white' }}>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={hasBeenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ProjectGrid>
                  <ProjectImage src={project.image} alt={project.title} />
                  <Typography variant="h5"><strong>{project.title}</strong></Typography>
                  <Typography variant="body1">{project.description}</Typography>
                  <Link href={project.link} target="_blank" rel="noopener" sx={{ marginTop: 2, color: 'lightblue' }}>
                    Leia mais
                  </Link>
                </ProjectGrid>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </StyledProjects>
    </Element>
  );
};

export default Projects;