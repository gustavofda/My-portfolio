import { Typography, styled, Grid, Link } from '@mui/material';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

import dexterImage from '../../../../assets/Imageproject/dexter.png';
import convertCoin from '../../../../assets/Imageproject/convermoedas.png';
import utopiaImage from '../../../../assets/Imageproject/utopia.png'
import metasImage from '../../../../assets/Imageproject/metas.png'

const projects = [
  { id: 1, title: 'Projeto Dexter', description: 'Projeto Dexter é um site desenvolvido em React com Tailwind CSS, dedicado à série Dexter. O projeto apresenta um menu com diferentes componentes, cada um focado em uma série específica, com design responsivo e uma interface moderna. O objetivo é aprimorar habilidades em desenvolvimento frontend, organização de componentes e estilização avançada com Tailwind.', image: dexterImage, link: 'https://github.com/seu-usuario/projeto-dexter' },

  { id: 2, title: 'ConvCoin: Conversor de Moedas', description: 'ConvCoin é um app de conversão de moedas que utiliza uma API de câmbio em tempo real para fornecer taxas sempre atualizadas. Com uma interface intuitiva, ele facilita a conversão entre moedas estrangeiras e o real, sendo ideal para viajantes e investidores. Além disso, o app garante rapidez e precisão, permitindo cálculos instantâneos para melhor planejamento financeiro.', image: convertCoin, link: 'https://github.com/seu-usuario/convcoin' },

  { id: 3, title: 'Travis Scott: Utopia', description: 'Este projeto é uma landing page dedicada ao álbum "Utopia" do rapper Travis Scott. A página inclui uma seção animada de boas-vindas, um reprodutor de música integrado e um navbar com links relevantes. O objetivo é criar uma página visualmente atraente e funcional para promover o álbum e a turnê do artista.', image: utopiaImage, link: 'https://github.com/seu-usuario/utopia' },

  { id: 4, title: 'App: Controle de Metas', description: 'App de Controle de Metas é uma aplicação em TypeScript, React e Node.js para criação e acompanhamento de metas semanais. O usuário define a frequência desejada via formulário, e as metas são enviadas para a API via POST. As metas pendentes são exibidas em uma lista, onde podem ser marcadas como concluídas, atualizando o progresso automaticamente.', image: metasImage, link: 'https://github.com/seu-usuario/controle-de-metas' },
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