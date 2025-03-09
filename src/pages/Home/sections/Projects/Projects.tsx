import { Typography, styled, Grid } from '@mui/material';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

import dexterImage from '../../../../assets/Imageproject/dexter.png';

const projects = [
  { id: 1, title: 'Projeto Dexter', description: 'Descrição do projeto Dexter', image: dexterImage },
  { id: 2, title: 'Projeto 2', description: 'Descrição do Projeto 2', image: dexterImage },
  { id: 3, title: 'Projeto 3', description: 'Descrição do Projeto 3', image: dexterImage },
  { id: 4, title: 'Projeto 4', description: 'Descrição do Projeto 4', image: dexterImage },
];

const Projects: React.FC = () => {
  const [, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('isIntersecting:', entry.isIntersecting);
        if (entry.isIntersecting) {
          setInView(true);
          setHasBeenInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const StyledProjects = styled('div')(({ theme }) => ({
    backgroundColor: '#232323',
    padding: theme.spacing(4),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      paddingTop: '100px',
    },
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
        <Typography variant="h1" component="h1" align="center" sx={{ marginBottom: 4, color: 'white' }}>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: hasBeenInView ? 1 : 0, y: hasBeenInView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ProjectGrid>
                  <ProjectImage src={project.image} alt={project.title} />
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body1">{project.description}</Typography>
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