import { Typography, styled, Grid, Link } from '@mui/material';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

import dexterImage from '../../../../assets/Imageproject/dexter.png';
import convertCoin from '../../../../assets/Imageproject/convermoedas.png';
import utopiaImage from '../../../../assets/Imageproject/utopia.png';
import metasImage from '../../../../assets/Imageproject/metas.png';

const projects = [
  { id: 1, title: 'Dexter: The Bay Harbor Site', description: 'The Bay Harbor Site is a website built with React and Tailwind CSS, dedicated to the Dexter series. The project features a menu with different components, each focused on a specific series, with a responsive design and a modern interface. The goal is to enhance skills in frontend development, component organization, and advanced styling with Tailwind.', image: dexterImage, link: 'https://github.com/gustavofda/TheBayHarbor-Site' },

  { id: 2, title: 'ConvCoin: Conversor de Moedas', description: 'ConvCoin is a currency conversion app that uses a real-time exchange rate API to provide always up-to-date rates. With an intuitive interface, it simplifies conversions between foreign currencies and the Brazilian real, making it ideal for travelers and investors. Additionally, the app ensures speed and accuracy, allowing instant calculations for better financial planning.', image: convertCoin, link: 'https://github.com/gustavofda/ConvCoin' },

  { id: 3, title: 'Travis Scott: Utopia', description: 'This project is a landing page dedicated to the album Utopia by rapper Travis Scott. The page features an animated welcome section, an integrated music player, and a navbar with relevant links. The goal is to create a visually appealing and functional page to promote the album and the artists tour.', image: utopiaImage, link: 'https://github.com/gustavofda/TOUR-CIRCUS-MAXIMUS' },

  { id: 4, title: 'App: Controle de Metas', description: 'Goal Tracker App is an application built with TypeScript, React, and Node.js for creating and tracking weekly goals. Users set their desired frequency through a form, and goals are sent to the API via POST. Pending goals are displayed in a list, where they can be marked as completed, automatically updating progress.', image: metasImage, link: 'https://github.com/gustavofda/App-Controle-de-Metas' },
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
      { threshold: 0.1 } 
    );

    observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  const StyledProjects = styled('div')(({ theme }) => ({
    backgroundColor: '#232323',
    padding: theme.spacing(4),
    width: '100%',
    paddingTop: '50px', 
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
        <Typography variant="h1" align="center" sx={{ marginBottom: 4, color: 'white' }}>
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